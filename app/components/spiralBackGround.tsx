import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export function SpiralRing() {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    // Generate spiral ring segments
    const segments = 24
    const rings = Array.from(
        {
            length: segments,
        },
        (_, i) => {
            const rotation = (i * 360) / segments
            const scale = 1 + i * 0.08
            const delay = i * 0.03
            return {
                rotation,
                scale,
                delay,
            }
        },
    )
    return (
        <div className="h-full w-full flex items-center justify-center p-8 overflow-hidden">
            <div className="relative ">
                {/* Spiral ring segments */}
                {rings.map((ring, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            transform: `rotate(${ring.rotation}deg) scale(${ring.scale})`,
                            opacity: isLoaded ? 0.6 - i * 0.02 : 0,
                            transition: `all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${ring.delay}s`,
                        }}
                    >
                        <div
                            className="w-2 h-2  rounded-full blur-[1px]"
                            style={{
                                transform: `translateY(-${120 + i * 8}px)`,
                            }}
                        />
                    </div>
                ))}

                {/* Outer glow rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className={`rounded  "bg-white/5" `}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 2 * 0.1,
                            repeat: Infinity,       // repeat forever
                            repeatType: "reverse",  // alternate back and forth (like yoyo)
                        }}
                    >
                        <div
                            className="w-[450px] h-[450px] rounded-full border-2 border-pink-500/20 animate-pulse"
                            style={{
                                animationDuration: '2.5s',
                                animationDelay: '0.5s',
                            }}
                        />

                    </motion.div>

                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className={`rounded  "bg-white/5" `}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 4 * 0.1,
                            repeat: Infinity,       // repeat forever
                            repeatType: "reverse",  // alternate back and forth (like yoyo)
                        }}
                    >
                        <div
                            className="w-[350px] h-[350px] rounded-full border-2 border-pink-500/20 animate-pulse"
                            style={{
                                animationDuration: '2.5s',
                                animationDelay: '0.5s',
                            }}
                        />

                    </motion.div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className={`rounded  "bg-white/5" `}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 6 * 0.1,
                            repeat: Infinity,       // repeat forever
                            repeatType: "reverse",  // alternate back and forth (like yoyo)
                        }}
                    >
                        <div
                            className="w-[250px] h-[250px] rounded-full border-2 border-pink-500/20 animate-pulse"
                            style={{
                                animationDuration: '2.5s',
                                animationDelay: '0.5s',
                            }}
                        />

                    </motion.div>
                </div>

                {/* Center image container */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        transform: isLoaded
                            ? 'scale(1) rotate(0deg)'
                            : 'scale(0.5) rotate(-180deg)',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
                    }}
                >
                    <div className="relative group">
                        {/* Image glow effect */}
                        <div className="absolute inset-0  rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 shadow-[0_0_35px_10px_rgba(0,200,255,0.7)]" />

                        {/* Image */}
                        <div className="relative w-40 h-40 rounded-2xl overflow-hidden ">
                            <img
                                src="/logo.png"
                                alt="Spiral center"
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Overlay gradient */}
                            {/* <div className="absolute inset-0 " /> */}
                        </div>

                        {/* Rotating ring around image */}
                        {/* <div
                            className="absolute inset-0 flex items-center justify-center animate-spin"
                            style={{
                                animationDuration: '20s',
                            }}
                        >
                            <div className="w-50 h-50 rounded-full border-2 border-dashed border-purple-400/30" />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpiralRing