import React, { useEffect, useState } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Mail, MessageSquare } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: '', email: '', message: '' };

const Contact: React.FC = () => {
  const phoneNumber = '919696827292';
  const message = 'Hi';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | 'success' | 'error'>(null);

  // auto-clear status after a short time to let the success badge fade out
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const t = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const subject = encodeURIComponent(`Contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:you@yourdomain.com?subject=${subject}&body=${body}`;

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contacts" className="py-14 top-0">
      {/* CSS animations scoped to this file (no external libs) */}
      <style>{`
        /* entrance: fade + slide up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 560ms cubic-bezier(.2,.9,.3,1) both;
        }

        /* small pop for buttons on mount */
        @keyframes popIn {
          from { opacity: 0; transform: scale(.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-pop { animation: popIn 420ms cubic-bezier(.2,.9,.3,1) both; }

        /* success badge */
        @keyframes fadeScale {
          from { opacity: 0; transform: translateY(-6px) scale(.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-success {
          animation: fadeScale 360ms ease-out both;
        }
      `}</style>

      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-64">
        <SectionHeader title="contacts" />

        {/* TWO-COLUMN: vertically center on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:items-center mt-8">
          {/* LEFT: info + CTAs (organized) */}
          <div
            className="flex flex-col justify-center h-full animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Let's connect</h4>

            <p className="text-gray-text text-md leading-relaxed mb-4 max-w-md">
              I'm open to internships, freelance, and project collaborations. Share a short
              note about the role or project and I’ll reply as soon as I can.
            </p>

            <ul className="text-sm text-gray-text space-y-1 mb-4">
              <li>📍 Remote-friendly; open to hybrid</li>
              <li>🕒 Typical reply time: within 24 hours</li>
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900/6 border border-zinc-800 text-sm text-gray-text hover:text-white hover:bg-zinc-900/10 transition transform will-change-auto focus:outline-none focus:ring-2 focus:ring-white/10"
                aria-label="Message on WhatsApp"
                // make link pop a bit on mount
                style={{ animationDelay: '140ms' }}
                // add the small pop class so it animates on mount too
                // combine classes dynamically
                >
                <span className="animate-pop" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <MessageSquare size={16} />
                </span>
                <span className="animate-pop" style={{ marginLeft: 6 }}>WhatsApp</span>
              </a>

              <a
                href="mailto:randomrohit002@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-900/6 border border-zinc-800 text-sm text-gray-text hover:text-white hover:bg-zinc-900/10 transition transform will-change-auto focus:outline-none focus:ring-2 focus:ring-white/10"
                aria-label="Send email"
                style={{ animationDelay: '180ms' }}
              >
                <span className="animate-pop" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Mail size={16} />
                </span>
                <span className="animate-pop" style={{ marginLeft: 6 }}>Email</span>
              </a>
            </div>
          </div>

          {/* RIGHT: message form */}
          <div className="animate-fade-up" style={{ animationDelay: '240ms' }}>
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900/10 border border-zinc-800 rounded-lg p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Send a message</h3>
                  <p className="text-xs text-gray-text -mt-1">Short messages get faster replies.</p>
                </div>

                {/* success / error small badge (animated) */}
                <div className="ml-4">
                  {status === 'success' && (
                    <div className="text-emerald-400 text-sm animate-success">Sent ✓</div>
                  )}
                  {status === 'error' && (
                    <div className="text-rose-500 text-sm animate-success">Failed</div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="text-xs text-gray-text mb-1 block">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full px-3 py-2 rounded-md bg-transparent border ${
                      errors.name ? 'border-rose-500' : 'border-zinc-700'
                    } text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-white/10`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="text-xs text-gray-text mb-1 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full px-3 py-2 rounded-md bg-transparent border ${
                      errors.email ? 'border-rose-500' : 'border-zinc-700'
                    } text-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-white/10`}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-3">
                <label className="text-xs text-gray-text mb-1 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className={`w-full px-3 py-2 rounded-md bg-transparent border ${
                    errors.message ? 'border-rose-500' : 'border-zinc-700'
                  } text-sm resize-none transition-shadow focus:outline-none focus:ring-2 focus:ring-white/10`}
                  placeholder="Write a short message..."
                />
                {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium disabled:opacity-60 transform transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  {submitting ? 'Sending…' : 'Send'}
                </button>

                <div className="text-sm text-gray-text">
                  {status === 'success' && <span className="text-emerald-400">Queued</span>}
                  {status === 'error' && <span className="text-rose-500">Failed</span>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
