import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share, QrCode, FileText } from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";

const ResumeExport: React.FC = () => {
  const { state } = useResume();
  const { resumeData } = state;

  const generateProfessionalResume = () => {
    // Create a new window to display the professional resume
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${resumeData.personalInfo.fullName} - Professional Resume</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { font-family: Arial, sans-serif; background: #f5f5f5; }
              .resume-container { background: white; max-width: 1000px; margin: 20px auto; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
              .layout { display: flex; }
              .sidebar { width: 33.333%; background: #374151; color: white; padding: 2rem; }
              .content { width: 66.667%; padding: 2rem; }
              .profile-photo { width: 8rem; height: 8rem; background: #4B5563; border-radius: 50%; margin: 0 auto 2rem; display: flex; align-items: center; justify-content: center; }
              .section { margin-bottom: 2rem; }
              .section h3 { font-size: 1.125rem; font-weight: bold; border-bottom: 1px solid #4B5563; padding-bottom: 0.5rem; margin-bottom: 1rem; }
              .contact-item { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; font-size: 0.875rem; }
              .skill-item { margin-bottom: 0.75rem; }
              .skill-bar { width: 100%; background: #4B5563; border-radius: 9999px; height: 0.5rem; margin-top: 0.25rem; }
              .skill-progress { height: 100%; background: #60A5FA; border-radius: 9999px; }
              .interests { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center; }
              .interest-item { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
              .main-title { font-size: 2.5rem; font-weight: bold; color: #1F2937; margin-bottom: 0.5rem; }
              .job-title { font-size: 1.25rem; color: #2563EB; font-weight: 500; }
              .content-section { margin-bottom: 2rem; }
              .content-section h2 { font-size: 1.5rem; font-weight: bold; color: #1F2937; border-bottom: 2px solid #2563EB; padding-bottom: 0.5rem; margin-bottom: 1rem; }
              .timeline-item { position: relative; padding-left: 1.5rem; border-left: 2px solid #DBEAFE; margin-bottom: 1.5rem; }
              .timeline-dot { position: absolute; left: -0.5rem; top: 0; width: 1rem; height: 1rem; background: #2563EB; border-radius: 50%; }
              .print-only { display: none; }
              @media print {
                body { background: white; }
                .resume-container { box-shadow: none; margin: 0; max-width: none; }
                .print-only { display: block; }
              }
            </style>
          </head>
          <body>
            <div class="resume-container">
              <div class="layout">
                <div class="sidebar">
                  <div class="profile-photo">
                    <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  
                  <div class="section">
                    <h3>CONTACT</h3>
                    <div class="contact-item">
                      <span>📧</span>
                      <span>${resumeData.personalInfo.email || "email@example.com"}</span>
                    </div>
                    <div class="contact-item">
                      <span>📱</span>
                      <span>${resumeData.personalInfo.phone || "+1 (555) 123-4567"}</span>
                    </div>
                    <div class="contact-item">
                      <span>📍</span>
                      <span>${resumeData.personalInfo.address || "City, State"}</span>
                    </div>
                  </div>
                  
                  <div class="section">
                    <h3>SKILLS</h3>
                    ${resumeData.skills.technical
                      .slice(0, 8)
                      .map((skill, index) => {
                        const levels = [90, 85, 80, 75, 95, 70, 88, 82];
                        const level = levels[index % levels.length] || 80;
                        return `
                        <div class="skill-item">
                          <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                            <span>${skill}</span>
                            <span>${level}%</span>
                          </div>
                          <div class="skill-bar">
                            <div class="skill-progress" style="width: ${level}%"></div>
                          </div>
                        </div>
                      `;
                      })
                      .join("")}
                  </div>
                  
                  <div class="section">
                    <h3>INTERESTS</h3>
                    <div class="interests">
                      <div class="interest-item">
                        <span>💻</span>
                        <span style="font-size: 0.75rem;">Coding</span>
                      </div>
                      <div class="interest-item">
                        <span>🏆</span>
                        <span style="font-size: 0.75rem;">Sports</span>
                      </div>
                      <div class="interest-item">
                        <span>🎵</span>
                        <span style="font-size: 0.75rem;">Music</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="content">
                  <div style="border-bottom: 1px solid #E5E7EB; padding-bottom: 1.5rem; margin-bottom: 2rem;">
                    <h1 class="main-title">${resumeData.personalInfo.fullName || "John Doe"}</h1>
                    <p class="job-title">${resumeData.experience[0]?.position || "Professional Title"}</p>
                  </div>
                  
                  <div class="content-section">
                    <h2>OBJECTIVE</h2>
                    <p style="color: #374151; line-height: 1.6;">
                      ${resumeData.personalInfo.summary || "Dedicated professional with extensive experience in delivering high-quality solutions and driving organizational success through innovative approaches and collaborative teamwork."}
                    </p>
                  </div>
                  
                  ${
                    resumeData.experience.length > 0
                      ? `
                    <div class="content-section">
                      <h2>EXPERIENCE</h2>
                      ${resumeData.experience
                        .map(
                          (exp) => `
                        <div class="timeline-item">
                          <div class="timeline-dot"></div>
                          <h3 style="font-size: 1.125rem; font-weight: bold; color: #1F2937; margin-bottom: 0.5rem;">${exp.position}</h3>
                          <div style="display: flex; gap: 1rem; color: #2563EB; font-weight: 500; margin-bottom: 0.5rem;">
                            <span>${exp.company}</span>
                            <span>📅 ${exp.duration}</span>
                          </div>
                          <p style="color: #374151; line-height: 1.6;">${exp.description}</p>
                        </div>
                      `,
                        )
                        .join("")}
                    </div>
                  `
                      : ""
                  }
                  
                  ${
                    resumeData.education.length > 0
                      ? `
                    <div class="content-section">
                      <h2>EDUCATION</h2>
                      ${resumeData.education
                        .map(
                          (edu) => `
                        <div style="margin-bottom: 1rem;">
                          <h3 style="font-size: 1.125rem; font-weight: bold; color: #1F2937; margin-bottom: 0.5rem;">${edu.degree}</h3>
                          <div style="display: flex; gap: 1rem; color: #2563EB; font-weight: 500;">
                            <span>${edu.institution}</span>
                            <span>📅 ${edu.year}</span>
                          </div>
                        </div>
                      `,
                        )
                        .join("")}
                    </div>
                  `
                      : ""
                  }
                  
                  ${
                    resumeData.projects.length > 0
                      ? `
                    <div class="content-section">
                      <h2>PROJECTS</h2>
                      ${resumeData.projects
                        .map(
                          (project) => `
                        <div style="margin-bottom: 1rem;">
                          <h3 style="font-size: 1.125rem; font-weight: bold; color: #1F2937; margin-bottom: 0.5rem;">${project.name}</h3>
                          <p style="color: #374151; margin-bottom: 0.5rem;">${project.description}</p>
                          <p style="color: #2563EB; font-weight: 500;">Technologies: ${project.technologies}</p>
                        </div>
                      `,
                        )
                        .join("")}
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            </div>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  const generateBasicResume = () => {
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${resumeData.personalInfo.fullName} - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 25px; }
            .section h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
            .contact-info { display: flex; justify-content: center; gap: 20px; margin-top: 10px; }
            .experience-item, .education-item, .project-item { margin-bottom: 15px; }
            .skills { display: flex; flex-wrap: wrap; gap: 10px; }
            .skill { background: #e5e7eb; padding: 5px 10px; border-radius: 15px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${resumeData.personalInfo.fullName}</h1>
            <div class="contact-info">
              <span>${resumeData.personalInfo.email}</span>
              <span>${resumeData.personalInfo.phone}</span>
              <span>${resumeData.personalInfo.address}</span>
            </div>
          </div>
          
          ${
            resumeData.personalInfo.summary
              ? `
            <div class="section">
              <h2>Professional Summary</h2>
              <p>${resumeData.personalInfo.summary}</p>
            </div>
          `
              : ""
          }
          
          ${
            resumeData.experience.length > 0
              ? `
            <div class="section">
              <h2>Experience</h2>
              ${resumeData.experience
                .map(
                  (exp) => `
                <div class="experience-item">
                  <h3>${exp.position} at ${exp.company}</h3>
                  <p><strong>${exp.duration}</strong></p>
                  <p>${exp.description}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
          
          ${
            resumeData.education.length > 0
              ? `
            <div class="section">
              <h2>Education</h2>
              ${resumeData.education
                .map(
                  (edu) => `
                <div class="education-item">
                  <h3>${edu.degree}</h3>
                  <p>${edu.institution} - ${edu.year}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
          
          ${
            resumeData.skills.technical.length > 0
              ? `
            <div class="section">
              <h2>Skills</h2>
              <div class="skills">
                ${resumeData.skills.technical.map((skill) => `<span class="skill">${skill}</span>`).join("")}
              </div>
            </div>
          `
              : ""
          }
          
          ${
            resumeData.projects.length > 0
              ? `
            <div class="section">
              <h2>Projects</h2>
              ${resumeData.projects
                .map(
                  (project) => `
                <div class="project-item">
                  <h3>${project.name}</h3>
                  <p>${project.description}</p>
                  <p><strong>Technologies:</strong> ${project.technologies}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          `
              : ""
          }
        </body>
      </html>
    `;

    const blob = new Blob([resumeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resumeData.personalInfo.fullName || "Resume"}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = () => {
    // Generate the professional resume in a new window which can be printed to PDF
    generateProfessionalResume();
  };

  return (
    <div className="glass-card p-4">
      <h6 className="font-semibold mb-4">Export & Share</h6>

      <div className="flex flex-col gap-2">
        <Button
          onClick={handleDownloadPDF}
          variant="contained"
          sx={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
          }}
        >
          <Download className="mr-2" />
          Download PDF
        </Button>

        <Button
          onClick={generateProfessionalResume}
          variant="outlined"
          sx={{
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
        >
          <FileText className="mr-2" />
          Professional Export
        </Button>

        <Button
          onClick={generateBasicResume}
          variant="outlined"
          sx={{
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
        >
          <Download className="mr-2" />
          Basic HTML Export
        </Button>

        <Button
          onClick={() => {}} // No action for QR Code button
          variant="outlined"
          sx={{
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
        >
          <QrCode className="mr-2" />
          Generate QR Code
        </Button>

        <Button
          onClick={() => {}} // No action for Share Link button
          variant="outlined"
          sx={{
            borderColor: "hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
        >
          <Share className="mr-2" />
          Share Link
        </Button>
      </div>
    </div>
  );
};

export default ResumeExport;
