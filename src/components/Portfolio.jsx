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

export default function Portfolio() {

    const [active, setActive] = useState(0);

    const handleActive = () => {
        alert("hello world");
    }

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

                        <Project active={active} setActive={setActive} handleActive={handleActive} />

                    </div>

                </div>

            </section>

        </>
    )

}

function Project({ active, setActive, handleActive }) {

    return (
        <>
            <ProjectButtons clickActive={handleActive} />
            <ProjectImgs />
        </>
    )

}

function ProjectButtons({ clickActive }) {

    return (
        <>
            <div className="project-btn text-center">
                <button id="all" onClick={clickActive}>All</button>
                <button id="app">App</button>
                <button id="card">Card</button>
                <button id="web">Web</button>
            </div>
        </>
    )

}

function ProjectImgs() {

    const images = [
        {
            img: PortfolioOne,
            name: 'app'
        },
        {
            img: PortfolioTwo,
            name: 'web'
        },
        {
            img: PortfolioThree,
            name: 'app'
        },
        {
            img: PortfolioFour,
            name: 'card'
        },
        {
            img: PortfolioFive,
            name: 'web'
        },
        {
            img: PortfolioSix,
            name: 'app'
        },
        {
            img: PortfolioSeven,
            name: 'card'
        },
        {
            img: PortfolioEight,
            name: 'card'
        },
        {
            img: PortfolioNine,
            name: 'web'
        },
    ]

    return (
        <>

            <div className="project-listing">


                <div className="row ">

                    {images.map((item, index) => (

                        <div className="col-4">
                            <img src={item.img} alt={item.img} />
                        </div>


                    ))}

                </div>


            </div>

        </>
    )

}