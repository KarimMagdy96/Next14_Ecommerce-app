"use client";
import React, { use, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import MyCart from "./MyCart";
import { CartContext } from "../_context/CartContext";
import cartApi from "../_utils/cartApi";
const Header = () => {
  let [opencart, setOpencart] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const path = usePathname();
  let { user } = useUser();
  useEffect(() => {
    user && getCrtItems();
  }, [user]);

  const getCrtItems = () => {
    cartApi
      .getUserCartItem(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log(res.data.data);
        res.data.data.forEach((item) => {
          setCart((prev) => {
            return [
              ...prev,
              {
                id: item.id,
                product: item?.attributes?.prodacts?.data[0],
              },
            ];
          });
        });
      });
  };
  return user ? (
    <>
      <header className="bg-white">
        <div className="mx-auto flex  h-16 max-w-full items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
          <Image alt="Logo" src="/logo.svg" width={50} height={50} />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Explore{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href="#"
                  >
                    Login
                  </a>

                  <a
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              ) : (
                <div className=" flex items-center gap-5 ">
                  <h2 className=" flex items-center gap-1">
                    <ShoppingCart
                      onClick={() => {
                        setOpencart(!opencart);
                      }}
                    />
                    ({cart?.length})
                  </h2>
                  <UserButton redirectUrl="/" />
                  <div>{opencart && <MyCart />}</div>
                </div>
              )}

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  ) : (
    !path.includes(`/sign-up`) && !path.includes(`/sign-in`) && (
      <>
        <header className="bg-white">
          <div className="mx-auto flex  h-16 max-w-full items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
            <Image alt="Logo" src="/logo.svg" width={50} height={50} />

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Explore{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                {!user ? (
                  <div className="sm:flex sm:gap-4">
                    <Link
                      className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                      href="/sign-in"
                    >
                      Login
                    </Link>

                    <Link
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                      href="/sign-up"
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div>
                    <UserButton redirectUrl="/" />
                  </div>
                )}

                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  );
};

export default Header;
