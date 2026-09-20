import React from 'react';
import { Workflow, ShieldCheck, Cpu, Database, Server } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0E14] border-t border-[#242834] mt-24 py-14 text-[#A8A5A0] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Workflow className="w-5 h-5 text-[#FFB020]" />
              <span className="font-display font-bold text-[#F2F0EB] text-lg">ProofLoop</span>
            </div>
            <p className="text-[#A8A5A0] leading-relaxed text-xs">
              Connecting authentic real-world problems to student builders with verified impact proof.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-[#F2F0EB] uppercase tracking-wider text-[11px] mb-3">Workflow</h4>
            <ul className="space-y-2">
              <li><a href="/problems" className="hover:text-[#FFB020] transition-colors">1. Browse Real Problems</a></li>
              <li><a href="/dashboard" className="hover:text-[#FFB020] transition-colors">2. Claim & Build Progress</a></li>
              <li><a href="/wall" className="hover:text-[#FFB020] transition-colors">3. Public Proof Wall</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-[#F2F0EB] uppercase tracking-wider text-[11px] mb-3">AWS Architecture</h4>
            <ul className="space-y-2 text-[#A8A5A0]">
              <li className="flex items-center gap-1.5"><Server className="w-3.5 h-3.5 text-[#FFB020]" /> AWS Lambda & API Gateway</li>
              <li className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5 text-[#FFB020]" /> Amazon DynamoDB Single-Table</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#FFB020]" /> Amazon Cognito User Pools</li>
              <li className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-[#FFB020]" /> AWS S3 Pre-Signed Uploads</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-[#F2F0EB] uppercase tracking-wider text-[11px] mb-3">AWS Ship It Track</h4>
            <div className="p-3.5 rounded-xl bg-[#12151C] border border-[#242834] text-[#A8A5A0] space-y-1.5">
              <p className="font-bold text-[#FFB020] text-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFB020] animate-pulse"></span>
                Grand Prize Track Ready
              </p>
              <p className="text-[11px] text-[#A8A5A0]">
                Built and documented for serverless AWS deployment with Cognito roles, DynamoDB single-table design, and S3 media storage.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#242834] flex flex-col sm:flex-row justify-between items-center gap-4 text-[#6E6B65] text-[11px]">
          <p>© 2026 ProofLoop. Real problems → real projects → real proof.</p>
          <div className="flex gap-4">
            <span className="text-[#A8A5A0]">AWS Amplify</span>
            <span>•</span>
            <span className="text-[#A8A5A0]">DynamoDB</span>
            <span>•</span>
            <span className="text-[#A8A5A0]">Cognito</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
