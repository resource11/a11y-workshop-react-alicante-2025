import React from 'react';
export function A11yTabs(){
  const [i, setI] = React.useState(0);
  const ids = ['p1','p2'];
  function onKey(e: React.KeyboardEvent<HTMLDivElement>){
    if (e.key === 'ArrowRight') setI((i+1)%2);
    if (e.key === 'ArrowLeft') setI((i+1)%2 ? 0 : 1);
  }
  return (
    <div>
      <div role="tablist" aria-label="Examples" onKeyDown={onKey}>
        {[0,1].map(idx => (
          <button
            key={idx}
            role="tab"
            aria-selected={i===idx}
            aria-controls={ids[idx]}
            tabIndex={i===idx?0:-1}
            onClick={()=>setI(idx)}
          >
            {idx===0?'One':'Two'}
          </button>
        ))}
      </div>
      <div id={ids[0]} role="tabpanel" hidden={i!==0}>Panel 1</div>
      <div id={ids[1]} role="tabpanel" hidden={i!==1}>Panel 2</div>
    </div>
  );
}
