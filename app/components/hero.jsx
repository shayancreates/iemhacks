"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/">
        <Button className="text-black">Go home</Button>
      </Link>
    </div>
  );
};

export default HeroSection;
