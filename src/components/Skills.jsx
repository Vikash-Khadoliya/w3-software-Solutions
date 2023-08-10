import SkillsImg from '../assets/skills.png';


export default function Skills() {

    return (
        <>

            <section className="skills" id="skills">

                <div className="skills-content row">

                    <div className="skills-img col-sm-6">

                        <img src={SkillsImg} alt="" />

                    </div>


                    <div className="skills-txt col-sm-6">

                        <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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
                                    <span>50%</span>
                                </div>
                                <div className="skill-load">

                                </div>
                            </div>

                            <div className="skill">
                                <div className="skill-txt">
                                    <span>JAVASCRIPT</span>
                                    <span>80%</span>
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