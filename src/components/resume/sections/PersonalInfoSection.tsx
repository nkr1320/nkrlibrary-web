import React from "react";
import { useResume } from "@/contexts/ResumeContext";

const PersonalInfoSection: React.FC = () => {
  const { state, updatePersonalInfo } = useResume();
  const { personalInfo } = state.resumeData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo({ email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
          value={personalInfo.address}
          onChange={(e) => updatePersonalInfo({ address: e.target.value })}
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium mb-1">Professional Summary</label>
        <textarea
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
          rows={4}
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
