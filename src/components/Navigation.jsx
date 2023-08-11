
export default function Navigation() {

    return (
        <>

            <section className="navigation" id="navigation">

                <div className="navigation-content d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h2>ACER</h2>
                    </div>

                    <div className="navlist d-flex align-items-center">

                        <a href="#">Home</a>
                        <a href="#about">About</a>
                        <a>Services</a>
                        <a>Portfolio</a>
                        <a>Team</a>
                        <div className="navlist-dropdown">
                            <a>Drop Down <i className='bx bx-chevron-down'></i></a>
                            <div className="dropdown-content">
                                <a href="">dropdown 1</a>
                                <div className="deep-dropdown">
                                    <a href="">deep dropdown <i className='bx bx-chevron-right'></i></a>
                                    <div className="deep-dropdown-content">
                                        <a href="">dropdown 1</a>
                                        <a href="">dropdown 2</a>
                                        <a href="">dropdown 3</a>
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

                </div>

            </section>

        </>
    )

}