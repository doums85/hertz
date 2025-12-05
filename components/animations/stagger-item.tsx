"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
}

export default function StaggerItem({
    children,
    className = "",
    ...props
}: StaggerItemProps) {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className} {...props}>
            {children}
        </motion.div>
    );
}
