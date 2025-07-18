import React, { useState } from "react";
import { Plus, Trash } from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";
import { Button } from "@/components/ui/button";

const EducationSection: React.FC = () => {
  const { state, addEducation, updateEducation, removeEducation } = useResume();
  const [newEducation, setNewEducation] = useState({
    institution: "",
    degree: "",
    year: "",
    location: "",
    gpa: "",
  });

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree && newEducation.year) {
      addEducation(newEducation);
      setNewEducation({
        institution: "",
        degree: "",
        year: "",
        location: "",
        gpa: "",
      });
    }
  };

  const handleUpdateEducation = (id: string, field: string, value: string) => {
    updateEducation(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Education Items */}
      {state.resumeData.education.map((edu) => (
        <div
          key={edu.id}
          className="p-4 glass-card rounded-lg border border-border"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold">Education Entry</h3>
            <Button
              onClick={() => removeEducation(edu.id)}
              size="icon"
              variant="destructive"
              className="ml-2"
              aria-label="Remove Education"
            >
              <Trash className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Institution
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={edu.institution}
                onChange={(e) =>
                  handleUpdateEducation(edu.id, "institution", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Degree</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={edu.degree}
                onChange={(e) =>
                  handleUpdateEducation(edu.id, "degree", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Graduation Year
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={edu.year}
                onChange={(e) =>
                  handleUpdateEducation(edu.id, "year", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={edu.location}
                onChange={(e) =>
                  handleUpdateEducation(edu.id, "location", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                GPA (optional)
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
                value={edu.gpa}
                onChange={(e) =>
                  handleUpdateEducation(edu.id, "gpa", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}
      {/* Add New Education */}
      <div className="p-4 glass-card rounded-lg border border-border">
        <h3 className="font-semibold mb-4">Add Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Institution
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newEducation.institution}
              onChange={(e) =>
                setNewEducation({
                  ...newEducation,
                  institution: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Degree</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newEducation.degree}
              onChange={(e) =>
                setNewEducation({ ...newEducation, degree: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Graduation Year
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newEducation.year}
              onChange={(e) =>
                setNewEducation({ ...newEducation, year: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newEducation.location}
              onChange={(e) =>
                setNewEducation({ ...newEducation, location: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              GPA (optional)
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              value={newEducation.gpa}
              onChange={(e) =>
                setNewEducation({ ...newEducation, gpa: e.target.value })
              }
            />
          </div>
        </div>
        <Button
          onClick={handleAddEducation}
          disabled={
            !(
              newEducation.institution &&
              newEducation.degree &&
              newEducation.year
            )
          }
          className="mt-4 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Add Education
        </Button>
      </div>
    </div>
  );
};

export default EducationSection;
