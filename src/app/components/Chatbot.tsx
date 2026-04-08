"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WHATSAPP_NUMBER = "9354040527";

const SERVICES = [
  "Web Development",
  "SEO",
  "Social Media Marketing",
  "PPC (Paid Ads)",
  "Graphic Design",
  "Content Marketing",
];

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  options?: string[];
};

type Step = "greeting" | "ask-name" | "ask-service" | "confirm" | "done";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("greeting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  let msgId = useRef(0);

  const nextId = () => ++msgId.current;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), text, sender: "bot", options },
      ]);
    }, 800);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: nextId(), text, sender: "user" }]);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: nextId(),
            text: "Hey there! 👋 Welcome to Hustlers Tech. I'm here to help you get started.",
            sender: "bot",
          },
        ]);
        setTimeout(() => {
          addBotMessage("What's your name?");
          setStep("ask-name");
        }, 1000);
      }, 400);
    }
  };

  const handleSendName = () => {
    const name = input.trim();
    if (!name) return;
    addUserMessage(name);
    setUserName(name);
    setInput("");
    setTimeout(() => {
      addBotMessage(
        `Nice to meet you, ${name}! Which service are you interested in?`,
        SERVICES,
      );
      setStep("ask-service");
    }, 300);
  };

  const handleSelectService = (service: string) => {
    addUserMessage(service);
    setSelectedService(service);
    setTimeout(() => {
      addBotMessage(
        `Great choice! I'll connect you with our ${service} team on WhatsApp. Click the button below to start chatting!`,
      );
      setStep("confirm");
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            text: "__whatsapp_button__",
            sender: "bot",
          },
        ]);
      }, 900);
    }, 300);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm ${userName}. I'm interested in your ${selectedService} service. Can we discuss further?`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendName();
  };

  const resetChat = () => {
    setMessages([]);
    setStep("greeting");
    setUserName("");
    setSelectedService("");
    setInput("");
    msgId.current = 0;
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45]"
          />
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-colors text-white"
        style={{ backgroundColor: "#2596be" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {!isOpen && (
        <span
          className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full animate-ping pointer-events-none"
          style={{ backgroundColor: "rgba(37, 150, 190, 0.3)" }}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 right-0 sm:bottom-24 sm:right-6 z-50 flex flex-col overflow-hidden bg-[#111] border border-white/10 shadow-2xl w-full sm:w-[360px] sm:rounded-2xl rounded-t-[1.5rem]"
            style={{ height: "520px" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center font-bold text-white text-xs">
                  <Image
                    src={"/images/H_logo.jpeg"}
                    width={35}
                    height={35}
                    alt="logo_icon"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Hustlers Tech
                  </h3>
                  <p className="text-[10px] text-emerald-500 font-medium tracking-wide">
                    Usually replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={resetChat}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-[#0d0d0d]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[85%] space-y-2">
                    {msg.text === "__whatsapp_button__" ? (
                      <motion.button
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        onClick={openWhatsApp}
                        className="flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#20BD5A] transition-colors shadow-lg"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="currentColor"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                      </motion.button>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                          msg.sender === "user"
                            ? "bg-[#1b6f8c] text-white rounded-tr-none"
                            : "bg-[#222] text-zinc-300 rounded-tl-none border border-white/5"
                        }`}
                      >
                        {msg.text}
                      </motion.div>
                    )}

                    {msg.options && step === "ask-service" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 pt-1"
                      >
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSelectService(opt)}
                            className="rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:bg-[#2596be] hover:text-white"
                            style={{
                              borderColor: "rgba(37, 150, 190, 0.4)",
                              backgroundColor: "rgba(37, 150, 190, 0.1)",
                              color: "#2596be",
                            }}
                          >
                            {opt}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-none bg-[#222] border border-white/5 px-4 py-3 flex gap-1">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {step === "ask-name" && (
              <div className="border-t border-white/5 px-4 py-4 flex gap-2 bg-[#1a1a1a]">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your name..."
                  className="flex-1 rounded-xl bg-[#222] border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#2596be] transition-colors"
                />
                <button
                  onClick={handleSendName}
                  disabled={!input.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white disabled:opacity-40 transition-colors shadow-lg"
                  style={{ backgroundColor: "#2596be" }}
                >
                  <Send size={18} />
                </button>
              </div>
            )}

            {(step === "confirm" || step === "done") && (
              <div className="border-t border-white/5 px-4 py-4 text-center bg-[#1a1a1a]">
                <div className="flex items-center justify-center gap-1.5 opacity-30">
                  <ShieldCheck size={12} className="text-white" />
                  <span className="text-[10px] text-white font-bold tracking-widest uppercase">
                    Safe & Secure Session
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ShieldCheck = ({
  size,
  className,
}: {
  size: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Chatbot;
