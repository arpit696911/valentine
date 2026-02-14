"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showFinal, setShowFinal] = useState(false);

  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex flex-col items-center justify-center text-center p-6">

      {!showFinal ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-rose-700 mb-4"
          >
            Happy Valentine’s Kanika❤️
            Im Sorry for yesterday Love.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-700 mb-8"
          >
             It’s our little digital memory lane.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowFinal(true)}
            className="bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Click For Surprise 
          </motion.button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-5xl"
        >
          <h2 className="text-4xl font-semibold text-rose-700 mb-8">
            Our Beautiful Moments 💕
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {photos.map((src, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt="memory"
                  width={400}
                  height={400}
                  className="object-cover w-full h-72"
                />
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl text-rose-600">
            I choose you. Today. Tomorrow. Always. 
          </h3>
        </motion.div>
      )}
    </div>
  );
}
