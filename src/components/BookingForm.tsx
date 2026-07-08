import { useState } from 'react';

import { trackFormLead, trackWhatsAppLead } from '@/lib/lead-tracking';
interface Props { phone: string; whatsapp: string; variant?: 'hero' | 'default'; }

const occasions = ['Candlelight Dinner','Anniversary Celebration','Birthday Surprise','Marriage Proposal','Surprise Date','Pre-Wedding Shoot','Baby Moments',"Valentine's Week",'Other'];

export default function BookingForm({ phone, whatsapp, variant = 'default' }: Props) {
  const [form, setForm] = useState({ name:'', phone:'', occasion:'', date:'' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hi! I want to book a celebration at HIVY Surat.\n\nName: ${form.name}\nPhone: ${form.phone}\nOccasion: ${form.occasion}\nPreferred Date: ${form.date||'Flexible'}\n\nPlease confirm availability.`);
    const whatsappUrl = `https://wa.me/${whatsapp}?text=${text}`;

    trackFormLead({
      form_name: 'astro-booking-form',
      form_variant: variant,
      page_title: document.title,
    });

    trackWhatsAppLead({
      form_name: 'astro-booking-form',
      form_variant: variant,
      destination: whatsappUrl,
      page_title: document.title,
    });

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const card = 'bg-white rounded-2xl shadow-2xl border border-border p-6';

  if (sent) return (
    <div className={card + ' text-center'}>
      <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✅</div>
      <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp Opened!</h3>
      <p className="text-sm text-muted mb-4">We'll confirm your booking in minutes!</p>
      <button onClick={() => setSent(false)} className="text-sm text-primary hover:underline">← Book another occasion</button>
    </div>
  );

  return (
    <div className={card}>
      <div className="mb-5">
        <h3 className="text-xl font-bold text-foreground font-serif">Book Your Celebration</h3>
        <p className="text-sm text-muted mt-1">Instant confirmation via WhatsApp · Surat</p>
      </div>
      <form onSubmit={submit} className="space-y-3">
        {[
          { label:'Your Name *', key:'name', type:'text', ph:'Enter your name', req:true },
          { label:'Phone Number *', key:'phone', type:'tel', ph:'+91 XXXXX XXXXX', req:true },
        ].map(f => (
          <div key={f.key}>
            <label className="block text-xs font-medium text-foreground mb-1">{f.label}</label>
            <input type={f.type} required={f.req} placeholder={f.ph}
              value={(form as any)[f.key]} onChange={e => setForm({...form, [f.key]: e.target.value})}
              className="w-full px-3 py-2.5 border border-border rounded-xl text-sm bg-surface text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-primary transition" />
          </div>
        ))}
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">Occasion *</label>
          <select required value={form.occasion} onChange={e => setForm({...form, occasion: e.target.value})}
            className="w-full px-3 py-2.5 border border-border rounded-xl text-sm bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-primary transition">
            <option value="">Select occasion</option>
            {occasions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">Preferred Date</label>
          <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2.5 border border-border rounded-xl text-sm bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-primary transition" />
        </div>
        <button type="submit" className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold flex items-center justify-center gap-2 transition-colors mt-1">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Book via WhatsApp
        </button>
        <p className="text-center text-xs text-muted">Or call: <a href={`tel:${phone}`} className="text-primary font-medium">{phone}</a></p>
      </form>
    </div>
  );
}
