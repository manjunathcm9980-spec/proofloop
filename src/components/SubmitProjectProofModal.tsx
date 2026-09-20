import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, Github, Globe, Video, Code2 } from 'lucide-react';
import { ProjectProofSubmission } from '../types';
import { submitProjectProof } from '../services/projectProofStore';
import { useAuth } from '../context/AuthContext';

export interface SubmitProjectProofModalProps {
  isOpen?: boolean;
  existingProof?: Partial<ProjectProofSubmission>;
  initialData?: Partial<ProjectProofSubmission>;
  onSubmit?: (data: {
    projectName: string;
    problemBeingSolved: string;
    description: string;
    githubUrl?: string;
    liveUrl?: string;
    demoVideoUrl?: string;
    techStack: string[];
    screenshotUrl: string;
    additionalProof?: string;
  }) => void;
  onClose: () => void;
}

const DEFAULT_TECH_STACK = [
  'React',
  'Node.js',
  'Express',
  'TypeScript',
  'JavaScript',
  'AWS Lambda',
  'DynamoDB',
  'S3',
  'Python',
  'PostgreSQL',
  'TailwindCSS',
  'Twilio'
];

export const SubmitProjectProofModal: React.FC<SubmitProjectProofModalProps> = ({
  isOpen = true,
  existingProof,
  initialData,
  onSubmit,
  onClose,
}) => {
  const { user } = useAuth();
  const proofData = existingProof || initialData;

  const [projectName, setProjectName] = useState(proofData?.projectName || '');
  const [problemBeingSolved, setProblemBeingSolved] = useState(proofData?.problemBeingSolved || proofData?.problemTitle || '');
  const [description, setDescription] = useState(proofData?.description || '');
  const [githubUrl, setGithubUrl] = useState(proofData?.githubUrl || '');
  const [liveUrl, setLiveUrl] = useState(proofData?.liveUrl || proofData?.liveDemoUrl || '');
  const [demoVideoUrl, setDemoVideoUrl] = useState(proofData?.demoVideoUrl || '');
  const [selectedTechStack, setSelectedTechStack] = useState<string[]>(proofData?.techStack || ['React', 'TypeScript', 'Node.js', 'AWS Lambda']);
  const [screenshotUrl, setScreenshotUrl] = useState(proofData?.screenshotUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80');
  const [additionalProof, setAdditionalProof] = useState(proofData?.additionalProof || '');
  const [customTechInput, setCustomTechInput] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (proofData) {
      setProjectName(proofData.projectName || '');
      setProblemBeingSolved(proofData.problemBeingSolved || proofData.problemTitle || '');
      setDescription(proofData.description || '');
      setGithubUrl(proofData.githubUrl || '');
      setLiveUrl(proofData.liveUrl || proofData.liveDemoUrl || '');
      setDemoVideoUrl(proofData.demoVideoUrl || '');
      setSelectedTechStack(proofData.techStack || ['React', 'TypeScript', 'Node.js']);
      setScreenshotUrl(proofData.screenshotUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000');
      setAdditionalProof(proofData.additionalProof || '');
    }
  }, [proofData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleTech = (tech: string) => {
    if (selectedTechStack.includes(tech)) {
      setSelectedTechStack(selectedTechStack.filter(t => t !== tech));
    } else {
      setSelectedTechStack([...selectedTechStack, tech]);
    }
  };

  const addCustomTech = () => {
    const trimmed = customTechInput.trim();
    if (trimmed && !selectedTechStack.includes(trimmed)) {
      setSelectedTechStack([...selectedTechStack, trimmed]);
      setCustomTechInput('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim() || !problemBeingSolved.trim() || !description.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    if (selectedTechStack.length === 0) {
      alert('Please select at least one technology for your Tech Stack.');
      return;
    }

    setSubmitting(true);

    const payload = {
      studentId: user?.id || 'usr_student_manjunath',
      studentName: user?.name || 'Manjunath',
      studentEmail: user?.email || 'manjunath@yenepoya.edu.in',
      collegeName: user?.collegeName || 'Yenepoya University',
      projectName: projectName.trim(),
      problemBeingSolved: problemBeingSolved.trim(),
      problemTitle: problemBeingSolved.trim(),
      description: description.trim(),
      githubUrl: githubUrl.trim() || undefined,
      liveUrl: liveUrl.trim() || undefined,
      liveDemoUrl: liveUrl.trim() || undefined,
      demoVideoUrl: demoVideoUrl.trim() || undefined,
      techStack: selectedTechStack,
      screenshotUrl: screenshotUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000',
      additionalProof: additionalProof.trim() || undefined,
    };

    if (onSubmit) {
      onSubmit(payload);
    } else {
      submitProjectProof(payload);
    }

    setTimeout(() => {
      setSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-[#0B0E14]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-2xl p-6 sm:p-8 relative space-y-6 shadow-2xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#A8A5A0] hover:text-[#F2F0EB] bg-[#1A1E28] p-2 rounded-xl border border-[#242834] transition-colors"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
            <Sparkles className="w-3.5 h-3.5" /> Proof Score Verification Engine
          </div>
          <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB]">
            {proofData ? 'Update & Resubmit Project Proof' : 'Submit Project Proof'}
          </h2>
          <p className="text-xs text-[#A8A5A0]">
            Provide public URLs and project details to maximize your 0-100 Proof Score.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-xs">
          {/* Project Name & Problem */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#F2F0EB] mb-1">
                Project Name <span className="text-[#FFB020]">*</span>
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g. Food Pantry Expiration Dashboard"
                required
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2.5 text-[#F2F0EB] outline-none focus:border-[#FFB020] transition-colors"
              />
            </div>

            <div>
              <label className="block font-bold text-[#F2F0EB] mb-1">
                Problem Being Solved <span className="text-[#FFB020]">*</span>
              </label>
              <input
                type="text"
                value={problemBeingSolved}
                onChange={(e) => setProblemBeingSolved(e.target.value)}
                placeholder="e.g. Hope Valley Food Bank Expiration Tracker"
                required
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2.5 text-[#F2F0EB] outline-none focus:border-[#FFB020] transition-colors"
              />
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block font-bold text-[#F2F0EB] mb-1">
              Project Summary & Technical Implementation <span className="text-[#FFB020]">*</span>
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you built, architecture decisions, database structure, and how it addresses the problem..."
              required
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3.5 text-[#F2F0EB] outline-none focus:border-[#FFB020] transition-colors"
            />
          </div>

          {/* Links Section (+20, +20, +15 Points) */}
          <div className="space-y-3 p-4 rounded-2xl bg-[#0B0E14] border border-[#242834]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB020] block">
              Verification Proof Links (Boost Proof Score)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="font-semibold text-[#A8A5A0] flex items-center gap-1 mb-1">
                  <Github className="w-3.5 h-3.5 text-[#FFB020]" /> GitHub Repository (+20)
                </label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/..."
                  className="w-full bg-[#12151C] border border-[#242834] rounded-xl px-3 py-2 text-[#F2F0EB] outline-none focus:border-[#FFB020]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#A8A5A0] flex items-center gap-1 mb-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" /> Live Demo URL (+20)
                </label>
                <input
                  type="url"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-[#12151C] border border-[#242834] rounded-xl px-3 py-2 text-[#F2F0EB] outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="font-semibold text-[#A8A5A0] flex items-center gap-1 mb-1">
                  <Video className="w-3.5 h-3.5 text-purple-400" /> Demo Video URL (+15)
                </label>
                <input
                  type="url"
                  value={demoVideoUrl}
                  onChange={(e) => setDemoVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/..."
                  className="w-full bg-[#12151C] border border-[#242834] rounded-xl px-3 py-2 text-[#F2F0EB] outline-none focus:border-purple-400"
                />
              </div>
            </div>
          </div>

          {/* Tech Stack Multi-Select */}
          <div className="space-y-2">
            <label className="font-bold text-[#F2F0EB] flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#FFB020]" /> Select Tech Stack & Frameworks
            </label>
            <div className="flex flex-wrap gap-1.5">
              {DEFAULT_TECH_STACK.map((tech) => {
                const isSelected = selectedTechStack.includes(tech);
                return (
                  <button
                    key={tech}
                    type="button"
                    onClick={() => toggleTech(tech)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all text-[11px] ${
                      isSelected
                        ? 'bg-[#FFB020] text-[#0B0E14] shadow-md shadow-[#FFB020]/20'
                        : 'bg-[#0B0E14] text-[#A8A5A0] border border-[#242834] hover:border-[#FFB020]/40'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {tech}
                  </button>
                );
              })}
            </div>

            {/* Custom Tech Input */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={customTechInput}
                onChange={(e) => setCustomTechInput(e.target.value)}
                placeholder="Add other framework/tool..."
                className="bg-[#0B0E14] border border-[#242834] rounded-xl px-3 py-1.5 text-[#F2F0EB] outline-none focus:border-[#FFB020] w-52"
              />
              <button
                type="button"
                onClick={addCustomTech}
                className="px-3 py-1.5 rounded-xl font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834]"
              >
                Add
              </button>
            </div>
          </div>

          {/* Screenshot URL & Extra Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-[#F2F0EB] mb-1">
                Project Screenshot Image URL
              </label>
              <input
                type="url"
                value={screenshotUrl}
                onChange={(e) => setScreenshotUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2 text-[#F2F0EB] outline-none focus:border-[#FFB020]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#F2F0EB] mb-1">
                Additional Proof / Notes (Optional)
              </label>
              <input
                type="text"
                value={additionalProof}
                onChange={(e) => setAdditionalProof(e.target.value)}
                placeholder="e.g. AWS deployment details or active user count"
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2 text-[#F2F0EB] outline-none focus:border-[#FFB020]"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#242834]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {submitting ? 'Submitting...' : 'Submit Project Proof'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
