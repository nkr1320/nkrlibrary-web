import React, { useState } from "react";
import { Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResume } from "@/contexts/ResumeContext";

const SkillsSection: React.FC = () => {
  const { state, updateSkills } = useResume();
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState({
    language: "",
    proficiency: "Intermediate" as const,
  });

  const handleAddTechnicalSkill = () => {
    if (newTechnicalSkill.trim()) {
      const updatedSkills = [
        ...state.resumeData.skills.technical,
        newTechnicalSkill.trim(),
      ];
      updateSkills({ technical: updatedSkills });
      setNewTechnicalSkill("");
    }
  };

  const handleRemoveTechnicalSkill = (skillToRemove: string) => {
    const updatedSkills = state.resumeData.skills.technical.filter(
      (skill) => skill !== skillToRemove,
    );
    updateSkills({ technical: updatedSkills });
  };

  const handleAddSoftSkill = () => {
    if (newSoftSkill.trim()) {
      const updatedSkills = [
        ...state.resumeData.skills.soft,
        newSoftSkill.trim(),
      ];
      updateSkills({ soft: updatedSkills });
      setNewSoftSkill("");
    }
  };

  const handleRemoveSoftSkill = (skillToRemove: string) => {
    const updatedSkills = state.resumeData.skills.soft.filter(
      (skill) => skill !== skillToRemove,
    );
    updateSkills({ soft: updatedSkills });
  };

  const handleAddLanguage = () => {
    if (newLanguage.language.trim()) {
      const updatedLanguages = [
        ...state.resumeData.skills.languages,
        newLanguage,
      ];
      updateSkills({ languages: updatedLanguages });
      setNewLanguage({ language: "", proficiency: "Intermediate" });
    }
  };

  const handleRemoveLanguage = (languageToRemove: string) => {
    const updatedLanguages = state.resumeData.skills.languages.filter(
      (lang) => lang.language !== languageToRemove,
    );
    updateSkills({ languages: updatedLanguages });
  };

  return (
    <div className="space-y-6">
      {/* Technical Skills */}
      <div className="p-4 glass-card rounded-lg border border-border">
        <h3 className="mb-4 font-semibold">Technical Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
          {state.resumeData.skills.technical.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center bg-accent text-foreground rounded-full px-3 py-1 text-sm font-medium border border-border"
            >
              {skill}
              <button
                type="button"
                onClick={() => handleRemoveTechnicalSkill(skill)}
                className="ml-2 text-destructive hover:text-destructive/80 focus:outline-none"
                aria-label={`Remove ${skill}`}
              >
                <Trash className="w-3 h-3" />
              </button>
            </span>
          ))}
          {state.resumeData.skills.technical.length === 0 && (
            <span className="text-muted-foreground py-2">
              No technical skills added yet
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
            placeholder="e.g., JavaScript, React, Python"
            value={newTechnicalSkill}
            onChange={(e) => setNewTechnicalSkill(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTechnicalSkill()}
          />
          <Button
            onClick={handleAddTechnicalSkill}
            disabled={!newTechnicalSkill.trim()}
            className="px-2"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="p-4 glass-card rounded-lg border border-border">
        <h3 className="mb-4 font-semibold">Soft Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
          {state.resumeData.skills.soft.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center bg-accent text-foreground rounded-full px-3 py-1 text-sm font-medium border border-border"
            >
              {skill}
              <button
                type="button"
                onClick={() => handleRemoveSoftSkill(skill)}
                className="ml-2 text-destructive hover:text-destructive/80 focus:outline-none"
                aria-label={`Remove ${skill}`}
              >
                <Trash className="w-3 h-3" />
              </button>
            </span>
          ))}
          {state.resumeData.skills.soft.length === 0 && (
            <span className="text-muted-foreground py-2">
              No soft skills added yet
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
            placeholder="e.g., Leadership, Communication, Problem Solving"
            value={newSoftSkill}
            onChange={(e) => setNewSoftSkill(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddSoftSkill()}
          />
          <Button
            onClick={handleAddSoftSkill}
            disabled={!newSoftSkill.trim()}
            className="px-2"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Languages */}
      <div className="p-4 glass-card rounded-lg border border-border">
        <h3 className="mb-4 font-semibold">Languages</h3>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
          {state.resumeData.skills.languages.map((lang) => (
            <span
              key={lang.language}
              className="inline-flex items-center bg-accent text-foreground rounded-full px-3 py-1 text-sm font-medium border border-border"
            >
              {lang.language}{" "}
              <span className="ml-2 text-xs text-muted-foreground">
                ({lang.proficiency})
              </span>
              <button
                type="button"
                onClick={() => handleRemoveLanguage(lang.language)}
                className="ml-2 text-destructive hover:text-destructive/80 focus:outline-none"
                aria-label={`Remove ${lang.language}`}
              >
                <Trash className="w-3 h-3" />
              </button>
            </span>
          ))}
          {state.resumeData.skills.languages.length === 0 && (
            <span className="text-muted-foreground py-2">
              No languages added yet
            </span>
          )}
        </div>
        <div className="flex gap-2 flex-wrap items-end">
          <div className="flex-1 min-w-[120px]">
            <label className="block text-sm font-medium mb-1">Language</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              placeholder="e.g., English, Hindi"
              value={newLanguage.language}
              onChange={(e) =>
                setNewLanguage({ ...newLanguage, language: e.target.value })
              }
            />
          </div>
          <div className="flex-1 min-w-[120px]">
            <label className="block text-sm font-medium mb-1">
              Proficiency
            </label>
            <select
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newLanguage.proficiency}
              onChange={(e) =>
                setNewLanguage({
                  ...newLanguage,
                  proficiency: e.target.value as typeof newLanguage.proficiency,
                })
              }
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Native">Native</option>
            </select>
          </div>
          <Button
            onClick={handleAddLanguage}
            disabled={!newLanguage.language.trim()}
            className="px-2"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
