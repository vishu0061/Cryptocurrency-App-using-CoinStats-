import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-20 -left-20 lg:w-[30rem] lg:h-[30rem]"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-20 -right-20 lg:w-[30rem] lg:h-[30rem]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20 max-w-[1440px] 2xl:max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            Welcome to Xcrypto
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl max-w-2xl lg:max-w-4xl mx-auto">
            Your gateway to the future of digital currency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left side - Animated coin */}
          <motion.div
            className="relative"
            animate={{
              translateY: ["0px", "20px"],
              rotateZ: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:px-12"
            >
              <img
                className="w-full max-w-lg lg:max-w-2xl mx-auto filter hover:grayscale-0 transition-all duration-500 hover:scale-105"
                src="https://stonexbullion.com/product/image/1NU03/1-oz-gold-coin-bitcoin-1.webp"
                alt="Bitcoin"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:space-y-10"
          >
            {[
              "Real-time Crypto Tracking",
              "Advanced Trading Tools",
              "Secure Transactions",
              "24/7 Market Updates"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 p-6 lg:p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl lg:text-2xl text-yellow-400 font-semibold mb-2 lg:mb-3">{feature}</h3>
                <p className="text-gray-400 lg:text-lg">Experience the power of cryptocurrency with our advanced platform.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
