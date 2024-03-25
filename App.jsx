import React from "react";
 import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home,SideBar,SideBar2} from "./home/home";
import Register from "./home/register";
import Login from "./home/login";
import Search from "./view/search";
import {Home2,Playlist} from "./home/home2";
import {Aesthetic1,Alone,Ariana,Chillhop,Deepvibes,Justchill,Lofichill,Nytmix,Sadlofi,Lofimix} from "./view/view1";
import {Shreya,Sonu,Rahman,Badshah,Arijith,Udith,Falguni,Sujatha,Shankar,Anirudh} from "./view/sview";
import Myplaylist from "./view/Myplaylist";
import Toast from "./view/toast";
function App(){
  return(
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home2" element={<Home2 />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SideBar" element={<SideBar />} />
      <Route path="/SideBar2" element={<SideBar2 />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Aesthetic1" element={<Aesthetic1 />} />
      <Route path="/Alone" element={<Alone />} />
      <Route path="/Ariana" element={<Ariana />} />
      <Route path="/Chillhop" element={<Chillhop />} />
      <Route path="/Deepvibes" element={<Deepvibes />} />
      <Route path="/Justchill" element={<Justchill />}/>
      <Route path="/Lofichill" element={<Lofichill />} />
      <Route path="/Nytmix" element={<Nytmix />} />
      <Route path="/Sadlofi" element={<Sadlofi />} />
      <Route path="/Lofimix" element={<Lofimix />} />
      <Route path="/Shreya" element={<Shreya />} />
      <Route path="/Sonu" element={<Sonu />} />
      <Route path="/Rahman" element={<Rahman />} />
      <Route path="/Badshah" element={<Badshah />} />
      <Route path="/Arijith" element={<Arijith />} />
      <Route path="/Udith" element={<Udith />} />
      <Route path="/Falguni" element={<Falguni />} />
      <Route path="/Sujatha" element={<Sujatha />} />
      <Route path="/Shankar" element={<Shankar />} />
      <Route path="/Anirudh" element={<Anirudh />} />
      <Route path="/Myplaylist" element={<Myplaylist />} />
      <Route path="/Toast" element={<Toast />} />
    </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App;