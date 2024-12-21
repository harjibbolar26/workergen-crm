import {
  CircleHelp,
  Grip,
  Lightbulb,
  Plus,
  Settings,
  UserCog,
} from "lucide-react";
import React from "react";

const Topnav = () => {
  return (
    <div className="bg-[#020817] w-full p-2 flex justify-between items-center text-white z-[10000]">
      <div className="flex gap-2 items-center">
        <Grip size={20}/>
        <p className="text-xs">í
          Dynamics 365 <span>|</span> <span className="font-normal text-[10px]">Sales hub</span>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Lightbulb size={20} />
        <Plus size={20} />
        <Settings size={20} />
        <CircleHelp size={20} />
        <UserCog size={20} />í
      </div>
    </div>
  );
};

export default Topnav;
