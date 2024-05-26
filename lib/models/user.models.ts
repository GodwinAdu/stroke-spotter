import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        unique: true,
        required: true,
      },
      email:{
        type:String,
        required:true
      },
      name: {
        type: String,
        required: true,
      },
      image: String,
      bio: String,
      profession:String,
      country:String,
      sex:String,
      // phone: String,
      memberId: String,
      onboarded: {
        type: Boolean,
        default: false,
      },
    researchWriter:{
        type:Boolean,
        default: false
    },
    trainee:{
        type:Boolean,
        default: false
    },
    writer:{
        type:Boolean,
        default: true
    },
    speechWriter:{
        type:Boolean,
        default: false
    },
    duesPay:{
        type:Boolean,
        default: false
    },
    memberType: {
        type: String,
        enum: ['gold', 'silver', 'bronze', 'basic'], // example membership types, modify as needed
        default: 'basic',
    },
     admin: {
        type: Boolean,
        default:false
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

