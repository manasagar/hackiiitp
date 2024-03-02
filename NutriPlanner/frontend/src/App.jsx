import React from 'react';
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Navigate
} from "react-router-dom";
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Features } from './pages/Features';
import { FoodRecipe } from './pages/Features/FoodRecipe';
import { Nutrition } from './pages/Features/Nutrition';
import { PhotoInfo } from './pages/Features/PhotoInfo';
import { Chatbot } from './pages/Features/Chatbot';
import { Tracker } from './pages/Features/Tracker';
import { useState } from 'react';
import { ErrorPage } from './components/ErrorPage';
import { NutritionOutput } from './pages/Features/NutritionOutput';
import { TrackerOutput } from './pages/Features/TrackerOutput';
import { Blogs } from './pages/Blogs';
import { Blogdetail } from './pages/Blogdetail';
import { Blogcreate } from './pages/Blogcreate';


export const App =()=>{
  const [token,setToken] = useState(localStorage.getItem('token'));

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' 
      element={<Layout 
        token={token}
        setToken={setToken}
      />}
    >
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blogs/detail' element={<Blogdetail />} />
      <Route path='/blogs/create' element={<Blogcreate />} />

      {token ? (
        <>
          <Route path='/features' element={<Features />} />
          <Route path='/features/foodrecipe' element={<FoodRecipe/>}/>
          <Route path='/features/nutrition' element={<Nutrition/>}/>
          <Route path='/features/nutrition/output' element={<NutritionOutput/>}/>
          <Route path='/features/chatbot' element={<Chatbot />}/>
          <Route path='/features/photoinfo' element={<PhotoInfo />}/>
          <Route path='/features/tracker' element={<Tracker />}/>
          <Route path='/features/tracker/output' element={<TrackerOutput />}/>
        </>
      ) : (
        <>
          <Route path='/login' element={<Login setToken={setToken}/>} />
          <Route path='/signup' element={<Signup setToken={setToken} />} />
          <Route path="/features/*" element={<Navigate to="/signup" replace />} />
        </>
      )}

      <Route path='*' element={<ErrorPage/>}/>
    </Route>
  ));

  return(
    <RouterProvider router={router} />
  )
}

