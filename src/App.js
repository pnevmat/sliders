import ProductQuantitySlider from './components/ProductQuantitySlider/ProductQuantitySlider';

import './App.css';

function App() {
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
        <ProductQuantitySlider />
      </div>
    </div>
  );
}

export default App;
