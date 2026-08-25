import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <Card>
            <CardContent className="p-8 prose dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, including name, email address, and any other information you choose to provide when you contact us or sign up for our newsletter.</p>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Send you educational materials and updates about stroke awareness</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
              
              <h2>Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted partners who assist us in operating our website and conducting our mission, as long as they agree to keep this information confidential.</p>
              
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
              
              <h2>Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. Contact us at info@strokespotter.org to exercise these rights.</p>
              
              <h2>Cookies</h2>
              <p>We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings.</p>
              
              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
              
              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy, please contact us at info@strokespotter.org</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}