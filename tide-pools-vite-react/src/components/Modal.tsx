import { useEffect, useRef } from 'react';

export function A11yModal({onClose, children}:{onClose:()=>void; children:React.ReactNode}){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const focusable = ref.current?.querySelectorAll<HTMLElement>('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    const first = focusable?.[0], last = focusable?.[focusable.length-1];
    function onKey(e: KeyboardEvent){
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && first && last){
        if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
      }
    }
    document.addEventListener('keydown', onKey);
    (first as HTMLElement|undefined)?.focus?.();
    return ()=> document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" className="modal" ref={ref} style={{border:'2px solid #333', padding:'1rem'}}>
      {children}
    </div>
  );
}
