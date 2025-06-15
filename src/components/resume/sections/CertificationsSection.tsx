import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Paper, Typography } from '@mui/material';
import { Add, Delete, Verified } from '@mui/icons-material';
import { useResume } from '@/contexts/ResumeContext';

const CertificationsSection: React.FC = () => {
  const { state, addCertification, updateCertification, removeCertification } = useResume();
  const [newCertification, setNewCertification] = useState({
    name: '',
    issuer: '',
    date: '',
    expiryDate: '',
    credentialId: ''
  });

  const handleAddCertification = () => {
    if (newCertification.name && newCertification.issuer && newCertification.date) {
      addCertification(newCertification);
      setNewCertification({
        name: '',
        issuer: '',
        date: '',
        expiryDate: '',
        credentialId: ''
      });
    }
  };

  const handleUpdateCertification = (id: string, field: string, value: string) => {
    updateCertification(id, { [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Existing Certifications */}
      {state.resumeData.certifications.map((cert) => (
        <Paper key={cert.id} className="p-4 glass-card">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Verified sx={{ color: 'hsl(var(--primary))' }} />
              <Typography variant="h6" className="font-semibold">
                Certification Entry
              </Typography>
            </div>
            <IconButton
              onClick={() => removeCertification(cert.id)}
              size="small"
              sx={{ color: 'hsl(var(--destructive))' }}
            >
              <Delete />
            </IconButton>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Certification Name"
              value={cert.name}
              onChange={(e) => handleUpdateCertification(cert.id, 'name', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Issuing Organization"
              value={cert.issuer}
              onChange={(e) => handleUpdateCertification(cert.id, 'issuer', e.target.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Issue Date"
              value={cert.date}
              onChange={(e) => handleUpdateCertification(cert.id, 'date', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="e.g., March 2024"
            />
            <TextField
              fullWidth
              label="Expiry Date (Optional)"
              value={cert.expiryDate || ''}
              onChange={(e) => handleUpdateCertification(cert.id, 'expiryDate', e.target.value)}
              variant="outlined"
              size="small"
              placeholder="e.g., March 2027"
            />
            <div className="sm:col-span-2">
              <TextField
                fullWidth
                label="Credential ID (Optional)"
                value={cert.credentialId || ''}
                onChange={(e) => handleUpdateCertification(cert.id, 'credentialId', e.target.value)}
                variant="outlined"
                size="small"
                placeholder="e.g., ABC123456789"
              />
            </div>
          </div>
        </Paper>
      ))}

      {/* Add New Certification Form */}
      <Paper className="p-4 glass-card border-dashed border-2 border-muted">
        <Typography variant="h6" className="mb-4 font-semibold">
          Add New Certification
        </Typography>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <TextField
            fullWidth
            label="Certification Name"
            value={newCertification.name}
            onChange={(e) => setNewCertification({ ...newCertification, name: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., AWS Certified Solutions Architect"
          />
          <TextField
            fullWidth
            label="Issuing Organization"
            value={newCertification.issuer}
            onChange={(e) => setNewCertification({ ...newCertification, issuer: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., Amazon Web Services"
          />
          <TextField
            fullWidth
            label="Issue Date"
            value={newCertification.date}
            onChange={(e) => setNewCertification({ ...newCertification, date: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., March 2024"
          />
          <TextField
            fullWidth
            label="Expiry Date (Optional)"
            value={newCertification.expiryDate}
            onChange={(e) => setNewCertification({ ...newCertification, expiryDate: e.target.value })}
            variant="outlined"
            size="small"
            placeholder="e.g., March 2027"
          />
          <div className="sm:col-span-2">
            <TextField
              fullWidth
              label="Credential ID (Optional)"
              value={newCertification.credentialId}
              onChange={(e) => setNewCertification({ ...newCertification, credentialId: e.target.value })}
              variant="outlined"
              size="small"
              placeholder="e.g., ABC123456789"
            />
          </div>
        </div>

        <Button
          onClick={handleAddCertification}
          disabled={!newCertification.name || !newCertification.issuer || !newCertification.date}
          startIcon={<Add />}
          variant="contained"
          sx={{
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            '&:hover': {
              backgroundColor: 'hsl(var(--primary))',
              filter: 'brightness(0.9)',
            },
          }}
        >
          Add Certification
        </Button>
      </Paper>
    </div>
  );
};

export default CertificationsSection;