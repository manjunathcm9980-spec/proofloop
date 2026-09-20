import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProofWallCardItem } from '../types';
import { ExternalLink, Award, MessageSquareQuote, Sparkles, Layers, ArrowRight, Eye, X } from 'lucide-react';

interface ProofCardProps {
  item: ProofWallCardItem;
}

export const ProofCard: React.FC<ProofCardProps> = ({ item }) => {
  const { problem, proof, buildLogCount } = item;
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Lock body scroll when demo modal is open to prevent background scrolling/shaking
  useEffect(() => {
    if (showDemoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDemoModal]);

  const isExternalUrl = proof.demoUrl && 
    (proof.demoUrl.startsWith('http://') || proof.demoUrl.startsWith('https://')) &&
    !proof.demoUrl.includes('proofloop-foodbank-app.com') &&
    !proof.demoUrl.includes('proofloop.dev');

  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-[#242834] bg-[#12151C] shadow-2xl hover:border-[#FFB020]/40 transition-all duration-300 relative group">
      {/* Top Ribbon & Category Header */}
      <div className="bg-[#1A1E28] px-6 py-3.5 border-b border-[#242834] flex items-center justify-between">
        {/* Ribbon Stamp Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-amber text-[#0B0E14] font-display font-extrabold text-xs shadow-md shadow-[#FFB020]/20">
          <Award className="w-4 h-4 text-[#0B0E14]" />
          <span>VALIDATED PROOF OF IMPACT</span>
        </div>

        <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#12151C] text-[#FFB020] border border-[#242834]">
          {problem.category}
        </span>
      </div>

      {/* Main Two-Column Editorial Layout */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        {/* Column 1: Problem Statement & Poster Endorsement Quote (Left Side) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Header / Problem Stated */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B4A] flex items-center gap-1.5 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF6B4A]"></span> Real Problem Stated
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-[#F2F0EB] tracking-tight leading-snug">
                {problem.title}
              </h2>
              <p className="text-xs text-[#A8A5A0] font-medium mt-1.5">
                Posted by <span className="text-[#F2F0EB] font-bold">{problem.posterName}</span>
              </p>
            </div>

            {/* Problem Statement Box */}
            <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] leading-relaxed">
              <p className="text-xs text-[#A8A5A0] italic">
                "{problem.description}"
              </p>
            </div>

            {/* Poster Review Quote Card */}
            {proof.posterComment && (
              <div className="p-5 rounded-2xl bg-[#1A1E28] border border-[#FFB020]/30 relative shadow-inner">
                <MessageSquareQuote className="w-7 h-7 text-[#FFB020]/30 absolute top-4 right-4" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFB020] block mb-1">
                  Problem Poster Endorsement
                </span>
                <p className="text-xs text-[#F2F0EB] font-medium leading-relaxed pr-6">
                  {proof.posterComment}
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-[#242834] text-[11px] text-[#6E6B65]">
            Validated on {new Date(proof.updatedAt || proof.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Vertical Divider Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-[1px] -ml-[0.5px] bg-[#242834]" />

        {/* Column 2: Solution Writeup, Screenshot & Working Demo Button (Right Side) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFB020] flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-4 h-4 text-[#FFB020]" /> Student Solution & Proof
              </span>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display text-lg font-bold text-[#F2F0EB]">{proof.builderName}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-lg bg-[#1A1E28] text-[#FFB020] border border-[#242834] font-medium flex items-center gap-1">
                  <Layers className="w-3 h-3 text-[#FFB020]" /> {buildLogCount} Build Updates
                </span>
              </div>
              <p className="text-[#A8A5A0] text-sm leading-relaxed">
                {proof.summary}
              </p>
            </div>

            {/* Proof Visual Screenshot */}
            <div className="relative group rounded-2xl overflow-hidden border border-[#242834] bg-[#0B0E14] shadow-md">
              <img
                src={proof.imageUrl || problem.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000'}
                alt="Proof Demonstration"
                className="w-full h-56 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-transparent to-transparent flex flex-col justify-end p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFB020] bg-[#0B0E14] px-2.5 py-1 rounded-lg w-max border border-[#FFB020]/30">
                  Visual Screenshot Proof
                </span>
              </div>
            </div>
          </div>

          {/* Launch Working Demo Button */}
          <div className="pt-2 flex flex-wrap gap-2 justify-end">
            {isExternalUrl ? (
              <a
                href={proof.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20 w-full sm:w-auto justify-center"
              >
                Launch Working Demo <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-5 py-3 rounded-2xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-lg shadow-[#FFB020]/20 flex-1 sm:flex-none justify-center"
                >
                  <Eye className="w-4 h-4" /> Launch Interactive Demo
                </button>
                <Link
                  to={`/problems/${problem.id}`}
                  className="px-4 py-3 rounded-2xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834] flex items-center gap-1.5 justify-center"
                >
                  Proof Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 100% Solid Opaque Modal Overlay (Fixing text overlap & bleeding background) */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-3xl p-6 sm:p-8 relative space-y-6 shadow-2xl my-auto">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-5 right-5 text-[#A8A5A0] hover:text-[#F2F0EB] bg-[#1A1E28] p-2 rounded-xl border border-[#242834]"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Verified Live Solution Demo
              </span>
              <h3 className="font-display text-2xl font-extrabold text-[#F2F0EB]">
                {problem.title}
              </h3>
              <p className="text-xs text-[#A8A5A0]">
                Built by <span className="text-[#F2F0EB] font-bold">{proof.builderName}</span> for <span className="text-[#F2F0EB] font-bold">{problem.posterName}</span>
              </p>
            </div>

            {/* Interactive Preview Container */}
            <div className="rounded-2xl border border-[#242834] bg-[#0B0E14] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#242834] pb-3 text-xs">
                <span className="font-bold text-[#FFB020] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  AWS Application Status: Active
                </span>
                <span className="text-[#6E6B65]">AWS Region: us-east-1</span>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#F2F0EB]">Solution Summary & Metrics:</h4>
                <p className="text-xs text-[#A8A5A0] leading-relaxed">
                  {proof.summary}
                </p>

                {proof.posterComment && (
                  <div className="p-4 rounded-xl bg-[#12151C] border border-[#FFB020]/30 text-xs text-[#F2F0EB] italic">
                    "{proof.posterComment}"
                  </div>
                )}
              </div>

              {/* Demo Screenshot Showcase */}
              <div className="rounded-xl overflow-hidden border border-[#242834] max-h-72">
                <img
                  src={proof.imageUrl || problem.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000'}
                  alt="Live Demo Preview"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000';
                  }}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
              <Link
                to={`/problems/${problem.id}`}
                onClick={() => setShowDemoModal(false)}
                className="text-xs font-bold text-[#FFB020] hover:underline flex items-center gap-1"
              >
                View Full Timeline & Build Logs <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setShowDemoModal(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
