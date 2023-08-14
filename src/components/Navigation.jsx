import { useState } from "react"


export default function Navigation() {

    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(true);
    const [menu, setMenu] = useState(true);
    const [windows, setWindows] = useState(false);

    const toggle = () => {

        setActive(!active);
        setActive2(!active2);

    }

    const toggle2 = () => {

        setActive2(!active2);

    }

    const openMenu = () => {

        setMenu(!menu);

    }

    window.onclick = () => {
        setWindows(!windows);
    }


    return (
        <>

            <section className="navigation" id="navigation">

                <div className="navigation-content d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h2>ACER</h2>
                    </div>

                    <div className={menu ? "navlist d-flex align-items-center navlist-fade" : "navlist d-flex align-items-center"}>

                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a>Services</a>
                        <a>Portfolio</a>
                        <a>Team</a>

                        <div className="navlist-dropdown">

                            <a className={active ? "navlist-dropdown-btn-toggle active" : "navlist-dropdown-btn-toggle"} onClick={() => {
                                toggle();
                            }}>Drop Down <i className={active ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></a>

                            <a className="navlist-dropdown-btn">Drop Down <i ></i></a>

                            <div className={active ? "dropdown-content open" : "dropdown-content close"}>

                                <a href="">dropdown 1</a>

                                <div className="deep-dropdown">

                                    <a className={active2 ? "deep-dropdown-btn-toggle active" : "deep-dropdown-btn-toggle"} onClick={() => {
                                        toggle2();
                                    }}>deep dropdown <i className={active2 ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></a>

                                    <div className={active2 ? "deep-dropdown-content open" : "deep-dropdown-content close"}>
                                        <a href="">deep dropdown 1</a>
                                        <a href="">deep dropdown 2</a>
                                        <a href="">deep dropdown 3</a>
                                    </div>

                                </div>

                                <a href="">dropdown 2</a>
                                <a href="">dropdown 3</a>
                                <a href="">dropdown 4</a>

                            </div>

                        </div>
                        <a>Contact</a>
                        <div className="navlist-btn">
                            <a>Get Started</a>
                        </div>

                    </div>

                    <div className="burger-menu" onClick={() => {
                        openMenu();
                    }}>
                        <div className={menu ? "box" : "box box1"}></div>
                        <div className={menu ? "box" : "box box2"}></div>
                        <div className={menu ? "box" : "box box3"}></div>
                    </div>

                </div>

            </section>

        </>
    )

}