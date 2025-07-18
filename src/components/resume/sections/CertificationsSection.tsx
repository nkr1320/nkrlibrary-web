import React, { useState } from "react";
import { Plus, Trash, BadgeCheck } from "lucide-react";
import { useResume } from "@/contexts/ResumeContext";

const CertificationsSection: React.FC = () => {
  const { state, addCertification, updateCertification, removeCertification } =
    useResume();
  const [newCertification, setNewCertification] = useState({
    name: "",
    issuer: "",
    date: "",
    expiryDate: "",
    credentialId: "",
  });

  const handleAddCertification = () => {
    if (
      newCertification.name &&
      newCertification.issuer &&
      newCertification.date
    ) {
      addCertification(newCertification);
      setNewCertification({
        name: "",
        issuer: "",
        date: "",
        expiryDate: "",
        credentialId: "",
      });
    }
  };

  const handleUpdateCertification = (
    id: string,
    field: string,
    value: string,
  ) => {
    updateCertification(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Certifications */}
      {state.resumeData.certifications.map((cert) => (
        <div key={cert.id} className="p-4 glass-card">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <BadgeCheck sx={{ color: "hsl(var(--primary))" }} />
              <h6 className="font-semibold">Certification Entry</h6>
            </div>
            <button
              onClick={() => removeCertification(cert.id)}
              size="small"
              sx={{ color: "hsl(var(--destructive))" }}
            >
              <Trash />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              fullWidth
              label="Certification Name"
              value={cert.name}
              onChange={(e) =>
                handleUpdateCertification(cert.id, "name", e.target.value)
              }
              variant="outlined"
              size="small"
            />
            <input
              fullWidth
              label="Issuing Organization"
              value={cert.issuer}
              onChange={(e) =>
                handleUpdateCertification(cert.id, "issuer", e.target.value)
              }
              variant="outlined"
              size="small"
            />
            <input
              fullWidth
              label="Issue Date"
              value={cert.date}
              onChange={(e) =>
                handleUpdateCertification(cert.id, "date", e.target.value)
              }
              variant="outlined"
              size="small"
              placeholder="e.g., March 2024"
            />
            <input
              fullWidth
              label="Expiry Date (Optional)"
              value={cert.expiryDate || ""}
              onChange={(e) =>
                handleUpdateCertification(cert.id, "expiryDate", e.target.value)
              }
              variant="outlined"
              size="small"
              placeholder="e.g., March 2027"
            />
            <div className="sm:col-span-2">
              <input
                fullWidth
                label="Credential ID (Optional)"
                value={cert.credentialId || ""}
                onChange={(e) =>
                  handleUpdateCertification(
                    cert.id,
                    "credentialId",
                    e.target.value,
                  )
                }
                variant="outlined"
                size="small"
                placeholder="e.g., ABC123456789"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Add New Certification Form */}
      <div className="p-4 glass-card border-dashed border-2 border-muted">
        <h6 className="mb-4 font-semibold">Add New Certification</h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            fullWidth
            label="Certification Name"
            value={newCertification.name}
            onChange={(e) =>
              setNewCertification({ ...newCertification, name: e.target.value })
            }
            variant="outlined"
            size="small"
            placeholder="e.g., AWS Certified Solutions Architect"
          />
          <input
            fullWidth
            label="Issuing Organization"
            value={newCertification.issuer}
            onChange={(e) =>
              setNewCertification({
                ...newCertification,
                issuer: e.target.value,
              })
            }
            variant="outlined"
            size="small"
            placeholder="e.g., Amazon Web Services"
          />
          <input
            fullWidth
            label="Issue Date"
            value={newCertification.date}
            onChange={(e) =>
              setNewCertification({ ...newCertification, date: e.target.value })
            }
            variant="outlined"
            size="small"
            placeholder="e.g., March 2024"
          />
          <input
            fullWidth
            label="Expiry Date (Optional)"
            value={newCertification.expiryDate}
            onChange={(e) =>
              setNewCertification({
                ...newCertification,
                expiryDate: e.target.value,
              })
            }
            variant="outlined"
            size="small"
            placeholder="e.g., March 2027"
          />
          <div className="sm:col-span-2">
            <input
              fullWidth
              label="Credential ID (Optional)"
              value={newCertification.credentialId}
              onChange={(e) =>
                setNewCertification({
                  ...newCertification,
                  credentialId: e.target.value,
                })
              }
              variant="outlined"
              size="small"
              placeholder="e.g., ABC123456789"
            />
          </div>
        </div>

        <button
          onClick={handleAddCertification}
          disabled={
            !newCertification.name ||
            !newCertification.issuer ||
            !newCertification.date
          }
          variant="contained"
          sx={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
            "&:hover": {
              backgroundColor: "hsl(var(--primary))",
              filter: "brightness(0.9)",
            },
          }}
        >
          <Plus className="mr-2" />
          Add Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationsSection;
