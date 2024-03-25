import React, { useState } from "react";
import { SideBar2 } from "../home/home";
import { Card2 } from "./card";

const Myplaylist = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

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
  },
  {
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

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = cardsData.filter((song) =>
      song.album.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  const handleAddToPlaylist = (song) => {
    setSelectedSongs([...selectedSongs, song]);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
          <SideBar2 />
        </div>
        <div className="w-full sm:w-4/5 ml-0 sm:ml-10">
          <div className="bg-transparent opacity-80 nav sticky w-full ">
            <div className="navbar-links flex items-center  ">
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
              <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>
              <div className="flex-grow"></div>
              <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
              <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
              <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
            </div>
            <div className="  flex flex-col " style={{ overflowY: 'auto', maxHeight: '620px', display: "block" }}>
              <div className="flex">
                <img src="https://th.bing.com/th/id/OIP.NApUIvhk7hrR_JLSoe-_vwAAAA?pid=ImgDet&w=192&h=192&c=7&dpr=1.3" alt="" className="w-52 h-52 mx-3 rounded-lg" />
                <div className="flex flex-col pl-5">
                  <p className="text-xl  mb-0">Playlist</p>
                  <h1 className="text-8xl mt-0 mb-2">My Playlist</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-s-bg2">
          <div className="bg-s-bg2 py-2 ">
            
            <ul>
              {selectedSongs.map((selectedSong, index) => (
                <li key={index} className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <img src={selectedSong.image} alt="" className="w-10 h-10 " />
                    <div className="ml-3">
                      <p className="font-bold mb-0 mt-0">{selectedSong.artist}</p>
                      <p className="mb-0 mt-0">{selectedSong.album}</p>
                    </div>
                  </div>
                
                </li>
              ))}
            </ul>
          </div>
            <h4>Let's Find Something For your Playlist</h4>
            <div className="bg-s-gray py-2 rounded-3xl mb-9">
              <i className="bi bi-search px-4"></i>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="what do you want to listen to?"
                className="bg-transparent border-transparent text-xl w-96 "
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            {searchQuery && filteredSongs.length > 0 && (
  <div>
    <table>
      <thead className="">
      </thead>
      <tbody>
        {filteredSongs.map((song, index) => (
          <tr key={index}>
            <td className="pl-8">{index + 1}</td>
            <td>{song.album}</td>
            <td className="pl-1">{song.album}</td>
            <td className="pl-6">{song.date}</td>
            <td className="pl-3">{song.time}</td>
            <td className="pl-3">
              <button onClick={() => handleAddToPlaylist(song)} className="text-black">
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
          </div>
          
          {/* Display selected songs */}
         
          
        </div>
      </div>
    </>
  );
};

export default Myplaylist;


  