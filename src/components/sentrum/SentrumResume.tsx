import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Plus,
  Trash2,
  MessageCircle,
  FileText,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useResume } from "@/contexts/ResumeContext";
import { useSentrum } from "@/contexts/SentrumContext";
import ProfessionalResumeTemplate from "@/components/resume/ProfessionalResumeTemplate";
import ResumePersonalInfo from "./resume/ResumePersonalInfo";
import ResumeSkills from "./resume/ResumeSkills";
import {
  generateProfessionalResumeHTML,
  generateBasicResumeHTML,
} from "./resume/ResumeExportUtils";

const SentrumResume: React.FC = () => {
  const {
    state,
    addExperience,
    removeExperience,
    updateExperience,
    addEducation,
    removeEducation,
    updateEducation,
    addProject,
    removeProject,
    updateProject,
  } = useResume();
  const { sendMessage } = useSentrum();

  const { resumeData } = state;

  const handleAddExperience = () => {
    addExperience({
      company: "",
      position: "",
      duration: "",
      description: "",
      location: "",
    });
  };

  const handleAddEducation = () => {
    addEducation({
      institution: "",
      degree: "",
      year: "",
      location: "",
    });
  };

  const handleAddProject = () => {
    addProject({
      name: "",
      description: "",
      technologies: "",
    });
  };

  const askAI = async (prompt: string) => {
    await sendMessage(`Help me with my resume: ${prompt}`);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              AI Resume Builder
            </h3>
            <p className="text-sm text-muted-foreground">
              Create your professional resume with AI assistance
            </p>
          </div>
          <Button
            onClick={() =>
              askAI("Help me improve my resume content and formatting")
            }
            variant="outline"
            size="sm"
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            Ask AI
          </Button>
        </div>
      </div>

      {/* Form */}
      <ScrollArea className="flex-1 h-0 min-h-0">
        <div className="space-y-6 p-4 pb-6">
          {/* Personal Information */}
          <ResumePersonalInfo />

          {/* Skills */}
          <ResumeSkills />

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">Experience</h4>
              <Button onClick={handleAddExperience} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            {resumeData.experience.map((exp) => (
              <div
                key={exp.id}
                className="p-3 border border-border rounded-lg space-y-2"
              >
                <div className="flex justify-between">
                  <h5 className="font-medium">Experience</h5>
                  <Button
                    onClick={() => removeExperience(exp.id)}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Input
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, { company: e.target.value })
                    }
                    placeholder="Company Name"
                  />
                  <Input
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, { position: e.target.value })
                    }
                    placeholder="Job Title"
                  />
                  <Input
                    value={exp.duration}
                    onChange={(e) =>
                      updateExperience(exp.id, { duration: e.target.value })
                    }
                    placeholder="Jan 2020 - Present"
                  />
                  <Textarea
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, { description: e.target.value })
                    }
                    placeholder="Describe your responsibilities and achievements..."
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">Education</h4>
              <Button onClick={handleAddEducation} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            {resumeData.education.map((edu) => (
              <div
                key={edu.id}
                className="p-3 border border-border rounded-lg space-y-2"
              >
                <div className="flex justify-between">
                  <h5 className="font-medium">Education</h5>
                  <Button
                    onClick={() => removeEducation(edu.id)}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Input
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducation(edu.id, { institution: e.target.value })
                    }
                    placeholder="University/College Name"
                  />
                  <Input
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, { degree: e.target.value })
                    }
                    placeholder="Degree/Certification"
                  />
                  <Input
                    value={edu.year}
                    onChange={(e) =>
                      updateEducation(edu.id, { year: e.target.value })
                    }
                    placeholder="Graduation Year"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">Projects</h4>
              <Button onClick={handleAddProject} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>

            {resumeData.projects.map((project) => (
              <div
                key={project.id}
                className="p-3 border border-border rounded-lg space-y-2"
              >
                <div className="flex justify-between">
                  <h5 className="font-medium">Project</h5>
                  <Button
                    onClick={() => removeProject(project.id)}
                    variant="ghost"
                    size="sm"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  <Input
                    value={project.name}
                    onChange={(e) =>
                      updateProject(project.id, { name: e.target.value })
                    }
                    placeholder="Project Name"
                  />
                  <Textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.id, { description: e.target.value })
                    }
                    placeholder="Project description..."
                    rows={2}
                  />
                  <Input
                    value={project.technologies}
                    onChange={(e) =>
                      updateProject(project.id, {
                        technologies: e.target.value,
                      })
                    }
                    placeholder="Technologies used (React, Node.js, etc.)"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" size="lg">
              <Eye className="h-4 w-4 mr-2" />
              Preview Professional Resume
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl h-[90vh]">
            <DialogHeader>
              <DialogTitle>Professional Resume Preview</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-full">
              <ProfessionalResumeTemplate resumeData={resumeData} />
            </ScrollArea>
          </DialogContent>
        </Dialog>

        <div className="grid grid-cols-2 gap-2">
          <Button
            onClick={() => generateProfessionalResumeHTML(resumeData)}
            variant="outline"
            size="sm"
          >
            <FileText className="h-4 w-4 mr-1" />
            Professional
          </Button>
          <Button
            onClick={() => generateBasicResumeHTML(resumeData)}
            variant="outline"
            size="sm"
          >
            <Download className="h-4 w-4 mr-1" />
            Basic
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SentrumResume;
