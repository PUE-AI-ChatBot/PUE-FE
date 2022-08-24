import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

interface LayoutProps {
  logo?: boolean;
  back?: boolean;
  profile?: boolean;
  quickMenu?: boolean;
  title?: string;
  children: React.ReactNode;
}

export default function Layout({
  logo,
  back,
  title,
  profile,
  quickMenu,
  children,
}: LayoutProps) {
  // 뒤로가기 위한 router
  const router = useRouter();
  const onBackClick = () => {
    router.back();
  };
  // quick menu state
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pt-16">
      <nav className="flex justify-between fixed w-full top-0 p-4 bg-gray-300 shadow-md">
        {logo ? (
          <div className="flex items-center px-4 bg-white"> PUE </div>
        ) : null}
        {back ? (
          <button onClick={onBackClick}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}
        {title ? (
          <div className="mx-auto text-lg font-semibold">{title} </div>
        ) : null}
        {profile ? <div className="w-8 h-8 rounded-full bg-gray-600" /> : null}
      </nav>
      {children}
      {quickMenu ? (
        <div className="flex justify-center fixed w-full bottom-6 ">
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-20 h-20 rounded-full bg-black shadow-lg z-10"
          />
          {isMenuOpen ? (
            <div className="absolute -mt-14 w-72 h-24 bg-gray-600 opacity-30 z-0">
              <div className="flex justify-between px-6 pt-2">
                <button className="flex justify-center items-center w-16 h-10 rounded-md bg-white">
                  <Link href="/">
                    <a> Home </a>
                  </Link>
                </button>
                <button className="flex justify-center items-center w-16 h-10 rounded-md bg-white">
                  <Link href="/chat">
                    <a> Chat </a>
                  </Link>
                </button>
                <button className="flex justify-center items-center w-16 h-10 rounded-md bg-white">
                  <Link href="/calender">
                    <a> Calender </a>
                  </Link>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
