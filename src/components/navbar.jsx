import { setHide } from "@/services/hide";
import { setQuery } from "@/services/query";
import { useDispatch } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch()
    return(
        <nav className="w-[100%] flex md:px-8 px-2 justify-between md:py-3 pb-2 md:pb-2 items-center bg-[#21252D]">
            <div className="flex flex-col md:flex-row md:gap-10 gap-2 md:items-center md:w-[70%] w-[100%]">
                <div className="flex">
                    <img className="md:hidden" src="Sort.png" alt="hamburger" />
                    <img src="logo.png" alt="logo" onClick={() => dispatch(setHide(false))} />
                </div>
                <div className="flex border-[2px] border-[#3D464D] md:w-[70%] w-[100%] rounded-md" onClick={() => dispatch(setHide(true))}>
                    <input type="text" className="bg-[#151A1F] text-[#34444D] pl-4 py-2 w-[96%] rounded-md" placeholder="Search Songs, artists & albums you like" onKeyUp={(e) => dispatch(setQuery(e.target.value))} />
                    <button className="bg-[#3D464D] w-10 flex justify-center items-center">
                        <img src="Search.png"  alt="search" />
                    </button>
                </div>
            </div>
            <button className="text-white hidden md:block">SIGN IN</button>
        </nav>
    )
}

export default Navbar;