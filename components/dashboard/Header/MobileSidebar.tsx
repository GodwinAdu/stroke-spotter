"use client"

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SidebarData from '../Sidebar/SidebarData'




const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='md:hidden'>
            <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='p-0 z-9999 bg-dark'>
        <div className='mt-5'>
        <SidebarData />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
