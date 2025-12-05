"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface StaggerScaleItemProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
}

export default function StaggerScaleItem({
    children,
    className = "",
    ...props
}: StaggerScaleItemProps) {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div variants={itemVariants} className={className} {...props}>
            {children}
        </motion.div>
    );
}
