import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image1 from "@/assets/pros-y-contras-de-poner-un-suelo-de-marmol-en-la-cocina_05a1b954_231222154431_1280x794.jpg"

export function Video() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="left-in-right-out"
                videoSrc="https://www.youtube.com/embed/_v1iDtS2E7w"
                thumbnailSrc={Image1}
                thumbnailAlt="Video marmol"
            />
        </div>
    );
}
