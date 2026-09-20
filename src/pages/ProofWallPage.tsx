import React, { useEffect, useState } from 'react';
import { ProofWallCardItem } from '../types';
import { fetchProofWall } from '../services/api';
import { ProofCard } from '../components/ProofCard';
import { Sparkles, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const ProofWallPage: React.FC = () => {
  const [items, setItems] = useState<ProofWallCardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchProofWall();
        setItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFB020]/10 text-[#FFB020] border border-[#FFB020]/30 shadow-sm">
          <Award className="w-4 h-4 text-[#FFB020]" />
          Public Showcase Feed
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F2F0EB] tracking-tight">
          The <span className="text-gradient-amber">Proof Wall</span>
        </h1>

        <p className="text-[#A8A5A0] text-base leading-relaxed">
          Authentic real-world problems solved by student developers and validated with proof of real operational impact.
        </p>

        {/* Stats Bar */}
        <div className="pt-2 flex items-center justify-center gap-6 text-xs text-[#A8A5A0]">
          <span className="flex items-center gap-1.5 font-semibold text-[#F2F0EB]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {items.length} Validated Solutions
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 font-semibold text-[#F2F0EB]">
            <ShieldCheck className="w-4 h-4 text-[#FFB020]" /> 100% Poster Endorsed
          </span>
        </div>
      </div>

      {/* Proof Wall Feed Cards */}
      {loading ? (
        <div className="space-y-8">
          {[1, 2].map((n) => (
            <div key={n} className="h-96 rounded-3xl bg-[#12151C] animate-pulse border border-[#242834]" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="p-16 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-3">
          <Sparkles className="w-10 h-10 text-[#6E6B65] mx-auto" />
          <h3 className="font-display text-xl font-bold text-[#F2F0EB]">No validated proofs published yet</h3>
          <p className="text-[#A8A5A0] text-xs max-w-md mx-auto">
            Once a student builder completes a claimed project and the problem poster validates the proof, it appears right here on the public wall!
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {items.map((item) => (
            <ProofCard key={item.proof.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
