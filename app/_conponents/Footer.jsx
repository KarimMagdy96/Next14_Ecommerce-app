"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { Divide } from "lucide-react";
import { usePathname } from "next/navigation";
const Footer = () => {
  const path = usePathname();
  let { user } = useUser();
  return user ? (
    <div>footer</div>
  ) : (
    !path.includes(`/sign-up`) && !path.includes(`/sign-in`) && (
      <div>footer</div>
    )
  );
};

export default Footer;
