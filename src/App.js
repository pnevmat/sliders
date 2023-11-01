import {useState} from 'react';
import ProductQuantitySlider from './components/ProductQuantitySlider/ProductQuantitySlider';
import SliderLine from './components/SliderLine/SliderLine';
import {ReactComponent as Pin} from './images/svg/pin.svg';

import './App.css';

function App() {
  const [quantity, setQuantity] = useState(1);

  const minQuantity = 1;
  const maxQuantity = 100;
  const step = 1;
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '525px',
        paddingTop: '100px',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
      <div style={{border: '1px solid gray', borderRadius: '5px'}}>
        <div>
          <div className="sliderWrapper">
            <ProductQuantitySlider
              pin={<Pin />}
              value={quantity}
              minValue={minQuantity}
              maxValue={maxQuantity}
              step={step}
              setValue={setQuantity}
            />
          </div>

          {/* Slider line */}
          <div className="lineContainer">
            <SliderLine first={true} />
            <SliderLine first={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
