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
    const [volume, setVolume] = useState(1)
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

    if (audioRef.current !== null) {
        duration = audioRef.current.duration;
    } else {
        duration = 100
    }

    const handleSeek = (e) => {
        const newTime = e.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    }

    const changeVolume = () => {
        audioRef.current.volume = volume
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    const elapsedTime = formatTime(currentTime);
    const totalDuration = formatTime(duration);

    return (
        <div className="bottom-0 bg-[#21252D] fixed w-[100%] flex gap-2 flex-col">
            <input className="w-[100%]" type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} />
            <div className="flex justify-between mb-2 px-3">
                <div className="flex gap-2">
                    <img src={data.image} alt="songImage" />
                    <p className="text-white w-[50%]">{data.name}</p>
                </div>
                <audio src={data.link} ref={audioRef} onTimeUpdate={handleTimeUpdate} autoPlay ></audio>
                <button className="bg-[#FF0000] rounded-full w-[50px] h-[50px] flex items-center justify-center md:absolute md:right-[50%]" onClick={handlePlayPause}>
                    <img src={isPlaying ? "play.png" : "pause.png"} alt="play/pause" />
                </button>
                {/* Volume slider */}
                <div className="md:flex hidden justify-center items-center gap-4">
                    <div className="flex gap-1">
                        <p className="text-white">{elapsedTime}</p>
                        <p className="text-white">/</p>
                        <p className="text-white">{totalDuration}</p>
                    </div>
                    <div className='md:flex hidden justify-center items-center gap-4 py-2'>
                        <i className="fa-sharp fa-solid fa-volume-down fa-lg text-white"></i>
                        <input type="range" min="0" max="1" step="0.01" defaultValue={volume} className='progress' onChange={(e) => setVolume(parseFloat(e.target.value))} onInput={changeVolume} />
                        <i className="fa-sharp fa-solid fa-volume-up fa-lg text-white"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;