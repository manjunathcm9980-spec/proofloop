import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createProblem } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { ProblemCategory, ProblemUrgency } from '../types';
import { ImageUploadModal } from '../components/ImageUploadModal';
import { PlusCircle, Upload, Sparkles, ArrowLeft } from 'lucide-react';

const CATEGORIES: ProblemCategory[] = [
  'Community',
  'Small Business',
  'Non-Profit',
  'Education',
  'Developer Tools',
  'Other',
];

const URGENCIES: ProblemUrgency[] = ['Low', 'Medium', 'High', 'Critical'];

export const CreateProblemPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<ProblemCategory>('Community');
  const [urgency, setUrgency] = useState<ProblemUrgency>('Medium');
  const [whoAffected, setWhoAffected] = useState('');
  const [skillsInput, setSkillsInput] = useState('React, Node.js, Database');
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in as a Problem Poster.');
      return;
    }

    try {
      setSubmitting(true);
      const skillsNeeded = skillsInput
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const newProblem = await createProblem({
        title,
        description,
        category,
        urgency,
        whoAffected,
        skillsNeeded,
        posterId: user.id,
        posterName: `${user.name} (${user.bio ? user.bio.split('.')[0] : 'Problem Poster'})`,
        imageUrl,
      });

      navigate(`/problems/${newProblem.id}`);
    } catch (err: any) {
      alert(err.message || 'Failed to submit problem');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <Link to="/problems" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8A5A0] hover:text-[#F2F0EB]">
        <ArrowLeft className="w-4 h-4" /> Back to Problems
      </Link>

      <div className="glass-card rounded-3xl p-8 space-y-6 border border-[#242834]">
        <div>
          <span className="text-xs uppercase font-bold text-[#FFB020] tracking-wider flex items-center gap-1.5 mb-1">
            <Sparkles className="w-4 h-4" /> Problem Poster Submission
          </span>
          <h1 className="font-display text-3xl font-extrabold text-[#F2F0EB]">Post a Real Problem</h1>
          <p className="text-[#A8A5A0] text-xs mt-1">
            Share a concrete problem faced by your organization or business. Student builders will browse and claim it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Problem Title *</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Food Bank Perishable Inventory & Expiry Dashboard"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none transition-colors"
            />
          </div>

          {/* Category & Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProblemCategory)}
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] focus:border-[#FFB020] outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Urgency Level *</label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as ProblemUrgency)}
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] focus:border-[#FFB020] outline-none"
              >
                {URGENCIES.map((urg) => (
                  <option key={urg} value={urg}>
                    {urg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Who Affected */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Who does this affect? *</label>
            <input
              type="text"
              required
              value={whoAffected}
              onChange={(e) => setWhoAffected(e.target.value)}
              placeholder="e.g. 350+ weekly food bank recipients and 12 local grocery donors"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"
            />
          </div>

          {/* Skills Needed */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Recommended Skills (Comma separated)</label>
            <input
              type="text"
              value={skillsInput}
              onChange={(e) => setSkillsInput(e.target.value)}
              placeholder="React, TypeScript, Database, Twilio API"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Detailed Description *</label>
            <textarea
              rows={5}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the current manual pain point, how it impacts operations, and what a successful solution would look like..."
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-4 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"
            />
          </div>

          {/* Image Attachment (S3) */}
          <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#F2F0EB]">Optional Attachment Image:</span>
              <button
                type="button"
                onClick={() => setShowUploadModal(true)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1A1E28] hover:bg-[#242834] text-[#FFB020] border border-[#242834] flex items-center gap-1"
              >
                <Upload className="w-3.5 h-3.5" /> {imageUrl ? 'Change Image' : 'Upload Image (S3)'}
              </button>
            </div>
            {imageUrl && (
              <div className="rounded-xl overflow-hidden border border-[#242834] max-h-48">
                <img src={imageUrl} alt="Uploaded attachment" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Submit Action */}
          <div className="flex justify-end pt-4 border-t border-[#242834]">
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3.5 rounded-2xl text-sm font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20"
            >
              <PlusCircle className="w-4 h-4" />
              {submitting ? 'Publishing Problem...' : 'Submit Problem for Builders'}
            </button>
          </div>
        </form>
      </div>

      {showUploadModal && (
        <ImageUploadModal
          title="Upload Problem Image / Photo"
          onImageUploaded={(url) => setImageUrl(url)}
          onClose={() => setShowUploadModal(false)}
        />
      )}
    </div>
  );
};
