"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface BackgroundScaleProps extends HTMLMotionProps<"div"> {
    imageUrl: string;
}

export default function BackgroundScale({
    imageUrl,
    className = "",
    children,
    ...props
}: BackgroundScaleProps) {
    return (
        <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
            style={{
                backgroundImage: `url('${imageUrl}')`,
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
