import Breadcrumb from '@/components/common/Breadcrumbs'
import DonateComponent from '@/components/donate/DonateComponent'
import { currentProfile } from '@/hooks/intial-profile'

import React from 'react'

const page = async () => {
  const user = await currentProfile()
  return (
    <>
      <Breadcrumb pageName="Donate Now" description="Your donation is a must" />
      <DonateComponent user={user} />

    </>
  )
}

export default page
