import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PageLogin from '../pages/PageLogin/PageLogin';
import PageRegister from '../pages/PageRegister/PageRegister';
import PageFeed from '../pages/HomeFeed/PageFeed';
import PagePost from '../pages/PagePost/PagePost';
import PageErro from '../pages/PageErro/PageErro';
import PageAdd from '../pages/PageAdd/add';



export default function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<PageLogin/>} />
              <Route exact path="/cadastro" element={<PageRegister/>} />
              <Route exact path="/feed" element={<PageFeed/>} />
              <Route exact path="/adicionar" element={<PageAdd/>} />
              <Route exact path="/comentarios/:id" element={<PagePost/>} />
              
          </Routes>
      </BrowserRouter>
  )
}