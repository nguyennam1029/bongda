import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import IconHome from "../icons/IconHome";
import IconSearch from "../icons/IconSearch";

const menuLinks = [
  {
    url: "/",
    title: <IconHome></IconHome>,
  },
  {
    url: "/moi",
    title: "MỚI NHẤT",
  },
  {
    url: "/chuyen-nhuong",
    title: "CHUYỂN NHƯỢNG",
  },
  {
    url: "/anh",
    title: "ANH",
    subMenu: [
      {
        name: "Premier League",
      },
      {
        name: "FA Cup",
      },
      {
        name: "AAFE CUP",
      },
    ],
  },
  {
    url: "/tbn",
    title: "TBN",
    subMenu: [
      {
        name: "LA LIGA",
      },
      {
        name: "TIN KHÁC",
      },
    ],
  },
  {
    url: "/y",
    title: "Ý",
    subMenu: [
      {
        name: "SERIE A",
      },
      {
        name: "TIN KHÁC",
      },
    ],
  },
  {
    url: "/contact",
    title: "ĐỨC",
    subMenu: [
      {
        name: "BUNDESLIGA",
      },
      {
        name: "TIN KHÁC",
      },
    ],
  },
  {
    url: "/",
    title: "PHÁP",
    subMenu: [
      {
        name: "LIGUE 1",
      },
      {
        name: "TIN KHÁC",
      },
    ],
  },
  {
    url: "/moi",
    title: "VIỆT NAM",
    subMenu: [
      {
        name: "CÁC ĐTQG",
      },
      {
        name: "V-LEAGUE",
      },
      {
        name: "CÚP QUỐC GIA",
      },
      {
        name: "HẠNG NHẤT",
      },
      {
        name: "GIẢI TRẺ",
      },
      {
        name: "BÓNG ĐÁ NỮ",
      },
    ],
  },
  {
    url: "/chuyen-nhuong",
    title: "CHAMPIONS LEAGUE",
    subMenu: [
      {
        name: "BUNDESLIGA",
      },
      {
        name: "TIN KHÁC",
      },
    ],
  },
  {
    url: "/anh",
    title: "HẬU TRƯỜNG",
  },
  {
    url: "/tbn",
    title: "PHOTO",
  },
  {
    url: "/y",
    title: "GÓC BẠN ĐỌC",
  },
  {
    url: "/contact",
    title: "KHÁC",
  },
  {
    url: "/",
    title: <IconSearch></IconSearch>,
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-primaryText">
        <div className="lg:w-[1280px] w-full flex items-center justify-between lg:px-0 px-1 h-[60px]">
          <button
            className="text-white focus:outline-none lg:hidden text-grayf1"
            onClick={toggleNavbar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <ul
            className={`
             
             lg:items-center lg:w-auto fixed top-0 left-0 h-full bg-gray-800 w-4/5 z-40  transform transition-transform duration-300 ease-in-out  bg-[#333333] text-grayf1 font-bold px-4 py-5 overflow-scroll`}
            style={{
              transform: isOpen ? "translateX(0)" : "translateX(-110%)",
            }}
          >
            <p
              onClick={toggleNavbar}
              className="absolute top-0 right-0 px-3 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>

            {menuLinks.map((item) => (
              <li
                className="py-2 mt-5 mr-3 border-b border-b-grayf6"
                key={item.title}
              >
                <NavLink
                  to={item.url}
                  className="text-white hover:text-gray-300"
                >
                  {item.title}
                </NavLink>

                {item.subMenu && (
                  <div className="w-full px-2 py-2 mt-2 rounded-md bg-grayf6 text-grayf1">
                    <div className="flex flex-col">
                      {item.subMenu &&
                        item.subMenu.map((item) => (
                          <NavLink
                            to="/"
                            key={item.name}
                            className="py-2 ml-1 text-sm uppercase border-b border-b-gray80"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link to="/">
            <img src="./logobongda.png" className="lg:w-[111px] w-[90px]" />
          </Link>
          <ul className="hidden lg:flex lg:items-center text-grayf1">
            {menuLinks.map((item) => (
              <li
                className=" relative group text-white font-bold hover:bg-[#e2e2e2] hover:transition-all hover:text-primaryText"
                key={item.title}
              >
                <NavLink
                  to={item.url}
                  className="block px-2 py-5 text-[15px] leading-[24px]"
                >
                  {item.title}
                </NavLink>
                {item.subMenu && (
                  <div className="my-element hidden group-hover:block absolute top-[61px] left-0 px-2 py-4 bg-[#e2e2e2] text-[#3e3333] w-40 ">
                    <div className="flex flex-col gap-3">
                      {item.subMenu &&
                        item.subMenu.map((item) => (
                          <NavLink
                            to="/"
                            key={item.name}
                            className="py-2 uppercase border-b border-b-gray80"
                          >
                            {item.name}
                          </NavLink>
                        ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <span className="block lg:hidden text-grayf1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
