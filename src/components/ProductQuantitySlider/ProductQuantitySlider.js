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
  style,
}) {
  // Todo: try when step will be more than 1
  const [pinStep, sePinStep] = useState(value);
  const [pinWidth, setPinWidth] = useState(0);
  const [left, setLeft] = useState(value);

  const mainBlockRef = useRef(null);
  const pinContainerRef = useRef(null);

  useEffect(() => {
    if (mainBlockRef.current && pinContainerRef.current) {
      const mainBlockWidth = mainBlockRef.current.getBoundingClientRect().width;
      const pinContainerWidth =
        pinContainerRef.current.getBoundingClientRect().width;

      const actualMainBlockWidth = Math.ceil(mainBlockWidth);
      const actualPinContainerWidth = Math.ceil(pinContainerWidth);

      if (actualMainBlockWidth !== 0) {
        const pinStep = actualMainBlockWidth / maxValue;
        console.log('Pin step: ', pinStep);
        sePinStep(pinStep);
        setPinWidth(actualPinContainerWidth);
      }
    }
  }, [maxValue, step]);

  useEffect(() => {
    if (value <= minValue || value === `${minValue + step}`) {
      setLeft(-pinWidth / 2 + 2);
      setValue(minValue);
    }

    if (value >= maxValue || value >= `${maxValue - step}`) {
      setLeft(pinStep * maxValue - pinWidth / 2 - 2);
      setValue(maxValue);
    }
  }, [value, minValue, maxValue, step, pinStep, pinWidth, setValue]);

  const setValueHandler = (newValue) => {
    if (newValue !== value && newValue > minValue) {
      setLeft((prevLeft) => {
        if (value < newValue || value > newValue)
          return newValue * pinStep - pinWidth / 2;
      });
      setValue(newValue);
    }
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
          style={style ? style : {}}
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
