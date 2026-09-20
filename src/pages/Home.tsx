import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Problem, ProofWallCardItem } from '../types';
import { fetchProblems, fetchProofWall } from '../services/api';
import { ProblemCard } from '../components/ProblemCard';
import { ProofCard } from '../components/ProofCard';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  ArrowRight, 
  Award, 
  Zap,
  ArrowUpRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const { role, switchDemoRole } = useAuth();
  const [openProblems, setOpenProblems] = useState<Problem[]>([]);
  const [proofWallItems, setProofWallItems] = useState<ProofWallCardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [probs, wall] = await Promise.all([
          fetchProblems({ status: 'open' }),
          fetchProofWall(),
        ]);
        setOpenProblems(probs.slice(0, 3));
        setProofWallItems(wall.slice(0, 1));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-28 pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 lg:pt-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FFB020]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#FF6B4A]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* AWS Track Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFB020]/10 text-[#FFB020] border border-[#FFB020]/30 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>AWS Ship It Track Entry • Built with Serverless Architecture</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F2F0EB] max-w-5xl mx-auto leading-[1.03]">
            Real problems <span className="text-[#6E6B65] font-light">→</span> real projects <span className="text-[#6E6B65] font-light">→</span>{' '}
            <span className="text-gradient-amber">
              real proof.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-2xl text-[#A8A5A0] max-w-3xl mx-auto leading-relaxed font-normal">
            Connecting real-world organizations with genuine operational problems to student builders who deliver verified, working solutions.
          </p>

          {/* Action CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/problems"
              className="w-full sm:w-auto px-9 py-4 rounded-2xl text-sm font-extrabold btn-primary flex items-center justify-center gap-2 shadow-xl shadow-[#FFB020]/20"
            >
              Browse Open Problems <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/create-problem"
              onClick={() => switchDemoRole('poster')}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl text-sm font-bold bg-[#12151C] hover:bg-[#1A1E28] text-[#F2F0EB] border border-[#242834] flex items-center justify-center gap-2 transition-colors"
            >
              Post a Real Problem
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial 4-Step "How It Works" Section with Ghost Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB020] block mb-2">Workflow</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F2F0EB]">How ProofLoop Operates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Step 1 */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <span className="font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-[#FFB020]/20 transition-colors">
              01
            </span>
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFB020] block">Step 01</span>
              <h3 className="font-display text-lg font-bold text-[#F2F0EB]">Problem Poster</h3>
              <p className="text-xs text-[#A8A5A0] leading-relaxed">
                Local businesses & orgs submit real operational problems with urgency & affected specs.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <span className="font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-[#FF6B4A]/20 transition-colors">
              02
            </span>
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B4A] block">Step 02</span>
              <h3 className="font-display text-lg font-bold text-[#F2F0EB]">Student Claim</h3>
              <p className="text-xs text-[#A8A5A0] leading-relaxed">
                Builders filter open problems by skills needed and claim authentic projects to build.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <span className="font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-purple-500/20 transition-colors">
              03
            </span>
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block">Step 03</span>
              <h3 className="font-display text-lg font-bold text-[#F2F0EB]">Build Log Updates</h3>
              <p className="text-xs text-[#A8A5A0] leading-relaxed">
                Builders post progress logs (text & screenshots) tied directly to the problem timeline.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
            <span className="font-display text-7xl font-extrabold text-[#242834]/60 absolute -right-2 -bottom-3 select-none pointer-events-none group-hover:text-emerald-500/20 transition-colors">
              04
            </span>
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Step 04</span>
              <h3 className="font-display text-lg font-bold text-[#F2F0EB]">Validated Proof</h3>
              <p className="text-xs text-[#A8A5A0] leading-relaxed">
                Poster validates working demo proof. Result is published on the public proof wall feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hero Showcase Proof Card */}
      {proofWallItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#FFB020] text-xs font-bold uppercase tracking-wider mb-1.5">
                <Award className="w-4 h-4 text-[#FFB020]" /> Featured Proof of Solution
              </div>
              <h2 className="font-display text-3xl font-extrabold text-[#F2F0EB]">The Proof Wall</h2>
              <p className="text-[#A8A5A0] text-sm mt-1">
                Real problems solved with verified demo links & poster endorsements.
              </p>
            </div>

            <Link
              to="/wall"
              className="text-xs font-bold text-[#FFB020] hover:text-[#FF6B4A] flex items-center gap-1 transition-colors"
            >
              View Full Proof Wall <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ProofCard item={proofWallItems[0]} />
        </section>
      )}

      {/* Open Problems Grid Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Zap className="w-4 h-4" /> Open for Builders
            </div>
            <h2 className="font-display text-3xl font-extrabold text-[#F2F0EB]">Latest Authentic Problems</h2>
            <p className="text-[#A8A5A0] text-sm mt-1">
              Filter by skills needed and claim a real project that matters.
            </p>
          </div>

          <Link
            to="/problems"
            className="text-xs font-bold text-[#FFB020] hover:text-[#FF6B4A] flex items-center gap-1 transition-colors"
          >
            Explore All Problems ({openProblems.length}) <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-64 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {openProblems.map((prob) => (
              <ProblemCard key={prob.id} problem={prob} isBuilder={role === 'builder'} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
