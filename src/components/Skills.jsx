import SkillsImg from '../assets/skills.png';


export default function Skills() {

    return (
        <>

            <section className="skills" id="skills">

                <div className="skills-content row">

                    <div className="skills-img col-lg-6">

                        <img src={SkillsImg} alt="" />

                    </div>


                    <div className="skills-txt col-lg-6">

                        <h3>Our Technical Proficiency Fuels Your Online Achievement</h3>
                        <p>Using cutting-edge web technologies, we at W3 Software Solutions are experts at creating high-performance applications. In order to create scalable and interactive digital products, our team is proficient in both front-end and back-end frameworks..</p>

                        <div className="skill-ratings">

                            <div className="skill">
                                <div className="skill-txt">
                                    <span>HTML</span>
                                    <span>100%</span>
                                </div>
                                <div className="skill-load">

                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-txt">
                                    <span>CSS</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill-load">

                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-txt">
                                    <span>REACT</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill-load">

                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-txt">
                                    <span>JAVASCRIPT</span>
                                    <span>95%</span>
                                </div>
                                <div className="skill-load">

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}