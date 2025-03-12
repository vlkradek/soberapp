"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function SoberComponent() {
    const [elapsed, setElapsed] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const startTime = dayjs("2025-03-11T23:00:00");
        const interval = setInterval(() => {
            const now = dayjs();
            const diffSeconds = now.diff(startTime, "second");
            setElapsed({
                hours: Math.floor(diffSeconds / 3600),
                minutes: Math.floor((diffSeconds % 3600) / 60),
                seconds: diffSeconds % 60,
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <p className="text-9xl">{`${elapsed.hours}h ${elapsed.minutes}m ${elapsed.seconds}s`}</p>
            <h1 className="text-3xl font-bold mb-4">
                Sober from kratom
            </h1>
        </main>
    );
}
