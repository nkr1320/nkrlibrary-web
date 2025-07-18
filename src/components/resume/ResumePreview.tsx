import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Download,
  Share,
  QrCode,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";

interface ResumePreviewProps {
  mode: "desktop" | "mobile";
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ mode }) => {
  const { state, setTemplate } = useResume();
  const { resumeData } = state;

  const templates = [
    { id: "swiss", name: "Swiss", color: "#1976d2" },
    { id: "modern", name: "Modern", color: "#9c27b0" },
    { id: "ats", name: "ATS", color: "#2e7d32" },
    { id: "executive", name: "Executive", color: "#d84315" },
  ] as const;

  const getTemplateStyles = () => {
    switch (resumeData.template) {
      case "modern":
        return {
          headerBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          accentColor: "#667eea",
          fontFamily: '"Inter", sans-serif',
        };
      case "ats":
        return {
          headerBg: "#f8f9fa",
          accentColor: "#2e7d32",
          fontFamily: '"Arial", sans-serif',
        };
      case "executive":
        return {
          headerBg: "#1a1a1a",
          accentColor: "#d84315",
          fontFamily: '"Georgia", serif',
        };
      default: // swiss
        return {
          headerBg: "#ffffff",
          accentColor: "#1976d2",
          fontFamily: '"Helvetica", sans-serif',
        };
    }
  };

  const styles = getTemplateStyles();

  return (
    <div className="glass-card">
      {/* Preview Header */}
      <div className="p-4 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="font-semibold">Resume Preview</h2>

          <div className="flex flex-col sm:flex-row gap-2">
            {/* Template Selector */}
            <div className="flex gap-2">
              {templates.map((template) => (
                <Button
                  key={template.id}
                  onClick={() => setTemplate(template.id)}
                  variant={
                    resumeData.template === template.id ? "default" : "outline"
                  }
                  style={{
                    backgroundColor:
                      resumeData.template === template.id
                        ? template.color
                        : undefined,
                    color:
                      resumeData.template === template.id
                        ? "white"
                        : template.color,
                    borderColor: template.color,
                  }}
                  className="text-xs font-semibold px-3 py-1"
                >
                  {template.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="p-4">
        <motion.div
          key={resumeData.template}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`resume-preview ${mode === "mobile" ? "mobile-view" : "desktop-view"}`}
          style={{
            fontFamily: styles.fontFamily,
            minHeight: "800px",
            backgroundColor: "white",
            color: "#000",
            padding: "40px",
            maxWidth: mode === "mobile" ? "350px" : "100%",
            margin: "0 auto",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              background: styles.headerBg,
              margin: "-40px -40px 30px -40px",
              padding: "40px",
              borderRadius: "8px 8px 0 0",
              color: resumeData.template === "executive" ? "white" : "#000",
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                fontSize: mode === "mobile" ? "1.8rem" : "2.5rem",
                color: resumeData.template === "modern" ? "white" : "inherit",
              }}
            >
              {resumeData.personalInfo.fullName || "Your Name"}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "16px",
                fontSize: "0.9rem",
              }}
            >
              {resumeData.personalInfo.email && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Mail style={{ fontSize: "16px" }} />
                  {resumeData.personalInfo.email}
                </div>
              )}
              {resumeData.personalInfo.phone && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Phone style={{ fontSize: "16px" }} />
                  {resumeData.personalInfo.phone}
                </div>
              )}
              {resumeData.personalInfo.address && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <MapPin style={{ fontSize: "16px" }} />
                  {resumeData.personalInfo.address}
                </div>
              )}
              {resumeData.personalInfo.linkedin && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Linkedin style={{ fontSize: "16px" }} />
                  LinkedIn
                </div>
              )}
              {resumeData.personalInfo.github && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Github style={{ fontSize: "16px" }} />
                  GitHub
                </div>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          {resumeData.personalInfo.summary && (
            <section style={{ marginBottom: "30px" }}>
              <h6
                style={{
                  color: styles.accentColor,
                  fontWeight: "bold",
                  marginBottom: "12px",
                  borderBottom: `2px solid ${styles.accentColor}`,
                  paddingBottom: "4px",
                }}
              >
                PROFESSIONAL SUMMARY
              </h6>
              <p style={{ lineHeight: 1.6 }}>
                {resumeData.personalInfo.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <section style={{ marginBottom: "30px" }}>
              <h6
                style={{
                  color: styles.accentColor,
                  fontWeight: "bold",
                  marginBottom: "16px",
                  borderBottom: `2px solid ${styles.accentColor}`,
                  paddingBottom: "4px",
                }}
              >
                PROFESSIONAL EXPERIENCE
              </h6>
              {resumeData.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  style={{
                    marginBottom:
                      index === resumeData.experience.length - 1 ? 0 : "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "4px",
                    }}
                  >
                    <h6 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                      {exp.position}
                    </h6>
                    <p style={{ fontStyle: "italic", color: "#666" }}>
                      {exp.duration}
                    </p>
                  </div>
                  <p
                    style={{
                      color: styles.accentColor,
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    {exp.company} {exp.location && `• ${exp.location}`}
                  </p>
                  <p style={{ lineHeight: 1.5, color: "#444" }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <section style={{ marginBottom: "30px" }}>
              <h6
                style={{
                  color: styles.accentColor,
                  fontWeight: "bold",
                  marginBottom: "16px",
                  borderBottom: `2px solid ${styles.accentColor}`,
                  paddingBottom: "4px",
                }}
              >
                EDUCATION
              </h6>
              {resumeData.education.map((edu, index) => (
                <div
                  key={edu.id}
                  style={{
                    marginBottom:
                      index === resumeData.education.length - 1 ? 0 : "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6 style={{ fontWeight: "bold" }}>{edu.degree}</h6>
                      <p style={{ color: styles.accentColor }}>
                        {edu.institution} {edu.location && `• ${edu.location}`}
                      </p>
                    </div>
                    <p style={{ fontStyle: "italic", color: "#666" }}>
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {(resumeData.skills.technical.length > 0 ||
            resumeData.skills.soft.length > 0) && (
            <section style={{ marginBottom: "30px" }}>
              <h6
                style={{
                  color: styles.accentColor,
                  fontWeight: "bold",
                  marginBottom: "16px",
                  borderBottom: `2px solid ${styles.accentColor}`,
                  paddingBottom: "4px",
                }}
              >
                SKILLS
              </h6>

              {resumeData.skills.technical.length > 0 && (
                <div style={{ marginBottom: "12px" }}>
                  <h6 style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    Technical Skills:
                  </h6>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {resumeData.skills.technical.map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          backgroundColor:
                            resumeData.template === "ats"
                              ? "#f0f0f0"
                              : styles.accentColor + "20",
                          color:
                            resumeData.template === "ats"
                              ? "#333"
                              : styles.accentColor,
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "0.85rem",
                          border:
                            resumeData.template === "ats"
                              ? "1px solid #ddd"
                              : "none",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {resumeData.skills.soft.length > 0 && (
                <div>
                  <h6 style={{ fontWeight: "bold", marginBottom: "8px" }}>
                    Soft Skills:
                  </h6>
                  <p style={{ lineHeight: 1.5 }}>
                    {resumeData.skills.soft.join(" • ")}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Projects */}
          {resumeData.projects.length > 0 && (
            <section style={{ marginBottom: "30px" }}>
              <h6
                style={{
                  color: styles.accentColor,
                  fontWeight: "bold",
                  marginBottom: "16px",
                  borderBottom: `2px solid ${styles.accentColor}`,
                  paddingBottom: "4px",
                }}
              >
                PROJECTS
              </h6>
              {resumeData.projects.map((project, index) => (
                <div
                  key={project.id}
                  style={{
                    marginBottom:
                      index === resumeData.projects.length - 1 ? 0 : "16px",
                  }}
                >
                  <h6 style={{ fontWeight: "bold", marginBottom: "4px" }}>
                    {project.name}
                  </h6>
                  <p style={{ marginBottom: "4px", lineHeight: 1.5 }}>
                    {project.description}
                  </p>
                  {project.technologies && (
                    <p style={{ color: "#666", fontStyle: "italic" }}>
                      Technologies: {project.technologies}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {resumeData.certifications.length > 0 && (
            <section>
              <h6
                style={{
                  color: styles.accentColor,
                  fontWeight: "bold",
                  marginBottom: "16px",
                  borderBottom: `2px solid ${styles.accentColor}`,
                  paddingBottom: "4px",
                }}
              >
                CERTIFICATIONS
              </h6>
              {resumeData.certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  style={{
                    marginBottom:
                      index === resumeData.certifications.length - 1
                        ? 0
                        : "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h6 style={{ fontWeight: "bold" }}>{cert.name}</h6>
                      <p style={{ color: styles.accentColor }}>{cert.issuer}</p>
                    </div>
                    <p style={{ fontStyle: "italic", color: "#666" }}>
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePreview;
