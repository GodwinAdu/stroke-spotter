import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";

export default function InterviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Interviews</h1>
        <p className="text-muted-foreground mt-2">
          Manage and publish stroke survivor and expert interviews.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Video className="h-5 w-5" />
            Interview Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No interviews published yet. Create your first interview to share inspiring stories.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
