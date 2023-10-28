
import AboutSectionOne from '@/components/about/AboutSectionOne'
import AboutSectionTwo from '@/components/about/AboutSectionTwo'
import ContentLinks from '@/components/common/ContentLinks'
import FeedbackSection from '@/components/common/FeedbackSection'

import YearTheme from '@/components/common/YearTheme'
import Features from '@/components/features/Feature'
import Hero from '@/components/hero/Hero'
import Mission from '@/components/mission/Mission'
import Newsletter from '@/components/newsletter/NewsLetter'
import StrokeAwarenessSection from '@/components/strokeInfosection/StokeAwarenessSection'
import StrokeByContinentSection from '@/components/strokeInfosection/StrokeByContinentSection'
import StrokeInfoSection from '@/components/strokeInfosection/StrokeInfoSection'
import StrokePersonalStoriesSection from '@/components/strokeInfosection/StrokePersonalStoriesSection'
import { useState } from 'react'


export default function Home() {
  
  return (
    <> 
      <Hero />
      <YearTheme year="2023" theme="Together we are #GreaterThan Stroke" />
      <ContentLinks />
      <StrokeInfoSection />
      <StrokeAwarenessSection />
      <Features />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
      <StrokeByContinentSection />
      <StrokePersonalStoriesSection />
      <Mission />
      <Newsletter />
      <FeedbackSection /> 
    </>
  )
}
