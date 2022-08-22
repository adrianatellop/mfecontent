import React from 'react';
import { Route , useNavigate, Routes, BrowserRouter } from 'react-router-dom'
import { useInfo } from '@adrianatellop/sandbox-lib'

const ProductsList = ({categoria}) => {
  let productos = []

  switch (categoria) {
    case 'terraza':
      productos = []
      break
    case 'sala':
      productos = [
        <li>Fichas de poker set 8 personas</li>,
        <li>Juegos de mesa CTM</li>,
        <li>Ventanas antiruido</li>,
        <li>Aspiradora DAwoo</li>,
      ]
      break
    case 'dormitorio':
      productos = [
        <li>Cojines set 3 hogar</li>,
      ]
      break
    case 'cocina':
      productos = [
        <li>Cocina XULUX</li>,
      ]
      break
    default: 
      productos = [
        <li>Canasta navideña modelo 3</li>,
        <li>Cojines set 3 hogar</li>,
        <li>Jabon liquido sucio</li>,
        <li>Camarones bolsa de kilo</li>,
        <li>Pantalla 20 pulgadas</li>,
        <li>Televisor 60 pulgadas</li>,
        <li>Fichas de poker set 8 personas</li>,
        <li>Juegos de mesa CTM</li>,
        <li>Ventanas antiruido</li>,
        <li>Aspiradora DAwoo</li>,
        <li>Cocina XULUX</li>,
        <li>Tablero Madera Pino</li>,
        <li>Alicate 10 pulgadas</li>,
        <li>Taladro Inalambrico Bossssac 12V</li>,
        <li>RotoMartillo laracrof 9000 watts</li>,
      ]
  }
  return <ul>{productos.map(p => p)}</ul>
}
function App({tipo}) {
  const navigate = useNavigate()
  const {info, setInfo} = useInfo()
  
  return <>
    <div>
      <div>
        <button onClick={()=> setInfo({...info , productsCount: info.productsCount+1})}> agregar un producto </button>
        <button onClick={()=> setInfo({...info , productsCount: info.productsCount-1 < 0 ? 0 : info.productsCount-1})}> quitar un producto </button>
      </div>
      <h4>Categorías - {tipo}</h4>
      <ul>
        <li onClick={() => navigate('/products')}>Todos</li>
        <li onClick={() => navigate('/products/terraza')}>Terraza</li>
        <li onClick={() => navigate('/products/sala')}>Sala</li>
        <li onClick={() => navigate('/products/dormitorio')}>Dormitorio</li>
        <li onClick={() => navigate('/products/cocina')}>Cocina</li>
      </ul>
      <h4>Productos</h4>
      <Routes>
        <Route path="" element={<ProductsList categoria={''}/>}/>
        <Route path="terraza" element={<ProductsList categoria={'terraza'}/>}/>
        <Route path="sala" element={<ProductsList categoria={'sala'}/>}/>
        <Route path="dormitorio" element={<ProductsList categoria={'dormitorio'}/>}/>
        <Route path="cocina" element={<ProductsList categoria={'cocina'}/>}/>
      </Routes>
      
    </div>
  </>;
}

export default App;