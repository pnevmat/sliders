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
  // ToDo: test and fix calculation of products quantity with different step ammount
  const [pinWidth, setPinWidth] = useState(0);
  const [pinStep, sePinStep] = useState(minValue);
  const [sliderValue, setSliderValue] = useState(minValue);
  const [left, setLeft] = useState(minValue);

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
        sePinStep(pinStep);
        setPinWidth(actualPinContainerWidth);
      }
    }
  }, [maxValue, step]);

  useEffect(() => {
    if (value <= minValue) {
      setLeft(-pinWidth / 2 + 2);
      setSliderValue(minValue);
      setValue(minValue);
    }

    if (value >= maxValue) {
      setLeft(pinStep * maxValue - pinWidth / 2 - 2);
      setSliderValue(maxValue);
      setValue(maxValue);
    }
  }, [value, minValue, maxValue, step, pinStep, pinWidth, setValue]);

  const setValueHandler = (newValue) => {
    // console.log('New value: ', newValue);
    // console.log('Value in on change func: ', value);
    if (newValue !== value && newValue > minValue) {
      setLeft((prevLeft) => {
        if (value < newValue || value > newValue)
          return newValue * pinStep - pinWidth / 2;
      });
      setSliderValue(newValue);
      setValue(newValue * step);
    }
    if (newValue === `${minValue}`) {
      setLeft(-pinWidth / 2 + 2);
      setSliderValue(minValue);
      setValue(minValue * step);
    }
    if (step > 1 && Number(newValue) + step > maxValue) {
      setLeft(pinStep * maxValue - pinWidth / 2 - 2);
      setSliderValue(maxValue);
      setValue(maxValue * step);
    }
  };

  // console.log('Input range value: ', value);
  return (
    <>
      <div ref={mainBlockRef} className={s.container}>
        <div
          ref={pinContainerRef}
          className={`${s.pinContainer} 'background'`}
          style={{left: `${left}px`}}>
          {pin}
        </div>
        <input
          className={s.inputRange}
          style={style ? style : {}}
          type="range"
          value={sliderValue}
          min={minValue}
          max={maxValue}
          step="1"
          onChange={(e) => setValueHandler(e.target.value)}
        />
      </div>
    </>
  );
}
