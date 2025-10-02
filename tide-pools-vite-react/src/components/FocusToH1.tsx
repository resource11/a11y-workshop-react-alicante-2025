import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function FocusToH1(){
  const location = useLocation();
  useEffect(()=>{
    const id = requestAnimationFrame(()=>{
      const h1 = document.querySelector('main h1') as HTMLHeadingElement | null;
      if (h1){ h1.setAttribute('tabindex','-1'); h1.focus(); }
    });
    return ()=> cancelAnimationFrame(id);
  }, [location]);
  return null;
}
