import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

export default function EmergencyPage() {
  return (
    <>
      <Breadcrumb pageName="Emergency Action" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-600 to-purple-600 text-white mb-8">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Stroke Emergency</h1>
              <p className="text-xl mb-6">If you notice ANY stroke symptoms, call 911 immediately!</p>
              <Link href="tel:911">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 911 Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-red-600" />
                  F.A.S.T. Recognition
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-red-600">F</Badge>
                    <div><strong>Face Drooping:</strong> Ask the person to smile. Does one side droop?</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-red-600">A</Badge>
                    <div><strong>Arm Weakness:</strong> Ask them to raise both arms. Does one drift down?</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-red-600">S</Badge>
                    <div><strong>Speech Difficulty:</strong> Ask them to repeat a simple phrase. Is speech slurred?</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-red-600">T</Badge>
                    <div><strong>Time to Call 911:</strong> If you see ANY of these signs, call 911 immediately!</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">⚠️ Other Warning Signs</h3>
                <ul className="space-y-2">
                  <li>• Sudden numbness or weakness in face, arm, or leg</li>
                  <li>• Sudden confusion or trouble understanding</li>
                  <li>• Sudden trouble seeing in one or both eyes</li>
                  <li>• Sudden trouble walking, dizziness, loss of balance</li>
                  <li>• Sudden severe headache with no known cause</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}