import React, { useState, useRef, useEffect } from "react";
import { Playlist } from "../home/home2";
function RecentlyPlayedItem({ album, artist, image }) {
  return (
    <div className="col-span-1 bg-s-bg2 p-4 rounded-lg hover:bg-s-gray mb-4">
      <img src={image} alt="" className="w-full h-48 object-cover rounded-xl mb-2" />
      <h3 className="text-white">{album}</h3>
      <p className="text-gray-500">{artist}</p>
    </div>
  );
}

function Card({ id, artist, album, image, date, time, music }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayView, setShowPlayView] = useState(false);
  const audioRef = useRef(new Audio(music));
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setShowPlayView(true); 
    addToRecentlyPlayed({ album, artist, image });
  };

  const addToRecentlyPlayed = (song) => {
    const isAlreadyInList = recentlyPlayed.some(
      (playedSong) => playedSong.album === song.album && playedSong.artist === song.artist
    );
  
    if (!isAlreadyInList) {
      const updatedRecentlyPlayed = [song, ...recentlyPlayed.slice(1, 4)];
      setRecentlyPlayed(updatedRecentlyPlayed);
      localStorage.setItem('recentlyPlayed', JSON.stringify(updatedRecentlyPlayed));
    }
  };

  const getRecentlyPlayedFromLocalStorage = () => {
    const storedRecentlyPlayed = localStorage.getItem('recentlyPlayed');
    if (storedRecentlyPlayed) {
      setRecentlyPlayed(JSON.parse(storedRecentlyPlayed));
    }
  };

  useEffect(() => {
    getRecentlyPlayedFromLocalStorage();
  }, []);

  return (
    <>
      <tbody
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <tr
      className={`border-collapse ${isHovered ? "bg-gray-800" : "bg-transparent"} cursor-pointer`}
      onClick={handlePlayPause}
    >
        <td className="pl-4 sm:pl-8">
          <div onClick={handlePlayPause}>
            {isHovered ? (
              !isPlaying ? (
                <i className="bi bi-play-fill text-2xl"></i>
              ) : (
                <i className="bi bi-pause text-2xl"></i>
              )
            ) : (
              <span>{id}</span>
            )}
          </div>
        </td>

        <td className="md:pl-4 lg:pl-8 flex items-center">
          <img
            src={image}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mr-4 md:mr-8 rounded-lg"
            alt="Album Cover"
          />
          <div>
            <p className="font-bold text-base md:text-lg lg:text-xl mb-1">{album}</p>
            <span className="text-gray-500 block text-xs md:text-sm lg:text-base">
              {artist}
            </span>
          </div>
        </td>
        <td className="pl-2 md:pl-4 lg:pl-8 text-xs md:text-sm lg:text-base">{album}</td>
        <td className="px-2 md:px-4 lg:px-8 text-xs md:text-sm lg:text-base">{date}</td>
        <td className="px-2 md:px-4 lg:px-8 text-xs md:text-sm lg:text-base">{time}</td>
      </tr>
      <audio
        ref={audioRef}
        src={music}
        onEnded={() => {
          setShowPlayView(false);
        
        }}
      />
    </tbody>
   
    </>
  );
}

function Card2({ artist, album, image }) {
  return (
    <div className="flex">
      <img src={image} alt="" className="w-16 h-16" />
      <div>
        <h4 className="mt-0">{album}</h4>
        <p className="mt-0 mb-0">{artist}</p>
      </div>
      <button>
        add
      </button>
    </div>
    
  );
}

export { Card, Card2, RecentlyPlayedItem };