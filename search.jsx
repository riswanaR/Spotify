import React, { useState } from "react";
import { SideBar2 } from "../home/home";
import { Aesthetic1, Alone, Ariana, Chillhop, Deepvibes, Justchill, Lofichill, Nytmix, Sadlofi, Lofimix } from "./view1";


function Search() {
  const [searchValue, setSearchValue] = useState();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
          <SideBar2 />
        </div>
        <div className="w-full sm:w-4/5 ml-0 sm:ml-10">
          <div className="navbar-links flex items-center  ">
            <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full mr-2 text-4xl">chevron_left</span>
            <span className="material-symbols-outlined cursor-pointer bg-black text-gray-400 rounded-full text-4xl">chevron_right</span>
            <div className="bg-s-gray py-2 rounded-3xl">
              <i className="bi bi-search px-4"></i>
              <input
                type="search"
                name="search"
                id="search"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="what do you want to listen to?"
                className="bg-transparent border-transparent text-xl w-96"
              />
            </div>
            <div className="flex-grow"></div>
            <button className="bg-white px-6 py-2 rounded-3xl border-none mr-20 text-black">Explore Premium</button>
            <i className="bi bi-bell bg-s-gray rounded-full mr-10 text-2xl  px-3 py-2"></i>
            <i className="bi bi-person bg-s-gray rounded-full mr-10 text-2xl px-3 py-2"></i>
          </div>
          <div>
           
            <div className="bg-green flex-grow flex flex-col" style={{ overflowY: 'auto', maxHeight: '560px', display: 'block' }}>
            
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 ">
                </div>
              <div className="flex items-center justify-between mb-4 p-4">
                <h1 className="text-3xl font-bold text-white">Browse All</h1>
              </div>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 ">
                <div className="col-span-1 bg-pink-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Music</h3>
                  <img src="https://pbs.twimg.com/media/FfkNmKEXkAA1VHK.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-green-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Podcasts</h3>
                  <img src="https://th.bing.com/th/id/OIP.nkba223iTFeIRyAI2-JbPwAAAA?rs=1&pid=ImgDetMain" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-yellow-950 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Live Events</h3>
                  <img src="https://th.bing.com/th/id/OIP.Rlmrdd_4CzQNKKLlswa_7wHaFj?rs=1&pid=ImgDetMain" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-green-400 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Made for you</h3>
                  <img src="https://th.bing.com/th/id/OIP.6uj4wyxx3f5bklwawfttvQHaHa?rs=1&pid=ImgDetMain" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">New Releases</h3>
                  <img src="https://pbs.twimg.com/media/CwaZrY7UkAADbAj.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-orange-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Hindi</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003fbeeccdab429f7c9632d7bcf" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-pink-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Punjabi</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003e7c933f60f2b342d5f60bac0" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-gray-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Tamil</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003e6f3cdedcca447b9ac6079e6" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Telugu</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000039c4fe6cf523c9b2e94f45afd" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-gray-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">New Releases</h3>
                  <img src="https://th.bing.com/th/id/OIP.aFzyhJWmbYPVDEvTsoTJOwAAAA?rs=1&pid=ImgDetMain" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-gray-400 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Podcasts New Releases</h3>
                  <img src="https://www.zwillgen.com/wp-content/uploads/2020/05/FTC-Safeguard-Rule.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8 h-20" />
                </div>
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Video podcasts</h3>
                  <img src="https://th.bing.com/th/id/OIP.r3MPRJKFPmeKr1uJbsd2cAAAAA?rs=1&pid=ImgDetMain" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-gray-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Buissness & Technology</h3>
                  <img src="https://th.bing.com/th/id/OIP.5q--35x1QKt8SGtmtfP_QwHaEH?w=900&h=500&rs=1&pid=ImgDetMain" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-purple-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Charts</h3>
                  <img src="https://th.bing.com/th/id/OIP.1R9v3mxDLN2WBZqhxE622AHaHa?rs=1&pid=ImgDetMain" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-green-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Pop</h3>
                  <img src="https://th.bing.com/th/id/OIP.nhBdRUj-VjiXX2lryCjpSAHaHa?rs=1&pid=ImgDetMain" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-red-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Indie</h3>
                  <img src="https://lite-images-i.scdn.co/image/ab67706f00000002656abf133b339131d7db4cfa" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-purple-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Trending</h3>
                  <img src="https://andovar.com/static/spotify-bfd06beb5dfea1ccb0ea3113adb67c6b.webp" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8 h-20" />
                </div>
                <div className="col-span-1 bg-red-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Love</h3>
                  <img src="https://i.pinimg.com/originals/01/dd/04/01dd04f9f73892d8eeef7b47512ad665.png" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-purple-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Discover</h3>
                  <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/vWCJpZCbz0AxENOpPK4d6Rd5ySFN8MVCGbwMf-5f95go43gi8DrpwaHFwS3pKONbJwf06DsOGOv2ZjPVAi51CN2k_PnqMMLCB1uGYqKKONVu1gpxFfvHzqtjLyp39SMKewCT_IF4lKMCl4eXb6VZBlsctPwZQ_FyI8CR59gissrfPGAxP91swYGyVqtQ0ll20RLdvsMwhTLtS6TrIeWxMA==/NDU6MDU6MzBUMzEtMzAtMw==" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-pink-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Mood</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003bd0e19e810bb4b55ab164a95" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-gray-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Party</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003c8335fc37a50fc332d0a176a" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-orange-300 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Devotional</h3>
                  <img src="https://th.bing.com/th/id/OIP.Fm5Cc-CtduaMVJ5GEVaipgAAAA?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-yellow-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Decades</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000031439702c44c412a2db32b21e" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-purple-900 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Hip-Hop</h3>
                  <img src="https://images.genius.com/0989f1c07e67bfed76517118be3afbe6.640x640x1.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Dance / Electronic</h3>
                  <img src="https://th.bing.com/th/id/OIP.vFIDyjEDDcDTkdgCdkSU3wHaHa?rs=1&pid=ImgDetMain" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-purple-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Student</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000039d51d2720c019f4c2d3543db" alt="" className="w-20 image-rotate pl-24 pb-2 mt-14" />
                </div>
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Chill</h3>
                  <img src="https://th.bing.com/th/id/OIP.QQLK24jVmv2neP96YGj84gAAAA?w=152&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-14" />
                </div>
                <div className="col-span-1 bg-pink-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Gaming</h3>
                  <img src="https://th.bing.com/th/id/OIP.O7-CDzl1JefBx1n-AFaibgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20  image-rotate pl-24 pb-2 mt-14" />
                </div>
                <div className="col-span-1 bg-green-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">K-pop</h3>
                  <img src="https://www.matchfy.io/images/covers/sp_playlist_10.jpeg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-14" />
                </div>
                <div className="col-span-1 bg-gray-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Workout</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000039249b35f23fb596b6f006a15" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-14" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-orange-200 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Radar</h3>
                  <img src="https://newjams-images.scdn.co/v3/release-radar/ab6761610000e5eb8f074ec8c25406680bf26422/en/large" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Equal</h3>
                  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2022/03/equal-global-avril-lavigne-cover-768x768.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-pink-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Fresh Finds</h3>
                  <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2022/04/FF_4x5_Jhariah-819x1024.jpg" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-red-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Rock</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000032ab84c0690e5d764730a4866" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-900 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Sleep</h3>
                  <img src="https://th.bing.com/th/id/OIP.B19SFo27DvgPV9aqP1ndaQHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Indian Classical</h3>
                  <img src="https://th.bing.com/th/id/OIP.Bm8WhrVFwmSy4GlYKgTnvAAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-cyan-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Instrumental</h3>
                  <img src="https://th.bing.com/th/id/OIP.Tn99gB4XcqHCr0BEDziCIgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-gray-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Spotify Singles</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000038a8cd980c91cdb58bd61e3f3" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-gray-400 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">At Home</h3>
                  <img src="https://wallpapercave.com/wp/wp9403202.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-orange-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Country</h3>
                  <img src="https://th.bing.com/th/id/OIP.pWHz9Sf1p0FbPh3tymP8ZgHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">R&B</h3>
                  <img src="https://i.scdn.co/image/ab67616d0000b2733671ed64f4869e77b7742b77" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-red-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Metal</h3>
                  <img src="https://th.bing.com/th/id/OIP.Nq3yW1OvZOO3ZYwNClPQ9gHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-gray-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Jazz</h3>
                  <img src="https://i1.sndcdn.com/artworks-io2bbqGBL86m3TKO-XIq7xg-t500x500.jpg" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-orange-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Classical</h3>
                  <img src="https://th.bing.com/th/id/OIP.LcrKAJHMR7QJ_tZFtQO9zgHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Folk&Acoustic</h3>
                  <img src="https://th.bing.com/th/id/OIP.rO1QWVIvnRZh0UxxvOAvZAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-purple-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Focus</h3>
                  <img src="https://th.bing.com/th/id/OIP.3jWkyB0hKYrkdB2TlrVfVQAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Disney</h3>
                  <img src="https://th.bing.com/th/id/OIP.RQhuw_qc0UiO13aIC50qOgHaHa?rs=1&pid=ImgDetMain" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-pink-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Soul</h3>
                  <img src="https://th.bing.com/th/id/OIP.6Izo4BZNR-caTGDhBZRU0wHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-purple-400 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Kids&Family</h3>
                  <img src="https://th.bing.com/th/id/OIP.5QHBsgKmSQiS-GgI-IgVMAAAAA?rs=1&pid=ImgDetMain" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-pink-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Anime</h3>
                  <img src="https://th.bing.com/th/id/OIP.TvOL9db11Cihxl2wapp5pQAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-violet-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Tv & Movies</h3>
                  <img src="https://th.bing.com/th/id/OIP.mB44dARvV7Bbtay4JU3YWAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-blue-900 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Punk</h3>
                  <img src="https://th.bing.com/th/id/OIP.0Oz1A2OfjwzLyXMLsPttCwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-cyan-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Ambient</h3>
                  <img src="https://th.bing.com/th/id/OIP.XiHB8qziMmZWsH4ZqNyVuQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-orange-300 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Blues</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003d11176a8d83b608a41c1bb0c" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-orange-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Cooking & Dining</h3>
                  <img src="https://i.scdn.co/image/ab67706f000000027b519169dc9976168202ef83" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-orange-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Alternative</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003ee6d78b5f14d6ee7e27634e1" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-amber-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Wellness</h3>
                  <img src="https://th.bing.com/th/id/OIP.fse3VM8JvX2R75ra2s4zrgAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Travel</h3>
                  <img src="https://th.bing.com/th/id/OIP.u7Hi-l-ciSlQVlhMJntkigHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-blue-800 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Carribean</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000002cc908ecd3055dc630d370055" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-orange-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Afro</h3>
                  <img src="https://i1.sndcdn.com/artworks-000721795744-6z94wp-t500x500.jpg" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-red-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Songwriters</h3>
                  <img src="https://i.scdn.co/image/ab676d630000147586f7b07c289abd092e7130fc" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-blue-300 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Nature&Noise</h3>
                  <img src="https://i.scdn.co/image/ab67616d0000b2739e20fcc302067ae5df70e0a8" alt="" className="w-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-orange-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Funk&Disco</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003ba62681fb462198d54692b0f" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
                <div className="col-span-1 bg-green-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">League of Legends</h3>
                  <img src="https://i.scdn.co/image/ab67706f0000000389fcd1c4265e4dcc0c20a755" alt="" className="w-20 image-rotate pl-24 pb-2 mt-8" />
                </div>
                <div className="col-span-1 bg-cyan-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Summer</h3>
                  <img src="https://th.bing.com/th/id/OIP.hsrUkaHUlMNiiQfsqPF7ngAAAA?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-16" />
                </div>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-red-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Netflix</h3>
                  <img src="https://th.bing.com/th/id/OIP.yEq0FA4wiA8pjMZ25SOY2AAAAA?pid=ImgDet&w=192&h=192&c=7&dpr=1.3" alt="" className="w-20 image-rotate pl-24 pb-2 mt-24" />
                </div>
                <div className="col-span-1 bg-pink-700 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Asian Pacific Heritage Month</h3>
                  <img src="https://i.scdn.co/image/ab67706f00000003e7c933f60f2b342d5f60bac0" alt="" className="w-20 image-rotate pl-24  mt-8" />
                </div>
                <div className="col-span-1 bg-blue-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Glow</h3>
                  <img src="https://www.gaytimes.co.uk/wp-content/uploads/2023/01/Spotify-GLOW-590x370.jpg" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-24" />
                </div>
                <div className="col-span-1 bg-orange-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Music+Talk</h3>
                  <img src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO1Jwalj-large.jpg" alt="" className="w-20 image-rotate pl-24 pb-2 mt-24" />
                </div>
                <div className="col-span-1 bg-pink-500 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">Latin</h3>
                  <img src="https://th.bing.com/th/id/OIP.E80YfHVoQIqRIe9iY8BJ2AHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className="w-20 h-20 image-rotate pl-24 pb-2 mt-24" />
                </div>
              </div>

              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-10 mt-5">
                <div className="col-span-1 bg-orange-600 p-4 rounded-lg " onClick={() => navigate("/")}>
                  <h3 className="mb-0 pb-0 mt-0 text-2xl">TasteMakers</h3>
                  <img src="https://terraslatepaper.com/cdn/shop/products/10-mil-alcohol-ink-art-85-x-11-570559_800x.jpg?v=1674411782" alt="" className="w-20 h-20 image-rotate pl-20 pb-2 mt-8" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default Search;

