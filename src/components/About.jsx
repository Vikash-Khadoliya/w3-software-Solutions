import { useState } from "react";

export default function About() {

    return (
        <>

            <section className="about" id="about">

                <div className="about-content ">

                    <div className="main">
                        <h2>ABOUT US</h2>
                    </div>

                    <div className="about-txt-content row">

                        <div className="about-txt col-md-6">

                            <p>We are a reputable supplier of IT solutions committed to offering cutting-edge digital services that support companies in a world that is changing quickly. Our team creates powerful web, mobile, and software solutions by fusing technical know-how with creativity..</p>

                            <ul>
                                <li><i className='bx bx-check-double' ></i>Custom Web & Mobile App Development</li>
                                <li><i className='bx bx-check-double' ></i>IT Consulting & Software Solutions</li>
                                <li><i className='bx bx-check-double' ></i>Secure, Scalable & Modern Technologies</li>
                            </ul>

                        </div>

                        <div className="about-btn col-md-6">
                            <p>We provide customized solutions that boost productivity and efficiency, regardless of your company's size. In the tech sector, we stand out for our dedication to quality and client satisfaction..</p>
                            <a href="">Learn More</a>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}