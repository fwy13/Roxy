import { Outlet, useNavigate } from "react-router-dom";
import { BookText, Clapperboard, EllipsisVertical, Library, Puzzle, Search, User } from "lucide-react"
import { useContext } from "react";
import { NavigatorContext } from "../contexts/NavigatorContext";
import { AnimatePresence, motion } from "motion/react";

const Navigator = () => {
  const { isNavigator, setNavigator, isHidden } = useContext(NavigatorContext);
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#212121] text-gray-200 relative overflow-hidden">
      <AnimatePresence>
        <motion.div className={`z-[100] absolute top-0 w-full bg-[#424242] h-18 flex items-center px-2 justify-between border-b-1 border-gray-200 ${isHidden && "hidden"}`} initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, bounce: 0, type: "spring" }}>
          <div className="flex flex-col items-center w-full">
            <div className="p-2 rounded-2xl w-full bg-[#262626] flex items-center justify-between">
              <div className="outline-none py-1 px-2 w-[90%]">
                Search
              </div>
              <button className="active:bg-[#ffffff5a] p-2 rounded-full">
                <Puzzle className="size-5" />
              </button>
              <button className="active:bg-[#ffffff5a] p-2 rounded-full">
                <EllipsisVertical />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-20"><Outlet /></div>
      <AnimatePresence>
        <motion.div className={`absolute bottom-0 w-full bg-[#9575CD] h-18 flex items-center px-2 justify-between ${isHidden && "hidden"}`} initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, bounce: 0, type: "spring" }}>
          <div className="flex flex-col items-center" >
            <button className={`hover:bg-[#ffffff35] py-1 px-3 rounded-full ${isNavigator.anime && "bg-[#7c61ab]"}`} onClick={() => {
              setNavigator({
                anime: true,
                manga: false,
                library: false,
                profile: false,
                search: false
              });
              navigate("/anime");
            }}>
              <Clapperboard className="size-7" />
            </button>
            <h1 className="font-lato">Anime</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className={`hover:bg-[#ffffff35] py-1 px-3 rounded-full ${isNavigator.manga && "bg-[#7c61ab]"}`} onClick={() => {
              setNavigator({
                anime: false,
                manga: true,
                library: false,
                profile: false,
                search: false
              });
              navigate("/manga");
            }}>
              <BookText className="size-7" />
            </button>
            <h1 className="font-lato">Manga</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className={`hover:bg-[#ffffff35] py-1 px-3 rounded-full ${isNavigator.search && "bg-[#7c61ab]"}`} onClick={() => {
              setNavigator({
                anime: false,
                manga: false,
                library: false,
                profile: false,
                search: true
              });
              navigate("/search");
            }}>
              <Search className="size-7" />
            </button>
            <h1 className="font-lato">Search</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className={`hover:bg-[#ffffff35] py-1 px-3 rounded-full ${isNavigator.library && "bg-[#7c61ab]"}`} onClick={() => {
              setNavigator({
                anime: false,
                manga: false,
                library: true,
                profile: false,
                search: false
              });
              navigate("/library");
            }}>
              <Library className="size-7" />
            </button>
            <h1 className="font-lato">Library</h1>
          </div>
          <div className="flex flex-col items-center">
            <button className={`hover:bg-[#ffffff35] py-1 px-3 rounded-full ${isNavigator.profile && "bg-[#7c61ab]"}`} onClick={() => {
              setNavigator({
                anime: false,
                manga: false,
                library: false,
                profile: true,
                search: false
              });
              navigate("/profile");
            }}>
              <User className="size-7" />
            </button>
            <h1 className="font-lato">Profile</h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
export default Navigator;