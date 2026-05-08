import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-mesh opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-6xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="font-display text-6xl font-bold leading-tight md:text-8xl"
        >
          The Future of
          <span className="gradient-text"> Cinematic Workspaces</span>
        </motion.h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70 md:text-xl">
          Immersive productivity experience engineered for creators,
          developers, and futuristic teams.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="glow rounded-full bg-primary px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105">
            Launch Experience
          </button>

          <button className="glass rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:bg-white/10">
            Explore System
          </button>
}
