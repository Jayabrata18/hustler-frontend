"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    HeroHighlight
    //  Highlight
} from "../../../../components/ui/hero-highlight";

const ChatPage = () => {
    return (
        <div>
            ChatPage
            <HeroHighlight className="flex flex-col  justify-start px-2">
                <div className="flex  justify-start px-2 top-2 gap-4">close</div>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0]
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1]
                    }}
                    // className="text-2xl px-1 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto align-top "
                    className="flex flex-col justify-start px-2 gap-4 md:gap-8"
                >
                    {/* <Highlight className="text-black dark:text-white align-top">copy, of a copy, of a copy.</Highlight> */}
                    <div>fjyf</div>
                </motion.h1>
            </HeroHighlight>
        </div>
    );
};

export default ChatPage;
