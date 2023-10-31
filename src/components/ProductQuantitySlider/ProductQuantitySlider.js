import React, {useState} from 'react';
import {ReactComponent as Pin} from '../../images/svg/pin.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './ProductQuantitySlider.module.css';

export default function ProductQuantitySlider() {
  const [value, setValue] = useState(0);
  console.log('Input range value: ', value);
  return (
    <>
      <div className={s.container}>
        <div className={s.pinContainer}>
          <Pin />
        </div>
        <input
          className={s.inputRange}
          type="range"
          value={value}
          min="0"
          max="100"
          step="1"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}
