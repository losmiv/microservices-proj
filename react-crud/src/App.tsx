import React from 'react';
//import { render } from 'react-dom';
import './App.css';
import Products from "./admin/Products";
import Main from "./main/Main";
import ProductsCreate from "./admin/ProductsCreate";
import ProductsEdit from "./admin/ProductsEdit";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  //  render (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Main />}/>
          <Route path='/admin/products' element = {<Products />}/>
          <Route path='/admin/products/create' element = {<ProductsCreate/>}/>
          <Route path='/admin/products/:id/edit' element = {<ProductsEdit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
    //)
  )
};


export default App;
