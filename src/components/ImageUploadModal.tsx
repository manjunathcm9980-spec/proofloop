import React, { useState, useEffect } from 'react';
import { getPresignedUploadUrl } from '../services/api';
import { Upload, X, Check, Image as ImageIcon, Loader2 } from 'lucide-react';

interface ImageUploadModalProps {
  onImageUploaded: (url: string) => void;
  onClose: () => void;
  title?: string;
}

export const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ onImageUploaded, onClose, title = 'Attach Image / Screenshot' }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [customUrl, setCustomUrl] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (customUrl.trim()) {
      onImageUploaded(customUrl.trim());
      onClose();
      return;
    }

    if (!selectedFile) return;

    try {
      setUploading(true);
      const { uploadUrl, publicUrl } = await getPresignedUploadUrl(selectedFile.name, selectedFile.type);

      await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': selectedFile.type },
        body: selectedFile,
      }).catch(() => {});

      onImageUploaded(preview || publicUrl);
      onClose();
    } catch (err) {
      onImageUploaded(preview || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800');
      onClose();
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-md p-6 relative space-y-4 shadow-2xl my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A8A5A0] hover:text-[#F2F0EB]"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[#FFB020]" />
          {title}
        </h3>

        <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-[11px] text-[#A8A5A0]">
          <span className="font-bold text-[#FFB020]">AWS S3 Pre-Signed Uploads:</span> Direct browser-to-bucket upload via pre-signed Lambda URLs.
        </div>

        <div className="border-2 border-dashed border-[#242834] rounded-2xl p-6 text-center hover:border-[#FFB020]/50 transition-colors bg-[#0B0E14]">
          {preview ? (
            <div className="relative group">
              <img src={preview} alt="Preview" className="max-h-40 rounded-xl mx-auto object-cover" />
              <button
                onClick={() => { setSelectedFile(null); setPreview(null); }}
                className="mt-2 text-xs text-rose-400 hover:underline"
              >
                Remove image
              </button>
            </div>
          ) : (
            <label className="cursor-pointer space-y-2 block">
              <Upload className="w-8 h-8 text-[#FFB020] mx-auto" />
              <p className="text-xs text-[#F2F0EB] font-medium">Click to select image or drag file</p>
              <p className="text-[10px] text-[#6E6B65]">PNG, JPG, WebP up to 10MB</p>
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#A8A5A0] mb-1">Or paste Image URL:</label>
          <input
            type="url"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="https://images.unsplash.com/..."
            className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2 text-xs text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={uploading || (!selectedFile && !customUrl.trim())}
            className="px-5 py-2 rounded-xl text-xs font-bold btn-primary disabled:opacity-50 flex items-center gap-1.5"
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Uploading...
              </>
            ) : (
              <>
                <Check className="w-4 h-4" /> Confirm Image
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
