
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
                        <a>About</a>
                        <a>Services</a>
                        <a>Portfolio</a>
                        <a>Team</a>
                        <a>Drop Down <i class='bx bx-chevron-down'></i></a>
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