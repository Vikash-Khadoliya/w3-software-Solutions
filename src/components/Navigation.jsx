import { useState, useEffect } from "react"


export default function Navigation() {

    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(true);
    const [menu, setMenu] = useState(true);
    const [bg, setBg] = useState(false);



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

    const handleScroll = () => {

        if (window.scrollY > 50) {
            setBg(true);
        } else {
            setBg(false);
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

            <section className={bg ? "navigation navigation-bg" : "navigation"} id="navigation">

                <div className="navigation-content d-flex align-items-center justify-content-between">

                <div className="logo">
                    <img src="src/assets/removebg-preview.png" alt="W3 Software Solutions Logo" />
                    </div>


                    <div className={menu ? "navlist d-flex align-items-center navlist-fade" : "navlist d-flex align-items-center"}>

                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#team">Team</a>

                        <div className="navlist-dropdown">

                            <a className={active ? "navlist-dropdown-btn-toggle active" : "navlist-dropdown-btn-toggle"} onClick={() => {
                                toggle();
                            }}>Technologies <i className={active ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></a>

                            <a className="navlist-dropdown-btn">Technologies <i className={active ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></a>

                            <div className={active ? "dropdown-content open" : "dropdown-content close"}>

                                <a href="">Digital Marketing Services </a>

                                <div className="deep-dropdown">

                                    <a className={active2 ? "deep-dropdown-btn-toggle active" : "deep-dropdown-btn-toggle"} onClick={() => {
                                        toggle2();
                                    }}>Our Services<i className={active2 ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i></a>

                                    <div className={active2 ? "deep-dropdown-content open" : "deep-dropdown-content close"}>
                                        <a href="">Mobile App Development </a>
                                        <a href="">Software Development </a>
                                        <a href="">Website Development </a>
                                    </div>

                                </div>

                                <a href="">WordPress Website Development </a>
                                <a href="">Ecommerce Website Development</a>
                                <a href="">Website Designing Services</a>

                            </div>

                        </div>
                        <a href="#contact">Contact</a>
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