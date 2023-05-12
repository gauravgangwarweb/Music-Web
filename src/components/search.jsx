import { useSearchSongQuery } from "@/services/songs";
import { useSelector } from "react-redux";
import Songcard from "./songcard";

const SearchPage = () => {
    const searchQuery = useSelector((state) => state.query.query)
    const { data, error, isLoading } = useSearchSongQuery(searchQuery);
    return (
        <div className="w-[100%]">
            {!data ?
                <p className="text-center text-white">Please search your song</p> :
                <div className="w-[100%] grid grid-cols-2 md:grid-cols-6 mt-10 md:mt-3 gap-6 gap-y-6 md:gap-0 md:gap-y-0 md:pr-2 md:mb-0 mb-28">
                    {error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (
                        data.data.results.map((song) => (
                            <Songcard key={song.id} song={song} />
                        ))
                    ) : null}
                </div>
            }
        </div>
    )
}

export default SearchPage;