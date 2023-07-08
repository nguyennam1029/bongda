import React from "react";

const Pagination = () => {
  return (
    <ul className="flex items-center justify-center gap-2 mt-5">
      <li className="px-4 py-1 font-medium bg-white border rounded-sm text-primaryText border-borderD">
        1
      </li>
      <li className="px-4 py-1 text-base   font-medium cursor-pointer bg-[#f3f3f3] border rounded-sm text-[#777] hover:text-primaryText border-[#d9d9d9]">
        2
      </li>
      <li className="px-4 py-1 text-base  hover:text-primaryText font-medium cursor-pointer bg-[#f3f3f3] border rounded-sm text-[#777] border-[#d9d9d9]">
        3
      </li>
      <li className="px-4 py-1 text-base  hover:text-primaryText font-medium cursor-pointer bg-[#f3f3f3] border rounded-sm text-[#777] border-[#d9d9d9]">
        4
      </li>
      <li className="px-4 py-1 text-base  hover:text-primaryText font-medium cursor-pointer bg-[#f3f3f3] border rounded-sm text-[#777] border-[#d9d9d9]">
        5
      </li>
      <li className="px-4 py-1 text-base  hover:text-primaryText font-medium cursor-pointer bg-[#f3f3f3] border rounded-sm text-[#777] border-[#d9d9d9]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </li>
    </ul>
  );
};

export default Pagination;
