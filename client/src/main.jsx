import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter, Route, Routes} from 'react-router';
import HomePage from './pages/homepage/homepage.jsx';
import UploadPage from './pages/uploadPage/uploadPage.jsx';
import PostPage from './pages/postPage/postPage.jsx';
import AuthPage from './pages/authPage/authPage.jsx';
import SearchPage from './pages/searchPage/searchPage.jsx';
import ProfilePage from './pages/profilePage/profilePage.jsx';
import MainLayout from './layouts/mainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/upload' element={<UploadPage/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/:username' element={<ProfilePage/>}/>
        </Route>
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
