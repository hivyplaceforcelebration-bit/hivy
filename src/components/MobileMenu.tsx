import { useState } from 'react';
interface NavItem { name: string; href: string; }
interface Props { navigation: NavItem[]; phone: string; brandName?: string; primaryColor?: string; }

export default function MobileMenu({ navigation, phone, brandName = 'HIVY', primaryColor = '#92400e' }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg text-muted hover:bg-surface-light transition-colors" aria-label="Open menu">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      {open && <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />}
      <div className={`fixed top-0 right-0 z-50 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-serif font-semibold text-foreground">{brandName}</span>
          <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg text-muted hover:bg-surface-light" aria-label="Close">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="py-4 overflow-y-auto">
          {navigation.map(item => (
            <a key={item.name} href={item.href} onClick={() => setOpen(false)}
               className="flex items-center px-5 py-3 text-sm font-medium text-foreground hover:bg-stone-50 transition-colors"
               style={{ ['--hover-color' as any]: primaryColor }}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border">
          <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 w-full py-3 text-white font-semibold rounded-xl"
             style={{ background: `linear-gradient(135deg, ${primaryColor}, #ea580c)` }}>
            📞 {phone}
          </a>
        </div>
      </div>
    </>
  );
}
