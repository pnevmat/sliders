import React from 'react';
import s from './SliderLine.module.css';

export default function SliderLine({first}) {
  return (
    <>
      <div className={first ? `${s.lineDevider} ${s.first}` : s.lineDevider}>
        <div className={s.line}></div>
      </div>
    </>
  );
}
