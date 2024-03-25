import React, { useState, useEffect } from "react";
import { Card, Card2 } from "./card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SideBar2 } from "../home/home";
import { Playlist } from "../home/home2.jsx";


function Shreya() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://th.bing.com/th/id/OIP.Xtk7cfzzV3qPHGFWin6YmAAAAA?rs=1&pid=ImgDetMain",
        head: "Shreya goshal",
        para: "playlist.Spotify"
      };
      setLikedPlaylist(likedPlaylistDetails);
      toast.success('Added to favorites!', {
        position: "top-center", theme: "colored", style: {
          color: "black"
        }
      });
      setRecentlyPlayed((prevRecentlyPlayed) => [...prevRecentlyPlayed, likedPlaylistDetails]);
    }
  };
  useEffect(() => {
    localStorage.setItem("recentlyPlayed", JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  const playView = {
    image: "",
    head: "",
    para: ""
  };
  const cardsData = [{
    id: 1,
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./gulimata.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./paramsundhari.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./killer.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./tumkyamile.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./samjhawan.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pal.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./chikni.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./kalapakkaara.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./Hasi.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
    date: "2 weeks ago",
    time: 3.32,
    music: "./.mp3"
  }
  ]
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-1/5">
          <SideBar2 likedPlaylistDetails={likedPlaylistDetails} setLikedPlaylist={setLikedPlaylist} />
        </div>
        <div className="w-full sm:w-4/5 ml-0 sm:ml-10">
        <div className="navbar-links flex items-center  ">
                        <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
                        <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>
                        <div className="flex-grow">
                        </div>
                        <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
                        <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
                        <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2" onClick={()=>navigate("/Toast")}></i>
                    </div>
            <div className="flex flex-col" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
            <div class="flex flex-col md:flex-row">
  <img src="https://th.bing.com/th/id/OIP.Xtk7cfzzV3qPHGFWin6YmAAAAA?rs=1&pid=ImgDetMain" alt="" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto mx-3 rounded-lg" />
  <div class="flex flex-col pl-5">
    <p class="text-xl mb-0">Playlist</p>
    <h1 class="text-3xl md:text-5xl mt-0 mb-2">Songs You'll Love</h1>
    <p class="mb-4 md:w-2/3">Kick back to the best new and recent chill hits.</p>
    <div class="flex items-center flex-wrap gap-2">
      <i class="bi bi-spotify text-s-green text-3xl"></i>
      <h1 class="text-white text-2xl font-bold">Spotify</h1>
      <p class="text-gray-500 mb-2 md:mb-0">8,954,454 likes 130 songs, about 7 hr 30 min</p>
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
                <Card key={index} {...card} onClick={() => handleCardClick(card)} />
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


function Sonu() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://us.v-cdn.net/6031544/uploads/editor/w6/j4l3irktk2s1.jpg",
        head: "Sonu Nigham",
        para: "playlist.Spotify"
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
    artist: "Sonu Nigam",
    album: "Animal",
    image: "https://i.scdn.co/image/ab67616d00001e023e472bda1ef3d7744c06c2e5",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Sonu Nigam",
    album: "Kal ho naho",
    image: "https://i.scdn.co/image/ab67616d00001e02a2055e0b847ff66fb5206099",
    date: "2 weeks ago",
    time: 5.21,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Sonu Nigam",
    album: "TMain hoon Na",
    image: "https://i.scdn.co/image/ab67616d00001e02e7fa423de639247fed12be4a",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Sonu Nigam",
    album: "Dil ne yeh kaha hai",
    image: "https://i.scdn.co/image/ab67616d00001e02684ca32a3b75428e34af8667",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Sonu Nigam",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Sonu Nigam",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Sonu Nigam",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Sonu Nigam",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Sonu Nigam",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Sonu Nigam",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-black" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://us.v-cdn.net/6031544/uploads/editor/w6/j4l3irktk2s1.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playist</p>
                  <h1 className="text-5xl mt-0 mb-2" > songs you'll love</h1>
                  <p>Kick back to the best new and recent  hits.</p>
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

function Rahman() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);


  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://th.bing.com/th/id/OIP.TUyRXV8qCXsidbN39LVQuAAAAA?w=446&h=600&rs=1&pid=ImgDetMain",
        head: "A.R Rahman",
        para: "playlist.Spotify"
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
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 2,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 3,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 4,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 5,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 6,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  }, {
    id: 7,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 8,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 9,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  },
  {
    id: 10,
    artist: "A.R Rahman",
    album: "",
    image: "",
    date: "2 weeks ago",
    time: 3.55,
    music: ""
  }
  ]
  return (
    <>
      <div className="flex flex-row">
        <div className="w-1/5">
          <SideBar2 likedPlaylistDetails={likedPlaylistDetails} setLikedPlaylist={setLikedPlaylist} />
        </div>
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://th.bing.com/th/id/OIP.TUyRXV8qCXsidbN39LVQuAAAAA?w=446&h=600&rs=1&pid=ImgDetMain" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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


function Badshah() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://www.filmiforest.com/img/profile_image/badshah_334925261.jpg",
        head: "Badshah",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://www.filmiforest.com/img/profile_image/badshah_334925261.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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


function Arijith() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://th.bing.com/th/id/OIP.1ua7LB9OiPTfEhi6L8NevgHaHa?rs=1&pid=ImgDetMain",
        head: "Arijith",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://th.bing.com/th/id/OIP.1ua7LB9OiPTfEhi6L8NevgHaHa?rs=1&pid=ImgDetMain" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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

function Udith() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://th.bing.com/th/id/OIP.8OMsHH16zam5loWZrBu06gHaFj?rs=1&pid=ImgDetMain",
        head: "Badshah",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://th.bing.com/th/id/OIP.8OMsHH16zam5loWZrBu06gHaFj?rs=1&pid=ImgDetMain" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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

function Falguni() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://images.inuth.com/2017/09/Falguni-Pathak1-300x289.png",
        head: "Falguni pathak",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://images.inuth.com/2017/09/Falguni-Pathak1-300x289.png" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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

function Sujatha() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://edge.99images.com/photos/celebrities/sujatha/sujatha-hd-photos-download-1080p-whatsapp-dpstatus-images-rzug.jpg",
        head: "Sujatha",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://edge.99images.com/photos/celebrities/sujatha/sujatha-hd-photos-download-1080p-whatsapp-dpstatus-images-rzug.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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

function Shankar() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://images.indianexpress.com/2019/02/shankar-mahadevan-759.jpg",
        head: "Shankar  Mahadevan",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://images.indianexpress.com/2019/02/shankar-mahadevan-759.jpg" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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

function Anirudh() {
  const [isLike, setLike] = useState(false);
  const [likedPlaylistDetails, setLikedPlaylist] = useState(null);
  const handleLikeClick = () => {
    setLike((prevIsLike) => !prevIsLike);
    if (isLike) {
      const likedPlaylistDetails = {
        image: "https://th.bing.com/th/id/R.3bf3b83df05f5e14670c84c7d377a067?rik=b3tO%2fZag74CLmQ&riu=http%3a%2f%2fwww.radioandmusic.com%2fsites%2fwww.radioandmusic.com%2ffiles%2fimages%2fentertainment%2f2020%2f06%2f17%2fsl.jpg&ehk=3i1xxbgU6bBPkf7qZdiQHGU90hcC6mowZNdQkfo2%2bC4%3d&risl=&pid=ImgRaw&r=0",
        head: "Anirudh",
        para: "playlist.Spotify"
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
    artist: "Shreya ghoshal",
    album: "Guli matha",
    image: "https://i.scdn.co/image/ab67616d00001e02a7a285251f8615924c9cf287",
    date: "2 weeks ago",
    time: 3.55,
    music: "./coffee.mp3"
  },
  {
    id: 2,
    artist: "Shreya ghoshal",
    album: "Param sundhari",
    image: "https://i.scdn.co/image/ab67616d00001e021c7bfe8d9d66076ac648c4a1",
    date: "2 weeks ago",
    time: 3.32,
    music: "./rises.mp3"
  },
  {
    id: 3,
    artist: "Shreya ghoshal",
    album: "Tujh  mein rab diktha hain",
    image: "https://i.scdn.co/image/ab67616d00001e021555fec10000486f9331fbc8",
    date: "2 weeks ago",
    time: 3.32,
    music: "./here.mp3"
  },
  {
    id: 4,
    artist: "Shreya ghoshal",
    album: "tum kya mile",
    image: "https://i.scdn.co/image/ab67616d00001e02c2122318d63a1a5849c3a82d",
    date: "2 weeks ago",
    time: 3.32,
    music: "./monalisa.mp3"
  },
  {
    id: 5,
    artist: "Shreya ghoshal",
    album: "samjavan",
    image: "https://i.scdn.co/image/ab67616d00001e02d1f803cbe9c43700b4ea6895",
    date: "2 weeks ago",
    time: 3.32,
    music: "./inmymind.mp3"
  },
  {
    id: 6,
    artist: "Shreya ghoshal",
    album: "pal",
    image: "https://i.scdn.co/image/ab67616d00001e027611d2bfb8543b427f51efb6",
    date: "2 weeks ago",
    time: 3.32,
    music: "./pretty.mp3"
  }, {
    id: 7,
    artist: "Shreya ghoshal",
    album: "chikney chameli",
    image: "https://i.scdn.co/image/ab67616d00001e02b22e21de789378f223e1795f",
    date: "2 weeks ago",
    time: 3.32,
    music: "./feelu.mp3"
  },
  {
    id: 8,
    artist: "Shreya ghoshal",
    album: "kalapakkara",
    image: "https://i.scdn.co/image/ab67616d00001e0222ba5a29334eddd767c55bb0",
    date: "2 weeks ago",
    time: 3.32,
    music: "./dejavu.mp3"
  },
  {
    id: 9,
    artist: "Shreya ghoshal",
    album: "Hasi",
    image: "https://i.scdn.co/image/ab67616d00001e02b0f9ceb59927ab76fe6269be",
    date: "2 weeks ago",
    time: 3.32,
    music: "./yugotb.mp3"
  },
  {
    id: 10,
    artist: "Shreya ghoshal",
    album: "Teri Yaado mein",
    image: "https://i.scdn.co/image/ab67616d00001e021b79f578c973abf93d5d4dbc",
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
        <div className="w-4/5 ml-10 bg-one" style={{ overflowY: 'auto', maxHeight: '710px', display: "block" }}>
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
                <img src="https://th.bing.com/th/id/R.3bf3b83df05f5e14670c84c7d377a067?rik=b3tO%2fZag74CLmQ&riu=http%3a%2f%2fwww.radioandmusic.com%2fsites%2fwww.radioandmusic.com%2ffiles%2fimages%2fentertainment%2f2020%2f06%2f17%2fsl.jpg&ehk=3i1xxbgU6bBPkf7qZdiQHGU90hcC6mowZNdQkfo2%2bC4%3d&risl=&pid=ImgRaw&r=0" alt="" className="w-52 h-52 mx-3 rounded-lg" />
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
export { Shreya, Sonu, Rahman, Badshah, Arijith, Udith, Falguni, Sujatha, Shankar, Anirudh };