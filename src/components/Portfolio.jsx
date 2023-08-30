import { useState } from "react"
import PortfolioOne from '../assets/portfolio-1.jpg';
import PortfolioTwo from '../assets/portfolio-2.jpg';
import PortfolioThree from '../assets/portfolio-3.jpg';
import PortfolioFour from '../assets/portfolio-4.jpg';
import PortfolioFive from '../assets/portfolio-5.jpg';
import PortfolioSix from '../assets/portfolio-6.jpg';
import PortfolioSeven from '../assets/portfolio-7.jpg';
import PortfolioEight from '../assets/portfolio-8.jpg';
import PortfolioNine from '../assets/portfolio-9.jpg';

import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {

    const [activeBtn, setActiveBtn] = useState("all");

    const projects = [

        {
            portfolio: PortfolioFour,
            genre: 'card'
        },
        {
            portfolio: PortfolioThree,
            genre: 'app'
        },
        {
            portfolio: PortfolioOne,
            genre: 'app'
        },
        {
            portfolio: PortfolioTwo,
            genre: 'app'
        },
        {
            portfolio: PortfolioSeven,
            genre: 'web'
        },
        {
            portfolio: PortfolioEight,
            genre: 'web'
        },
        {
            portfolio: PortfolioNine,
            genre: 'web'
        },
        {
            portfolio: PortfolioFive,
            genre: 'card'
        },
        {
            portfolio: PortfolioSix,
            genre: 'card'
        },
    ]



    return (
        <>

            <section className="portfolio" id="portfolio">

                <div className="portfolio-content">

                    <div className="main">
                        <h2>PORTFOLIO</h2>
                    </div>

                    <div className="main-txt">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="project-content">
                        <ProjectBtns activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
                        <ProjectImg projects={projects} activeBtn={activeBtn} />

                    </div>

                </div>

            </section>

        </>
    )

}



function ProjectImg({ projects, activeBtn }) {

    return (
        <>
            <div className="project-images">
                <motion.div>
                    <div className="row
                ">


                        {projects.map((item, index) => (

                            item.genre === activeBtn ?
                                <AnimatePresence>

                                    <motion.img key={index} src={item.portfolio} alt="" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout />


                                </AnimatePresence>

                                : ''

                        ))}

                        {
                            projects.map((item, index) => (

                                activeBtn === 'all' ?

                                    <AnimatePresence>
                                        <motion.img key={index} src={item.portfolio} alt="" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout />
                                    </AnimatePresence>

                                    : ''

                            ))
                        }


                    </div>
                </motion.div>


            </div>
        </>
    )

}

function ProjectBtns({ activeBtn, setActiveBtn }) {

    return (
        <>
            <div className="project-btn text-center">
                <button className={activeBtn === 'all' ? 'active' : ''} onClick={() => setActiveBtn("all")}>All</button>
                <button className={activeBtn === 'app' ? 'active' : ''} onClick={() => setActiveBtn("app")}>App</button>
                <button className={activeBtn === 'card' ? 'active' : ''} onClick={() => setActiveBtn("card")}>Card</button>
                <button className={activeBtn === 'web' ? 'active' : ''} onClick={() => setActiveBtn("web")}>Web</button>
            </div>
        </>
    )

}