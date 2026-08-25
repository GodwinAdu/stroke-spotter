import AdvancedHero from '@/components/modern/AdvancedHero'
import InteractiveStats from '@/components/modern/InteractiveStats'
import SmartFASTDemo from '@/components/modern/SmartFASTDemo'
import StrokeTypes from '@/components/modern/StrokeTypes'
import PreventionTips from '@/components/modern/PreventionTips'
import EmergencyAction from '@/components/modern/EmergencyAction'
import Testimonials from '@/components/modern/Testimonials'
import Newsletter from '@/components/newsletter/NewsLetter'
import FeedbackSection from '@/components/common/FeedbackSection'

export default function Home() {
  return (
    <>
      <AdvancedHero />
      <InteractiveStats />
      <SmartFASTDemo />
      <StrokeTypes />
      <PreventionTips />
      <EmergencyAction />
      <Testimonials />
      <Newsletter />
      <FeedbackSection />
    </>
  )
}
