import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useResume } from "@/contexts/ResumeContext";

const ResumePersonalInfo: React.FC = () => {
  const { state, updatePersonalInfo } = useResume();
  const { resumeData } = state;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <h4 className="font-medium text-foreground flex items-center gap-2">
        <User className="h-4 w-4" />
        Personal Information
      </h4>

      <div className="grid grid-cols-1 gap-3">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={resumeData.personalInfo.phone}
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={resumeData.personalInfo.address}
            onChange={(e) => updatePersonalInfo({ address: e.target.value })}
            placeholder="City, State"
          />
        </div>

        <div>
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea
            id="summary"
            value={resumeData.personalInfo.summary}
            onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
            placeholder="Brief summary of your professional background..."
            rows={3}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePersonalInfo;
