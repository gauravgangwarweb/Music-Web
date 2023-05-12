import { setPlay } from "@/services/play";
import { Howl } from "howler";
import React, { use, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Player = () => {
    const dispatch = useDispatch()
    const audioRef = useRef(null);
    const data = useSelector((state) => state.id.audioLink)
    const isPlaying = useSelector((state) => state.play.play)
    console.log(isPlaying);
    const [currentTime, setCurrentTime] = useState(0);
    let duration = 0
    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        dispatch(setPlay(!isPlaying))
    }

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    }

    if (audioRef.current !== null){
        duration = audioRef.current.duration;
    }else {
        duration = 100
    }
    
    const handleSeek = (e) => {
        const newTime = e.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    }

    return (
        <div className="bottom-0 bg-[#21252D] fixed w-[100%] flex gap-2 flex-col">
            <input className="w-[100%]" type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} />
            <div className="flex justify-between mb-2 px-3">
                <div className="flex gap-2">
                    <img src={data.image} alt="songImage" />
                    <p className="text-white">{data.name}</p>
                </div>
                <audio src={data.link} ref={audioRef} onTimeUpdate={handleTimeUpdate} autoPlay ></audio>
                <button className="bg-[#FF0000] rounded-[100px] w-[50px] flex items-center justify-center" onClick={handlePlayPause}>
                    <img src={isPlaying ? "play.png" : "pause.png"} alt="play/pause" />
                </button>
                {/* <div className="hidden md:block"></div> */}
            </div>
        </div>
    )
}

export default Player;