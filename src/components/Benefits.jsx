import { useState, useEffect } from 'react';
import BenefitsImg from '../assets/benefits.png';


export default function Benefits() {

    const [open, setOpen] = useState(0);

    const items = [
        {
            title: 'What services does W3 Software Solutions provide?',
            content:'We offer a wide range of IT services including Web Development, Mobile App Development, Digital Marketing, UI/UX Design, CMS & eCommerce Development, and Blockchain App Development..'
        },
        {
            title: 'How long does a typical project take?',
            content: '. The timeline depends on the project’s scope, but most websites or apps are completed within 4 to 6 weeks, including revisions and deployment..'
        },
        {
            title: 'Do you offer post-launch support and maintenance?',
            content: 'Yes, we provide ongoing technical support, performance optimization, and maintenance plans to ensure your solution runs smoothly long-term.'
        },
    ]

    const accordion = (index) => {

        setOpen(index);

        if (index === open) {
            setOpen(null);
        }

    }

    return (
        <>

            <section className="benefits" id="benefits">

                <div className="benefits-content row">


                    <div className="benefits-txt col-xl-6">
                        <h3>Boosting Your Digital Adventure <span>with Creative Solutions</span></h3>
                        <p className='par'>For startups and businesses, W3 Software Solutions creates web and app solutions that are scalable, secure, and performance-driven. With our proficiency in cutting-edge technologies, we assist companies in streamlining processes and attaining quantifiable expansion.</p>

                        <div className='benefits-lists'>

                            {items.map((data, index) => (

                                <div key={index} className="benefit-list-content" onClick={() => {
                                    accordion(index);
                                }}>
                                    <a className='benefit-list-header'><span>0{index + 1}</span> {data.title}<i className={open === index ? "bx bx-chevron-up" : "bx bx-chevron-down"} ></i></a>

                                    <div className={open === index ? 'benefit-list-body-open' : 'benefit-list-body'}>
                                        <p>{data.content}</p>
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="benefits-img col-xl-6">
                        <img src={BenefitsImg} alt="" />
                    </div>

                </div>

            </section>


        </>
    )

}