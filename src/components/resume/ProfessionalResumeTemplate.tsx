import React from "react";
import { ResumeData } from "@/types/resume";
import {
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  Award,
  Code,
  Heart,
} from "lucide-react";

interface ProfessionalResumeTemplateProps {
  resumeData: ResumeData;
}

const ProfessionalResumeTemplate: React.FC<ProfessionalResumeTemplateProps> = ({
  resumeData,
}) => {
  const getSkillLevel = (index: number) => {
    // Simulate skill levels for demo
    const levels = [90, 85, 80, 75, 95, 70, 88, 82];
    return levels[index % levels.length] || 80;
  };

  return (
    <div
      className="bg-white w-full max-w-4xl mx-auto shadow-2xl"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="flex">
        {/* Left Sidebar - Dark */}
        <div className="w-1/3 bg-gray-800 text-white p-8 space-y-8">
          {/* Profile Photo Placeholder */}
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-gray-300" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              CONTACT
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>
                  {resumeData.personalInfo.email || "email@example.com"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>
                  {resumeData.personalInfo.phone || "+1 (555) 123-4567"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{resumeData.personalInfo.address || "City, State"}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              SKILLS
            </h3>
            <div className="space-y-3">
              {resumeData.skills.technical.slice(0, 8).map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{skill}</span>
                    <span>{getSkillLevel(index)}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getSkillLevel(index)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-600 pb-2">
              INTERESTS
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <Code className="w-6 h-6 mx-auto text-blue-400" />
                <span className="text-xs">Coding</span>
              </div>
              <div className="space-y-2">
                <Award className="w-6 h-6 mx-auto text-blue-400" />
                <span className="text-xs">Sports</span>
              </div>
              <div className="space-y-2">
                <Heart className="w-6 h-6 mx-auto text-blue-400" />
                <span className="text-xs">Music</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Light */}
        <div className="w-2/3 p-8 space-y-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {resumeData.personalInfo.fullName || "John Doe"}
            </h1>
            <p className="text-xl text-blue-600 font-medium">
              {resumeData.experience[0]?.position || "Professional Title"}
            </p>
          </div>

          {/* Objective */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
              OBJECTIVE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {resumeData.personalInfo.summary ||
                "Dedicated professional with extensive experience in delivering high-quality solutions and driving organizational success through innovative approaches and collaborative teamwork."}
            </p>
          </div>

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
                EXPERIENCE
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-blue-200"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-4 text-blue-600 font-medium">
                        <span>{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
                EDUCATION
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-4 text-blue-600 font-medium">
                      <span>{edu.institution}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
                PROJECTS
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-700">{project.description}</p>
                    <p className="text-blue-600 font-medium">
                      Technologies: {project.technologies}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResumeTemplate;
