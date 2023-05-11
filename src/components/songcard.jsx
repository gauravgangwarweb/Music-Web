import { setId } from "@/services/id";
import { setPlay } from "@/services/play";
import { useSongDetailsQuery } from "@/services/songs";
import { useDispatch } from "react-redux";

const Songcard = (props) => {
    const dispatch = useDispatch()
    const { error, data, isLoading } = useSongDetailsQuery(props.song.id);
    let dataT = {}
    
    if(!error && !isLoading){
        dataT = {
            link: data.data[0].downloadUrl[4].link,
            image: data.data[0].image[0].link,
            name: data.data[0].name
        }
    }

    return (
        <div onClick={() => {dispatch(setId(dataT)); dispatch(setPlay(true))}} className="text-white flex flex-col gap-2 mb-2 container md:w-[80%] ">
            <img className="image w-[100%] rounded-md" src={props.song.image[2].link} alt="song-image" />
            <p className="absolute middle text-white">{props.song.name}</p>
        </div>
    );
}

export default Songcard;