import { useEffect, useState } from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import Partners from "./Partners";
import About from "./About";
import Benefits from "./Benefits";
import Skills from "./Skills";
import Services from "./Services";
import Team from "./Team";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Contact from "./Contact";
import NewsLetter from "./Newsletter";
import Links from "./Links";

export default function MainLayout() {

    const [openArrow, setOpenArrow] = useState(false);

    const handleScroll = () => {

        if (window.scrollY > 500) {
            setOpenArrow(true);
        } else {
            setOpenArrow(false);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>

            <header>
                <Navigation />

            </header>

            <body>

                <Hero />
                <Partners />
                <About />
                <Benefits />
                <Skills />
                <Services />
                <Team />
                <Pricing />
                <Faq />
                <Contact />
                <NewsLetter />
                <Links />

            </body>

            <footer>

                <div className={openArrow ? "arrowUp active" : "arrowUp"}>
                    <a href="#hero"> <i className="uil uil-arrow-up"></i></a>
                </div>

            </footer>

        </>
    )

}