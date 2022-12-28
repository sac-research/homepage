import NavBtn from "./NavBtn";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Image from "next/image";

import logo from "../public/sac-logo.png";

export default function Nav() {
  const router = useRouter();

  return (
    <div className="navbar bg-base-100 p-4 flex justify-evenly md:justify-between flex-wrap">
      <div className="flex space-x-2">
        <Image
          onClick={() => {
            router.push("/");
          }}
          src={logo}
          height={40}
          width={55}
          unoptimized={true}
        ></Image>
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl md:inline-flex hidden text-primary"
        >
          SAC Research Group
        </a>
      </div>
      <div className="flex flex-wrap justify-center mt-4 md:m-0 md:flex-nowrap space-x-2">
        <button className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            Themes & Projects
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content dropdown-right menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  router.push("/themes/applied-ml");
                }}
              >
                Applied ML
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/themes/xai");
                }}
              >
                XAI
              </a>
            </li>
          </ul>
        </button>
        <button
          onClick={() => {
            router.push("/events");
          }}
          className="btn btn-ghost"
        >
          Events
        </button>
        <button
          onClick={() => {
            router.push("/members");
          }}
          className="btn btn-ghost"
        >
          Members
        </button>

        <button className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            Archive
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content dropdown-right menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  router.push("/archive/projects");
                }}
              >
                Past Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/archive/publications");
                }}
              >
                Past Publications
              </a>
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
}
