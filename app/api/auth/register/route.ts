import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongoose';
import User from '@/lib/models/user.models';
import { hashPassword, generateToken, setAuthCookie } from '@/lib/auth';
import { generateMembershipId } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { username, email, password, name } = await request.json();

    if (!username || !email || !password || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectToDB();

    const existingUser = await User.findOne({ 
      $or: [{ email }, { username: username.toLowerCase() }] 
    });

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const memberId = await generateMembershipId();

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      password: hashedPassword,
      name,
      memberId,
      onboarded: false,
    });

    const token = generateToken({ userId: user._id.toString(), email });
    
    const response = NextResponse.json({ 
      message: 'User created successfully',
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        name: user.name,
      }
    });

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}