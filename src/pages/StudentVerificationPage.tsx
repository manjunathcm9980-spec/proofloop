import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  getVerificationByStudentId, 
  submitVerificationRequest, 
  subscribeVerificationStore 
} from '../services/verificationStore';
import { CollegeVerificationRequest } from '../types';
import { 
  GraduationCap, 
  Upload, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  FileText, 
  ShieldCheck, 
  RefreshCw, 
  ArrowRight,
  FileCheck,
  Trash2,
  Lock
} from 'lucide-react';

export const StudentVerificationPage: React.FC = () => {
  const { user, updateUserVerification } = useAuth();
  const navigate = useNavigate();

  // Form State
  const [fullName, setFullName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [collegeName, setCollegeName] = useState(user?.collegeName || '');
  const [courseBranch, setCourseBranch] = useState(user?.courseBranch || '');
  const [yearSemester, setYearSemester] = useState(user?.yearSemester || '');

  // File Upload State
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);
  const [idCardFileName, setIdCardFileName] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [resubmitting, setResubmitting] = useState(false);

  // Active Verification Request in Store
  const [verificationReq, setVerificationReq] = useState<CollegeVerificationRequest | undefined>(() => {
    if (!user) return undefined;
    return getVerificationByStudentId(user.id) || getVerificationByStudentId(user.email);
  });

  // Subscribe to live cross-tab & local updates
  useEffect(() => {
    const sync = () => {
      if (!user) return;
      const v = getVerificationByStudentId(user.id) || getVerificationByStudentId(user.email);
      setVerificationReq(v);
      if (v) {
        updateUserVerification(v.status);
      }
    };
    sync();
    const unsubscribe = subscribeVerificationStore(sync);
    return () => unsubscribe();
  }, [user?.id, user?.email]);

  const handleFileSelect = (file: File) => {
    setIdCardFile(file);
    setIdCardFileName(file.name);
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setIdCardPreview(url);
    } else {
      setIdCardPreview(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !collegeName || !courseBranch || !yearSemester) {
      alert('Please fill out all required fields.');
      return;
    }

    if (!idCardFile && !idCardPreview && !verificationReq?.idCardUrl) {
      alert('Please upload your College ID card.');
      return;
    }

    setSubmitting(true);

    const finalUrl = idCardPreview || verificationReq?.idCardUrl || 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80';
    const finalFileName = idCardFileName || verificationReq?.idFileName || 'College_ID_Card.jpg';

    const req = submitVerificationRequest({
      studentId: user?.id || `usr_${Date.now()}`,
      studentName: fullName,
      studentEmail: email,
      collegeName,
      courseBranch,
      yearSemester,
      idCardUrl: finalUrl,
      idFileName: finalFileName,
    });

    setVerificationReq(req);
    updateUserVerification('pending');
    setSubmitting(false);
    setResubmitting(false);
  };

  const currentStatus = verificationReq?.status || user?.verificationStatus;

  // View Mode 1: APPROVED STATUS
  if (currentStatus === 'approved' && !resubmitting) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 bg-[#12151C] border border-emerald-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <CheckCircle2 className="w-48 h-48 text-emerald-400" />
          </div>

          <div className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> Verified Student
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F2F0EB]">
              Identity Verified
            </h1>
            <p className="text-sm text-[#A8A5A0] max-w-lg mx-auto">
              Your student identity has been verified. You have full access to ProofLoop student builder & poster features.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0E14] border border-[#242834] max-w-md mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">Student Name:</span>
              <span className="font-bold text-[#F2F0EB]">{verificationReq?.studentName || fullName}</span>
            </div>
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">College:</span>
              <span className="font-bold text-[#FFB020]">{verificationReq?.collegeName || collegeName}</span>
            </div>
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">Course:</span>
              <span className="font-bold text-[#F2F0EB]">{verificationReq?.courseBranch || courseBranch}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A8A5A0]">Year / Semester:</span>
              <span className="font-bold text-[#F2F0EB]">{verificationReq?.yearSemester || yearSemester}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/dashboard"
              className="px-6 py-3.5 rounded-2xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20"
            >
              Go to Dashboard <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/problems"
              className="px-6 py-3.5 rounded-2xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834]"
            >
              Browse Open Problems
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // View Mode 2: PENDING STATUS
  if (currentStatus === 'pending' && !resubmitting) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 bg-[#12151C] border border-[#FFB020]/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-[#FFB020]/15 border border-[#FFB020]/30 flex items-center justify-center mx-auto shadow-lg shadow-[#FFB020]/20 animate-pulse">
            <Clock className="w-10 h-10 text-[#FFB020]" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 shadow-sm">
              <Clock className="w-4 h-4" /> Verification Pending
            </span>
            <h1 className="font-display text-3xl font-extrabold text-[#F2F0EB]">
              Verification Under Review
            </h1>
            <p className="text-sm text-[#A8A5A0] max-w-lg mx-auto">
              Your college ID has been submitted and is waiting for admin approval.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0E14] border border-[#242834] max-w-md mx-auto text-left text-xs space-y-2">
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">Student Name:</span>
              <span className="font-bold text-[#F2F0EB]">{verificationReq?.studentName || fullName}</span>
            </div>
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">College:</span>
              <span className="font-bold text-[#FFB020]">{verificationReq?.collegeName || collegeName}</span>
            </div>
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">Course:</span>
              <span className="font-bold text-[#F2F0EB]">{verificationReq?.courseBranch || courseBranch}</span>
            </div>
            <div className="flex justify-between border-b border-[#242834] pb-2">
              <span className="text-[#A8A5A0]">ID File:</span>
              <span className="font-semibold text-emerald-400">{verificationReq?.idFileName || 'Uploaded_ID.jpg'}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#A8A5A0]">Submitted:</span>
              <span className="text-[#6E6B65]">
                {verificationReq ? new Date(verificationReq.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Just now'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1A1E28] border border-[#242834] max-w-md mx-auto text-xs text-[#A8A5A0] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FFB020] shrink-0" />
            <span>Open the <strong>Admin Dashboard</strong> in Tab 2 to approve this request live!</span>
          </div>
        </div>
      </div>
    );
  }

  // View Mode 3: REJECTED STATUS
  if (currentStatus === 'rejected' && !resubmitting) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 bg-[#12151C] border border-rose-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/20">
            <XCircle className="w-10 h-10 text-rose-400" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 shadow-sm">
              <XCircle className="w-4 h-4" /> Verification Rejected
            </span>
            <h1 className="font-display text-3xl font-extrabold text-[#F2F0EB]">
              Verification Request Declined
            </h1>
            <p className="text-sm text-[#A8A5A0] max-w-lg mx-auto">
              Please review the admin feedback and resubmit your college ID.
            </p>
          </div>

          {verificationReq?.rejectionReason && (
            <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 max-w-md mx-auto text-left text-xs text-rose-300 space-y-1">
              <span className="font-bold text-rose-400 block uppercase tracking-wider text-[10px]">
                Admin Feedback / Rejection Reason:
              </span>
              <p className="italic">"{verificationReq.rejectionReason}"</p>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => setResubmitting(true)}
              className="px-8 py-4 rounded-2xl text-xs font-extrabold btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[#FFB020]/20 mx-auto"
            >
              <RefreshCw className="w-4 h-4" /> Resubmit ID for Review
            </button>
          </div>
        </div>
      </div>
    );
  }

  // View Mode 4: REGISTRATION & ID UPLOAD FORM (Initial or Resubmit)
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 rounded-2xl bg-gradient-amber p-0.5 mx-auto shadow-lg shadow-[#FFB020]/20 flex items-center justify-center">
          <div className="w-full h-full bg-[#0B0E14] rounded-[14px] flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-[#FFB020]" />
          </div>
        </div>
        <h1 className="font-display text-3xl font-extrabold text-[#F2F0EB]">
          Student Verification & Registration
        </h1>
        <p className="text-xs text-[#A8A5A0] max-w-md mx-auto">
          Complete your student details and upload your official college ID card to unlock student builder features.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-8 bg-[#12151C] border border-[#242834] space-y-6 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Full Name *</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Manjunath"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Student Email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@university.edu"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          {/* College Name */}
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">College / University Name *</label>
            <input
              type="text"
              required
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="e.g. Yenepoya University"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          {/* Course / Branch & Year / Semester Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Course / Branch *</label>
              <input
                type="text"
                required
                value={courseBranch}
                onChange={(e) => setCourseBranch(e.target.value)}
                placeholder="e.g. B.Tech AI/ML"
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Year / Semester *</label>
              <input
                type="text"
                required
                value={yearSemester}
                onChange={(e) => setYearSemester(e.target.value)}
                placeholder="e.g. 2nd Year / Sem 4"
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
              />
            </div>
          </div>

          {/* Upload College ID Card Area */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold text-[#F2F0EB]">Upload College ID Card *</label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all bg-[#0B0E14] relative ${
                isDragOver ? 'border-[#FFB020] bg-[#FFB020]/5' : 'border-[#242834] hover:border-[#FFB020]/50'
              }`}
            >
              {idCardPreview ? (
                <div className="space-y-3">
                  <div className="relative max-w-xs mx-auto rounded-xl overflow-hidden border border-[#242834] shadow-md">
                    <img src={idCardPreview} alt="ID Preview" className="w-full h-40 object-cover" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-[#F2F0EB]">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span className="truncate max-w-xs">{idCardFileName || 'ID_Card_Image.jpg'}</span>
                    <button
                      type="button"
                      onClick={() => { setIdCardFile(null); setIdCardPreview(null); setIdCardFileName(''); }}
                      className="p-1 text-rose-400 hover:text-rose-300 ml-2"
                      title="Remove image"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : idCardFileName ? (
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1E28] border border-[#242834] flex items-center justify-center mx-auto">
                    <FileText className="w-6 h-6 text-[#FFB020]" />
                  </div>
                  <p className="text-xs font-bold text-[#F2F0EB]">{idCardFileName}</p>
                  <button
                    type="button"
                    onClick={() => { setIdCardFile(null); setIdCardFileName(''); }}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    Replace / Remove File
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer block space-y-2">
                  <Upload className="w-8 h-8 text-[#FFB020] mx-auto" />
                  <p className="text-xs font-bold text-[#F2F0EB]">Click to upload or drag & drop College ID</p>
                  <p className="text-[10px] text-[#6E6B65]">Supports JPG, PNG, WEBP or PDF up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) handleFileSelect(e.target.files[0]);
                    }}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Privacy Disclaimer */}
          <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#242834] flex items-center gap-2.5 text-xs text-[#A8A5A0]">
            <Lock className="w-4 h-4 text-[#FFB020] shrink-0" />
            <span>Your college ID is used only to verify your student identity and is never published publicly.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-2xl text-xs font-extrabold btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[#FFB020]/20"
          >
            {submitting ? 'Submitting Request...' : 'Submit for Verification'}
          </button>
        </form>
      </div>
    </div>
  );
};
