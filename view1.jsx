import React, { useState } from "react";
import {Card,Card2} from "./card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SideBar2 } from "../home/home";
import { Playlist } from "../home/home2";




function Aesthetic1() {
const [isLike, setLike] = useState(false);
const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
const handleLikeClick = () => {
  setLike((prevIsLike) => !prevIsLike);

  if (isLike) {
    const likedPlaylistDetails = {
      image: "/aesthetic-3.jpg",
      head: "Aesthetic",
      para: "Playlist.Spotify"
    };

    setLikedPlaylist(likedPlaylistDetails);

    toast.success('Added to favorites!', {
      position: "top-center", theme: "colored", style: {
        color: "black"
      }
    });
  }
};



  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "/pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2 likedPlaylistDetails={likedPlaylistDetails} setLikedPlaylist={setLikedPlaylist} />
        </div>
        <div className="w-4/5 ml-10 bg-one"style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
          <div className="bg-transparent opacity-80 nav sticky w-full ">
            <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>
              
              <div className="flex-grow"></div>
          <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
          <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
          <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
        </div>
        <div className="  flex flex-col " >
          <div className="flex">
            <img src="https://harunmudak.com/wp-content/uploads/2020/12/original-742x1024.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
            <div className="flex flex-col pl-5">
              <p className="text-xl  mb-0">Playist</p>
              <h1 className="text-5xl mt-0 mb-2" >Aesthetic songs you'll love</h1>
              <p>Kick back to the best new and recent chill hits.</p>
              <div className="flex items-center gap-2">
                <i className="bi bi-spotify text-s-green text-3xl"></i>
                <h1 className="text-white text-2xl font-bold">Spotify</h1>
                <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-s-bg2" >
        <div className="flex p-6">
          <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
          <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
            {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
          </i>


          <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
        </div>
        <table className="">
          <thead className="">
            <tr>
              <th className="pl-8">#</th>
              <th className="">Title</th>
              <th className="pl-1">Album</th>
              <th className="pl-6">Date Added</th>
              <th className="pl-3"><i className="bi bi-clock"></i></th>
            </tr>
          </thead>
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </table>
      </div>
    </div>
    <ToastContainer />
  </div>


</>
  )
}



function Alone() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
     
    }
  }
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
      
        <SideBar2  /> 
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/alone.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Alone Mix </h1>
                  <p>Kick back to the best new and recent Alone Mix.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}

function Ariana() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
      setShowS1(true);
    }
  }

  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2 /> 
        </div>
        <div className="w-4/5 ml-10  bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/ariana.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >It's the Time for Ariana</h1>
                  <p>Kick back to the best new and recent Ariana hits.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}

function Chillhop() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
    }
  }
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2  /> 
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/chillhop.jpeg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy Chill hop Mix</h1>
                  <p>Kick back to the best new and recent chill hits.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}

function Deepvibes() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
      
    }
  }

  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2 /> 
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/deepvibes.jpeg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy Deep vibes Mix</h1>
                  <p>Kick back to the best new and recent Deep vibes Mix.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}


function Justchill() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
    }
  }
  
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2 /> 
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/justchill.jpeg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy just chill vibes </h1>
                  <p>Kick back to the best new and recent chill back vibes.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}
function Lofichill() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
    }
  }
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2  /> 
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/lofi&chill.jpeg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy Lofi chill vibes </h1>
                  <p>Kick back to the best new and recent Lofi chill vibes.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}

function Nytmix() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
    }
  }
 
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
        <SideBar2  /> 
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/latenyt.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy Late Night Mix </h1>
                  <p>Kick back to the best new and recent Late night Mix.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}

function Sadlofi() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);

    if (isLike) {
      toast.success('Added to favorites!', { position: "top-center" , theme:"colored",style:{
        color:"black"
      }});
    }
  }
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
      <div className="w-1/5">
          <SideBar2 />
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/sadlofi.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy Late Night Mix </h1>
                  <p>Kick back to the best new and recent Late night Mix.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>


    </>
  )
}
 
function Lofimix() {
  const [isLike, setLike] = useState(false);
  const handleLikeClick = () => {
    setLike(!isLike);
  
    if (!isLike) {
      toast.success('Added to favorites!', {
        position: 'top-center',
        theme: 'colored',
        style: {
          color: 'black',
        },
      });
    } else {
      toast.error('Remove from Favorites!', {
        position: 'top-center',
      });
    }
  };
  
  
  const cardsData = [{
    id: 1,
    artist: "sofia Mills",
    album: "coffee Breath",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Liana Flores",
    album: "rises the moon",
    image: "https://i.pinimg.com/564x/20/af/d3/20afd3c860b6ee2c599f9405906224ae.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "d4vd",
    album: "Here with me",
    image: "https://th.bing.com/th/id/OIP.EeI1Am74Ok0cVJMkrWs9mgAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "mxmtoon",
    album: "mona lisa",
    image: "https://th.bing.com/th/id/OIP.231HmCm33AgfYOwhN6FZ5gAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Lyn Lapid",
    album: "In My Mind",
    image: "https://i.pinimg.com/originals/00/99/21/009921a5ebff899d696965d263e3e272.png",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Harriette",
    album: "Atleast I'm Pretty",
    image: "https://th.bing.com/th/id/OIP.ko-sN-1gqNAmSgN16hMvfwAAAA?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "okayceci",
    album: "Feel u",
    image: "https://images.genius.com/db63b8bced3fc5037ea93553fccbd8c6.911x911x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "olivia rodrigo",
    album: "deja vu",
    image: "https://th.bing.com/th/id/OIP.ldL6St64OfmTSbFS6pGPngHaHa?rs=1&pid=ImgDetMain",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Audrey mika",
    album: "y u gotta be like that",
    image: "https://images.genius.com/ac5dc6a17a330ce03df10ed3640c8956.800x800x1.jpg",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Ant Sauters",
    album: "Yellow Hearts",
    image: "https://th.bing.com/th/id/R.5db9e52c95d815b74adf4cec539f1830?rik=nA3CcEcXFAZWgQ&riu=http%3a%2f%2fall-noise.co.uk%2fwp-content%2fuploads%2f2019%2f11%2fAnt-Saunders-Yellow-Hearts.jpg&ehk=ViBw0ShtQNYX6t0HjHYm%2bO83k7G83S1oLe65B%2btt%2fbc%3d&risl=&pid=ImgRaw&r=0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./young.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-row">
      <div className="w-1/5">
           <SideBar2  />
        </div>
        <div className="w-4/5 ml-10 bg-black">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
          <div className="navbar-links flex items-center bg-transparent py-3">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>             
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="/roadbeach.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" >Enjoy Lofi Night Mix </h1>
                  <p>Kick back to the best new and recent Lofi night Mix.</p>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-spotify text-s-green text-3xl"></i>
                    <h1 className="text-white text-2xl font-bold">Spotify</h1>
                    <p className="text-gray-500">8,954,454 likes 130 songs, about 7 hr 30 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-s-bg2">
            <div className="flex p-6">
              <i className="bi bi-play-fill bg-s-green  text-black text-4xl rounded-full   p-3"></i>
              <i className="text-4xl text-gray-500 pl-6 pt-3" onClick={() => handleLikeClick()}>
                {!isLike ? <i className="bi bi-heart-fill text-s-green"></i> : <i className="bi bi-heart"></i>}
              </i>


              <i className="bi bi-three-dots text-4xl text-gray-500 pl-6 pt-3 justify-between"></i>
            </div>
            <table className="">
              <thead className="">
                <tr>
                  <th className="pl-8">#</th>
                  <th className="">Title</th>
                  <th className="pl-1">Album</th>
                  <th className="pl-32">Date Added</th>
                  <th className="pl-40"><i className="bi bi-clock"></i></th>
                </tr>
              </thead>
              {cardsData.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </table>
          </div>
        </div>
        <ToastContainer />
      </div>
<Playlist />

    </>
  )
}

export  {Aesthetic1,Alone,Ariana,Chillhop,Deepvibes,Justchill,Lofichill,Nytmix,Sadlofi,Lofimix};