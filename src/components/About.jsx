import { motion } from "framer-motion";

export default function About() {

    return (
        <>

            <section className="about" id="about">

                <div className="about-content ">

                    <motion.div 
                        className="main"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>ABOUT US</h2>
                    </motion.div>

                    <div className="about-txt-content row">

                        <motion.div 
                            className="about-txt col-md-6"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >

                            <p>We are a reputable supplier of IT solutions committed to offering cutting-edge digital services that support companies in a world that is changing quickly. Our team creates powerful web, mobile, and software solutions by fusing technical know-how with creativity.</p>

                            <motion.ul
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <motion.li 
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <i className='bx bx-check-double'></i>Custom Web & Mobile App Development
                                </motion.li>
                                <motion.li 
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <i className='bx bx-check-double'></i>IT Consulting & Software Solutions
                                </motion.li>
                                <motion.li 
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <i className='bx bx-check-double'></i>Secure, Scalable & Modern Technologies
                                </motion.li>
                            </motion.ul>

                        </motion.div>

                        <motion.div 
                            className="about-btn col-md-6"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <p>We provide customized solutions that boost productivity and efficiency, regardless of your company&apos;s size. In the tech sector, we stand out for our dedication to quality and client satisfaction.</p>
                            <motion.a 
                                href="#"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="learn-more-btn"
                            >
                                Learn More
                            </motion.a>
                        </motion.div>

                    </div>

                </div>

            </section>

        </>
    )

}