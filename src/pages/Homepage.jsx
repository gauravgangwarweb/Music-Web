import SearchPage from "@/components/search";
import Songcard from "@/components/songcard";
import { useGetAllSongsQuery } from "@/services/songs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
    const hide = useSelector((state) => state.hide.hide)
    const [lang, setLang] = useState("punjabi")
    const { data, error, isLoading } = useGetAllSongsQuery(lang);
    
    return (
        <div className="flex">
            <div className="w-[20%] hidden md:flex flex-col text-white text-[22px]">
                <div className="mt-7 md:flex flex-col gap-5 ml-2">
                    <p className="text-[#34444D]">Browse</p>
                    <p>New Releases</p>
                    <p>Top Charts</p>
                    <p>Top Playlists</p>
                    <p>Podcasts</p>
                    <p>Top Artists</p>
                    <p>Radio</p>
                </div>
            </div>
            {/* --------Search---------  */}
            <div className={hide ? "block md:w-[90%] px-3 md:px-0 pt-5" : "hidden"}>
                <SearchPage />
            </div>
            {/* --------home---------  */}
            <div className={hide ? "hidden" : "block md:w-[90%] px-3 md:px-0 pt-5"}>
                <div className="w-[100%]">
                    <div className="w-[100%] flex justify-between items-center md:hidden">
                        <p className="text-[#34444D] text-[15px]">Browse</p>
                        <img src="down.png" alt="down" />
                    </div>
                </div>
                <p className="text-white text-[20px] italic hidden md:block mt-1">Trending Songs</p>
                <div className="md:mt-5 md:mb-8 flex text-white gap-3 mt-3">
                    <button onClick={() => setLang("punjabi")} className={lang == "punjabi" ? "rounded-[16px] bg-[#ff0000] px-2 py-2 text-[13px]" : "rounded-[16px] bg-[#21252D] px-2 py-2 text-[13px]"}>For You</button>
                    <button onClick={() => setLang("english")} className={lang == "english" ? "rounded-[16px] bg-[#ff0000] px-2 py-2 text-[13px]" : "rounded-[16px] bg-[#21252D] px-2 py-2 text-[13px]"}>English</button>
                    <button onClick={() => setLang("hindi")} className={lang == "hindi" ? "rounded-[16px] bg-[#ff0000] px-2 py-2 text-[13px]" : "rounded-[16px] bg-[#21252D] px-2 py-2 text-[13px]"}>Hindi</button>
                    <button onClick={() => setLang("marathi")} className={lang == "marathi" ? "rounded-[16px] bg-[#ff0000] px-2 py-2 text-[13px]" : "rounded-[16px] bg-[#21252D] px-2 py-2 text-[13px]"}>Marathi</button>
                    <button onClick={() => setLang("haryanvi")} className={lang == "haryanvi" ? "rounded-[16px] bg-[#ff0000] px-2 py-2 text-[13px]" : "rounded-[16px] bg-[#21252D] px-2 py-2 text-[13px]"}>Haryanvi</button>
                </div>
                {/* Songs list */}
                <div className="w-[100%] grid grid-cols-2 md:grid-cols-6 mt-10 md:mt-3 gap-6 gap-y-6 md:gap-0 md:gap-y-3 md:pr-2 md:mb-0 mb-28">
                    {error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (
                        data.data.trending.songs.map((song) => (
                            <Songcard key={song.id} song={song} />
                        ))
                        // console.log(data.data.trending.songs)
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Homepage;