import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <>
      <Breadcrumb pageName="Terms of Service" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <Card>
            <CardContent className="p-8 prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
              
              <h2>Medical Disclaimer</h2>
              <p>The information provided on this website is for educational purposes only and is not intended as medical advice. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</p>
              
              <h2>Emergency Situations</h2>
              <p>If you are experiencing a medical emergency, call 911 immediately. Do not rely on information from this website in emergency situations.</p>
              
              <h2>Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the website.</p>
              
              <h2>Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, and images, is the property of Spot Stroke Fast Foundation and is protected by copyright laws.</p>
              
              <h2>Links to Third-Party Sites</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.</p>
              
              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Spot Stroke Fast Foundation shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.</p>
              
              <h2>Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of the website following any changes constitutes acceptance of those changes.</p>
              
              <h2>Contact Information</h2>
              <p>For questions about these Terms of Service, contact us at info@strokespotter.org</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}