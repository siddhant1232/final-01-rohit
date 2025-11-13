// place this inside the same file (above or below Contact component)
import React, { useState } from 'react';

const CopyPhoneButton: React.FC<{ phone: string }> = ({ phone }) => {
  const [copied, setCopied] = useState(false);

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: try opening tel link if clipboard fails
      window.location.href = `tel:${phone.replace(/\s+/g, '')}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copyPhone}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-zinc-800 bg-zinc-900/6 text-sm text-gray-text hover:text-white hover:bg-zinc-900/10 transition"
      aria-label="Copy phone number"
    >
      <span className="text-sm">{copied ? 'Copied ✓' : 'Copy phone'}</span>
    </button>
  );
};
export default CopyPhoneButton;