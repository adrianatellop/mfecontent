import React from 'react';
import {useInfo} from '@pmc-uc/uc'

function App() {
  const {info} = useInfo()
  
  return (
    <div>
      <p>Soy la barra de estado y me complicaré la vida resumiendo el estado de toda la web :)</p>
      <p>productos acutales {info.productsCount}</p>
    </div>
  );
}

export default App;
