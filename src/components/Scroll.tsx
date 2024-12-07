import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Imagen1 from "@/assets/SILESTONE-LOGO-big.webp"
import Imagen2 from "@/assets/Cosentino-Logo.png"
import Imagen3 from "@/assets/MSI-Logo.jpg"
import Imagen4 from "@/assets/cambria-logo-light_edited.webp"

const logos = [
    {
        name: "Silestone",
        img: Imagen1,
    },
    {
        name: "Cosentino",
        img: Imagen2,
    },
    {
        name: "MSI",
        img: Imagen3,
    },
    {
        name: "MSI",
        img: Imagen4
    }
]

const ReviewCard = ({
                        img,
                        name,
                        username,
                        body,
                    }: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[200px] w-[700px] flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {logos.map((data) => (
                    <img src={data.img} alt={data.name} className="mx-auto h-full w-3/4 cursor-pointer rounded-xl transition-all duration-300 hover:ring-1 hover:ring-neutral-300"/>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
