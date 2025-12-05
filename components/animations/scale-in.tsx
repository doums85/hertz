"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export default function ScaleIn({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    ...props
}: ScaleInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
