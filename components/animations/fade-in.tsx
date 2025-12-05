"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false,
    className = "",
    ...props
}: FadeInProps) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    };

    const initial = { opacity: 0, ...directions[direction] };

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay }}
            className={`${fullWidth ? "w-full" : ""} ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
}
