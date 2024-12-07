import './App.css'
import "tailwindcss/tailwind.css";
import Toast from "@/components/Toast.tsx";
import { Toaster } from "@/components/ui/toaster"
import Carrusel from "@/components/Carousel.tsx";
import {MarqueeDemo} from "@/components/Scroll.tsx";
import {Video} from "@/components/Video.tsx";

function App() {

  return (
    <>
        <div className="grid grid-cols-2 grid-rows-2 items-center justify-between h-full w-full gap-24">
            <section>
                {/*<Acordeon/>*/}
                <Video/>
            </section>
            <section>
                <Toast/>
                <Toaster/>
            </section>
            <section>
                <Carrusel/>
            </section>
            <section>
                {/*<DockDemo/>*/}
                {/*<GridAnimated/>*/}
                {/*<ScrollImages/>*/}
                <MarqueeDemo/>
            </section>

        </div>
    </>
  )
}

export default App
