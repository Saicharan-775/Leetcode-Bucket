import React from "react";
import { CheckCircle, ArrowRight, ClipboardList,ExternalLink,FolderSync } from "lucide-react";
import {Calendar} from 'lucide-react';
import Tags from "./Tags";
import Button from "../ui/button"
const ProblemCard = () => {
  // difficulty colors
//   { title, level, status, onSolve, onReview, onDone, onMove }
//   const levelColors = {
//     Easy: "bg-green-100 text-green-700",
//     Medium: "bg-yellow-100 text-yellow-700",
//     Hard: "bg-red-100 text-red-700",
//   };
//   const statuscolors={
//     Due:"#edb81e",
//     Pending:"#181a21",
//     Overdue:"#ba2e2e",
//   };

  return (
    
      <div className="bg-[#181a21] border border-[#3e4146] w-full max-w-[1400px] rounded-2xl mt-5  p-4">
      {/* ---------- Title + Level + Status ---------- */}
      <div className="flex items-center gap-4 mb-3">
        <h1 className="font-bold text-lg">Two Sum</h1>
        <span className="bg-green-800 text-white text-xs px-3 py-1 rounded-full">
          Easy
        </span>
        <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          Pending
        </span>
      </div>

      {/* ---------- Meta Info + Buttons ---------- */}
      <div className="flex justify-between items-center mb-3">
        {/* Left side */}
        <div className="flex gap-6 text-sm text-gray-300">
          <p className="flex items-center gap-1">
            <Calendar size={16} /> Last: 2 days ago
          </p>
          <p className="flex items-center gap-1">
            <Calendar size={16} /> Next: Tomorrow
          </p>
          <p className="flex items-center gap-1">Attempts: 2</p>
        </div>

        {/* Right side buttons */}
        <div className="flex gap-3">
          <Button name="Leetcode" icon={ExternalLink} />
          <Button name="Move To Strict" icon={FolderSync} />
        </div>
      </div>

      {/* ---------- Tags + Checkbox ---------- */}
      <div className="flex items-start gap-3 mb-3">
         {/* Big styled checkbox */}
  <input
    type="checkbox"
    className="w-6 h-6 rounded-md border-2 border-gray-500 cursor-pointer 
               checked:bg-green-500 checked:border-green-500 transition-all"
  />
        <div className="flex flex-wrap gap-2">
          <Tags tag="Array" />
          <Tags tag="Dynamic Programming" />
          <Tags tag="Binary Search" />
          <Tags tag="Binary Tree" />
        </div>
      </div>

      {/* ---------- Hint ---------- */}
      <div className="ml-1">
        <p className="text-sm text-gray-400">
          💡 Hint: Remember to use HashMap and manipulate sum
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;
