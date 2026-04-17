"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
}