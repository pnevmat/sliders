import React, {useState, useEffect, useRef} from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './ProductQuantitySlider.module.css';

export default function ProductQuantitySlider({
  pin,
  value,
  minValue,
  maxValue,
  step,
  setValue,
}) {
  const [pinStep, sePinStep] = useState(value);
  const [left, setLeft] = useState(value);

  const mainBlockRef = useRef(null);
  const pinContainerRef = useRef(null);

  useEffect(() => {
    if (mainBlockRef.current) {
      const mainBlockWidth = mainBlockRef.current.getBoundingClientRect().width;

      const actualMainBlockWidth = Math.ceil(mainBlockWidth);

      if (actualMainBlockWidth !== 0) {
        const pinStep = actualMainBlockWidth / maxValue;
        console.log('Pin step: ', pinStep);
        sePinStep(pinStep);
      }
    }
  }, [maxValue]);

  const setValueHandler = (newValue) => {
    if (newValue !== value && newValue !== minValue) {
      setLeft((prevLeft) => {
        if (value < newValue) return prevLeft + pinStep;
        if (value > newValue) return prevLeft - pinStep;
      });
    }

    if (newValue === minValue) setLeft(minValue);
    setValue(newValue);
  };

  console.log('Input range value: ', value);
  return (
    <>
      <div ref={mainBlockRef} className={s.container}>
        <div
          ref={pinContainerRef}
          className={s.pinContainer}
          style={{left: `${left}px`}}>
          {pin}
        </div>
        <input
          className={s.inputRange}
          type="range"
          value={value}
          min={minValue}
          max={maxValue}
          step={step}
          onChange={(e) => setValueHandler(e.target.value)}
        />
      </div>
    </>
  );
}
