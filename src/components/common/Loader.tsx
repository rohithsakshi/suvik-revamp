"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FCF9F5]">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="flex flex-col items-center gap-8"
            >
                <div className="relative">
                    <Image
                        src="/logo.png"
                        alt="Suvik Logo"
                        width={180}
                        height={50}
                        priority
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                    />
                    {/* subtle glow behind logo */}
                    <div className="absolute inset-0 bg-gold/5 blur-2xl rounded-full -z-10" />
                </div>

                {/* premium luxury loading line */}
                <div className="w-48 h-[1px] bg-charcoal/5 overflow-hidden">
                    <motion.div
                        className="h-full bg-gold-gradient"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    />
                </div>
                
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] font-bold tracking-[0.3em] uppercase text-charcoal/30"
                >
                    Excellence in Motion
                </motion.span>
            </motion.div>
        </div>
    );
}