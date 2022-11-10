import React, { useState } from 'react'
import { Navbar, Offers, Products, Slider } from './components'
import { productList } from "./Data";
import "./App.scss";

function App() {
  const [hover, setHover] = useState(false);
  const [products, setProducts] = useState(productList);

  return (
    <div className="App">
      <Navbar hover={hover} setHover={setHover} products={products} setProducts={setProducts}/>
      <div id={hover ? "overlay" : ""}>
        <Slider products={products} setProducts={setProducts}/>
        <Products products={products} setProducts={setProducts} />
        <Offers />
      </div>
    </div>
  )
}

export default App