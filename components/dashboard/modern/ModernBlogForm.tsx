"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, ArrowLeft, ArrowRight, Save } from "lucide-react";
import { createBlogAdmin } from "@/lib/actions/blog.actions";
import Image from "next/image";

const blogTags = [
  "Alternative Medicine", "Diet", "Disease Prevention", "Elderly Care", "Exercise",
  "First Aid", "Fitness", "Health", "Healthcare", "Health Promotion",
  "Healthy Eating", "Healthy Living", "Lifestyle", "Medical Advice", "Men's Health",
  "Mental Health", "Natural Remedies", "Nutrition", "Self-Care", "Sleep",
  "Stress Management", "Wellness", "Weight Loss", "Women's Health", "Stroke Prevention",
  "Stroke Recovery", "Stroke Awareness", "Emergency Response", "Others"
];

export default function ModernBlogForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    shortDescription: "",
    tags: "",
    content: ""
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData(prev => ({ ...prev, image: event.target!.result.toString() }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.shortDescription || !formData.tags) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      await createBlogAdmin({
        image: formData.image,
        title: formData.title,
        shortDescription: formData.shortDescription,
        tags: formData.tags,
        content: formData.content || formData.shortDescription,
        path: "/dashboard/blog"
      });
      router.push("/dashboard/blog");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Create New Blog Post
          </h1>
          <p className="text-muted-foreground mt-2">
            Share your knowledge and insights with the community
          </p>
        </div>
        <Badge variant="outline" className="px-3 py-1">
          Step {step} of 2
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {step === 1 ? (
              <>
                <Upload className="h-5 w-5" />
                <span>Blog Details</span>
              </>
            ) : (
              <>
                <Save className="h-5 w-5" />
                <span>Content & Publish</span>
              </>
            )}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="image">Featured Image</Label>
                {!formData.image ? (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById('image')?.click()}
                    >
                      Choose Image
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Upload a featured image for your blog post
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <Image
                      src={formData.image}
                      alt="Selected"
                      width={400}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => setFormData(prev => ({ ...prev, image: "" }))}
                    >
                      Change
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title..."
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Short Description *</Label>
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  placeholder="Brief description of your blog post..."
                  className="min-h-[100px]"
                  maxLength={200}
                />
                <p className="text-sm text-muted-foreground">
                  {formData.shortDescription.length}/200 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Category *</Label>
                <Select value={formData.tags} onValueChange={(value) => setFormData(prev => ({ ...prev, tags: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {blogTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="content">Blog Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write your blog content here..."
                  className="min-h-[300px]"
                />
                <p className="text-sm text-muted-foreground">
                  Write your full blog content. You can use markdown formatting.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-medium mb-2">Preview</h3>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{formData.title}</h4>
                  <p className="text-sm text-muted-foreground">{formData.shortDescription}</p>
                  <Badge variant="outline">{formData.tags}</Badge>
                </div>
              </div>
            </>
          )}

          <div className="flex items-center justify-between pt-6 border-t">
            {step === 2 && (
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            
            {step === 1 ? (
              <Button 
                onClick={() => setStep(2)}
                disabled={!formData.title || !formData.shortDescription || !formData.tags}
                className="ml-auto bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="ml-auto bg-gradient-to-r from-green-600 to-blue-600"
              >
                {isSubmitting ? "Publishing..." : "Publish Blog"}
                <Save className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}