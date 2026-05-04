import { useEffect, useState } from "react"

export const isLargeScreen = (breakpoint: number = 768) => {
    const [isLarge, setIsLarge] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${breakpoint}px)`);
        setIsLarge(media.matches);
        const listener = (e: MediaQueryListEvent) => setIsLarge(e.matches);
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, [breakpoint]);
    return isLarge;
}