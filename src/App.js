import {useState} from 'react';
import ProductQuantitySlider from './components/ProductQuantitySlider/ProductQuantitySlider';
import SliderLine from './components/SliderLine/SliderLine';
import {ReactComponent as Pin} from './images/svg/pin.svg';
import SwiperSlider from './components/SwiperSlider/SwiperSlider';
import Img1 from './images/dandelion-445228_1920.jpg';
import Img2 from './images/flowers-276014_1920.jpg';
import Img3 from './images/ocean-3605547_1920.jpg';
import Img4 from './images/road-1072821_1920.jpg';

import './App.css';

function App() {
  const [quantity, setQuantity] = useState(1);

  const minQuantity = 1;
  const maxQuantity = 100;
  const step = 1;
  const style = {height: '27px'};

  const sliderImages = [
    {id: '1', img: <img src={Img1} alt="dandelion" />},
    {id: '2', img: <img src={Img2} alt="flowers" />},
    {id: '3', img: <img src={Img3} alt="ocean" />},
    {id: '4', img: <img src={Img4} alt="road" />},
  ];
  return (
    <div className="appContainer">
      <div className="sliderContainer">
        <div className="sliderWrapper">
          <ProductQuantitySlider
            pin={<Pin />}
            value={quantity}
            minValue={minQuantity}
            maxValue={maxQuantity}
            step={step}
            setValue={setQuantity}
            style={style}
          />
        </div>

        {/* Slider line */}
        <div className="lineContainer">
          <SliderLine first={true} />
          <SliderLine first={false} />
        </div>
      </div>
      <div className="swiperSliderContainer">
        <SwiperSlider sliderImages={sliderImages} />
      </div>
    </div>
  );
}

export default App;
