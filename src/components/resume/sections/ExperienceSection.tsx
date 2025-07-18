import React, { useState } from "react";
import { Trash } from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";
import { Button } from "@/components/ui/button";

const ExperienceSection: React.FC = () => {
  const { state, addExperience, updateExperience, removeExperience } =
    useResume();
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    duration: "",
    location: "",
    description: "",
  });

  const handleAddExperience = () => {
    if (newExperience.company && newExperience.position) {
      addExperience(newExperience);
      setNewExperience({
        company: "",
        position: "",
        duration: "",
        location: "",
        description: "",
      });
    }
  };

  const handleUpdateExperience = (id: string, field: string, value: string) => {
    updateExperience(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Experience Items */}
      {state.resumeData.experience.map((exp) => (
        <div
          key={exp.id}
          className="p-4 glass-card rounded-lg border border-border"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">Experience Entry</h3>
            <Button
              onClick={() => removeExperience(exp.id)}
              size="icon"
              variant="destructive"
              className="ml-2"
              aria-label="Remove Experience"
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={exp.company}
                onChange={(e) =>
                  handleUpdateExperience(exp.id, "company", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Position</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={exp.position}
                onChange={(e) =>
                  handleUpdateExperience(exp.id, "position", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Duration (e.g., Jan 2020 - Present)
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={exp.duration}
                onChange={(e) =>
                  handleUpdateExperience(exp.id, "duration", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={exp.location}
                onChange={(e) =>
                  handleUpdateExperience(exp.id, "location", e.target.value)
                }
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                rows={3}
                value={exp.description}
                onChange={(e) =>
                  handleUpdateExperience(exp.id, "description", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add New Experience Form */}
      <div className="p-4 glass-card border-dashed border-2 border-muted rounded-lg">
        <h3 className="mb-4 font-semibold">Add New Experience</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({ ...newExperience, company: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newExperience.position}
              onChange={(e) =>
                setNewExperience({ ...newExperience, position: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newExperience.duration}
              onChange={(e) =>
                setNewExperience({ ...newExperience, duration: e.target.value })
              }
              placeholder="e.g., Jan 2020 - Present"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newExperience.location}
              onChange={(e) =>
                setNewExperience({ ...newExperience, location: e.target.value })
              }
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              rows={3}
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
              placeholder="Describe your key responsibilities and achievements..."
            />
          </div>
        </div>

        <Button
          onClick={handleAddExperience}
          disabled={!newExperience.company || !newExperience.position}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Add Experience
        </Button>
      </div>
    </div>
  );
};

export default ExperienceSection;
