"use client";
import Link from "next/link";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import InteractiveHoverButton from "@/components/ui/InteractiveButton";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <div className="absolute md:-top-[106.25%] -top-[136.25%] md:-right-[12.5%] -right-[50.5%] h-[175vh] w-auto -z-0 overflow-hidden">
        <video
          className="h-full w-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/clock.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Logo and Header Section */}
      <header className="flex justify-between items-start z-0 p-8">
        <div className="border border-white p-4">
          <Image
            src="/logo.png"
            alt="DevDot Community"
            width={100}
            height={100}
          />
        </div>
        {/* <Button variant={"secondary"}></Button> */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center z-0 px-8">
        <p className="text-xl mb-4">
          Making epic things happen,{" "}
          <span className="text-[#ffc600]">together.</span>
        </p>
        <h2 className="text-6xl sm:text-8xl font-light tracking-wider">
          COMING
          <br />
          SOON
        </h2>
        <InteractiveHoverButton
          className="mt-8"
          text="Join Us"
          onClick={() => setShowDialog(true)}
        />
      </main>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between z-0 items-center p-8 gap-4 sm:gap-0">
        <div className="flex gap-6">
          <Link
            href="https://www.instagram.com/DevDotCommunity"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://x.com/DevDotCommunity"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://chat.whatsapp.com/ELloC2X2oPvIMWqTb1cvVo"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link
            href="https://www.linkedin.com/company/devdotcom"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://medium.com/devdotcom"
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <BsMedium className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="sr-only">Medium</span>
          </Link>
        </div>
        <div className="text-xs sm:text-sm opacity-70 text-center sm:text-left">
          © 2024 DevDotCom | All Rights Reserved
        </div>
      </footer>

      {/* Social Links Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-zinc-900 md:w-auto max-w-[22rem] rounded-xl text-white border border-zinc-800">
          <DialogHeader>
            <DialogTitle className="text-white">Connect with Us</DialogTitle>
            <DialogDescription className="text-zinc-400">
              Follow us on our social platforms to stay updated with the latest
              news, events, and more.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-6">
            <Link
              href="https://www.instagram.com/DevDotCommunity"
              target="_blank"
              className="hover:opacity-70 transition-opacity text-white"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://x.com/DevDotCommunity"
              target="_blank"
              className="hover:opacity-70 transition-opacity text-white"
            >
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://chat.whatsapp.com/ELloC2X2oPvIMWqTb1cvVo"
              target="_blank"
              className="hover:opacity-70 transition-opacity text-white"
            >
              <FaWhatsapp className="w-6 h-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/devdotcom"
              target="_blank"
              className="hover:opacity-70 transition-opacity text-white"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://medium.com/devdotcom"
              target="_blank"
              className="hover:opacity-70 transition-opacity text-white"
            >
              <BsMedium className="w-6 h-6" />
              <span className="sr-only">Medium</span>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
