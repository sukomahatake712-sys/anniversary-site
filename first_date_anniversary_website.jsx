import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Play, Pause } from "lucide-react";

export default function AnniversaryWebsite() {
  const [step, setStep] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const messages = [
    "5th March 2025 ✨",
    "Belgium Waffle — where 30 minutes changed my world.",
    "You with your Blueberry Shake 🫐",
    "Me with my KitKat Shake 🍫",
    "The first time I held your hand 🤍",
    "And even after that short date...",
    "Distance came between us, but never our hearts.",
    "Tejaswi, my Cherie, my lady... this is for you."
  ];

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">A Story From 5th March 2025</h1>
          <p className="text-lg text-gray-300">Tap below and relive our first date ✨</p>
          <Button
            onClick={() => setStarted(true)}
            className="rounded-2xl px-8 py-3 text-lg bg-white text-black hover:bg-gray-200"
          >
            Enter Our Memory ❤️
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-rose-950 to-black flex flex-col items-center justify-center p-6 text-center relative overflow-hidden text-white">
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 0.6 }}
          transition={{ duration: 10 + i, repeat: Infinity, delay: i }}
          className="absolute text-rose-500 text-xl"
          style={{ left: `${Math.random() * 100}%` }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/Everlasting_Bloom.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Control */}
      <div className="absolute top-6 right-6">
        <Button onClick={toggleMusic} className="rounded-full p-3">
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </Button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-rose-400"
      >
        Happy First Date Anniversary, Cherie ❤️
      </motion.h1>

      <Card className="w-full max-w-2xl shadow-2xl rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
        <CardContent className="p-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl min-h-[100px]"
            >
              {messages[step]}
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-4">
            {step < messages.length - 1 ? (
              <Button
                onClick={() => setStep(step + 1)}
                className="rounded-2xl px-6 py-2 text-lg bg-rose-500 hover:bg-rose-600"
              >
                Continue 💞
              </Button>
            ) : (
              <Button
                onClick={() => setShowLetter(true)}
                className="rounded-2xl px-6 py-2 text-lg bg-white text-black hover:bg-gray-200"
              >
                Open Love Letter 💌
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Love Letter Modal */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black max-w-2xl p-10 rounded-2xl shadow-2xl space-y-6"
            >
              <h2 className="text-3xl font-bold text-center">To My Lady, Tejaswi ❤️</h2>
              <p className="text-lg leading-relaxed">
                5th March 2025 was only 30 minutes long… but it gave me a lifetime of memories.
                The way you smiled across the table at Belgium Waffle,
                the way our hands met for the first time,
                the way everything felt calm and right.
              </p>
              <p className="text-lg leading-relaxed">
                Today we may be in a long distance relationship,
                but distance has never been strong enough to weaken what I felt that day.
                If I could relive one moment again and again,
                it would be that first time I held your hand.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                I chose you that day. I still choose you today.
                And I will keep choosing you.
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={() => setShowLetter(false)}
                  className="rounded-2xl px-6 py-2 bg-black text-white hover:bg-gray-800"
                >
                  Close ❤️
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-10 text-sm text-gray-400">
        Forever yours | 05.03.2025 ✨
      </p>
    </div>
  );
}
