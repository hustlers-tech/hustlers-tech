"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WhatsappSticky() {

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [error, setError] = useState("");
  const [unread, setUnread] = useState(true);

  const phone = "9354040527";

  const handleOpen = () => {
    setOpen(!open);
    setUnread(false);
  };

  const nextStep = () => {

    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    setError("");
    setStep(2);
  };

  const startChat = () => {

    if (!service) {
      return;
    }

    const message =
      `Hi, I'm ${name}. I'm interested in ${service}. Can we discuss the project?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-24 right-6 w-[340px] z-50 
            rounded-2xl border border-black/10
            bg-white/10 backdrop-blur-xl
            shadow-2xl overflow-hidden"
          >


            <div className="bg-primary text-white p-4 flex justify-between items-center">

              <div className="flex gap-3 items-center">

                <Image
                  src={"/images/H_logo.jpeg"}
                  width={35}
                  height={35}
                  alt="logo_icon"
                  className="rounded-full"
                />

                <div>
                  <p className="font-semibold">Hustlers Tech Team</p>
                  <p className="text-xs opacity-80">
                    Typically replies in minutes
                  </p>
                </div>

              </div>


              <button
                onClick={() => setOpen(false)}
                className="text-white text-lg hover:opacity-80"
              >
                ✕
              </button>

            </div>


            <div className="p-5 space-y-4">

              {step === 1 && (
                <>
                  <p className="text-sm">
                    Hi 👋 What’s your name?
                  </p>

                  <input
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-white/80 text-black"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  {error && (
                    <p className="text-red-500 text-xs">{error}</p>
                  )}

                  <button
                    onClick={nextStep}
                    className="w-full bg-black text-white py-2 rounded-lg text-sm"
                  >
                    Continue
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="text-sm">
                    What service do you need?
                  </p>

                  <select
                    className="w-full border rounded-lg px-3 py-2 text-sm bg-neutral-900 text-white"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Select service</option>
                    <option>Website Development</option>
                    <option>Search Engine Optimization (SEO)</option>
                    <option>Social Media</option>
                    <option>Content Marketing</option>
                    <option>PPC (Paid Ads)</option>
                  </select>

                  <button
                    onClick={startChat}
                    className="w-full bg-green-500 text-white py-2 rounded-lg text-sm"
                  >
                    Chat on WhatsApp
                  </button>
                </>
              )}

            </div>

          </motion.div>
        )}

      </AnimatePresence>


      <div
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 cursor-pointer group"
      >

        <div
          className="relative flex items-center justify-center
          w-16 h-16 rounded-full
          bg-gradient-to-r from-green-400 to-green-600
          shadow-xl shadow-green-500/40
          transition-transform duration-300
          group-hover:scale-110"
        >

          <FaWhatsapp className="text-white text-3xl" />


          <span className="absolute w-full h-full rounded-full bg-green-500 opacity-30 animate-ping"></span>


          {unread && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
              1
            </span>
          )}

        </div>

      </div>
    </>
  );
}