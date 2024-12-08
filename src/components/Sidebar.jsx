import { BiHomeAlt2 } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCompass } from "react-icons/bs";
import { PiFloppyDiskBackLight } from "react-icons/pi";
import { HiMenuAlt2 } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="flex flex-col justify-start items-center gap-24 border-r-2 border-[##DCDACD]">
      <div className="flex justify-center items-start">
        <span className="w-12 h-12 rounded-full flex justify-center items-center">
          <img src="/hand.png" alt="Hand" />
        </span>
      </div>

      <nav>
        <ul className="flex flex-col justify-start items-center gap-4">
          <li className="w-12 h-12 rounded-full bg-[#9876B5] text-white flex justify-center items-center">
            <a href="">
              <BiHomeAlt2 className="text-3xl" />
            </a>
          </li>

          <li className="w-12 h-12 rounded-full bg-transparent text-[#354051] flex justify-center items-center hover:bg-[#9876b51f]">
            <a href="">
              <BsJournalBookmark className="text-3xl" />
            </a>
          </li>
          <li className="w-12 h-12 rounded-full bg-transparent text-[#354051] flex justify-center items-center hover:bg-[#9876b51f]">
            <a href="">
              <BsCompass className="text-3xl" />
            </a>
          </li>
          <li className="w-12 h-12 rounded-full bg-transparent text-[#354051] flex justify-center items-center hover:bg-[#9876b51f]">
            <a href="">
              <PiFloppyDiskBackLight className="text-4xl" />
            </a>
          </li>
          <li className="w-12 h-12 rounded-full bg-transparent text-[#354051] flex justify-center items-center hover:bg-[#9876b51f]">
            <a href="">
              <IoSettingsOutline className="text-3xl" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center items-start">
        <span className="w-12 h-12 rounded-full bg-[#EAEDE9] text-[#354051] flex justify-center items-center">
          <HiMenuAlt2 className="text-3xl" />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
