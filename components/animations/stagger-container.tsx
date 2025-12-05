"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    stagger?: number;
    delay?: number;
    className?: string;
}

export default function StaggerContainer({
    children,
    stagger = 0.2,
    delay = 0,
    className = "",
    ...props
}: StaggerContainerProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
