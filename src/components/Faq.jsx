import { useState } from "react"

export default function Faq() {

    const [open, setOpen] = useState(null);

    const items = [
        {
            title: 'What services does W3 Software Solutions offer?',
            content: 'We offer digital marketing, UI/UX design, CMS & eCommerce development, web development, mobile app development, and custom software solutions..'
        },
        {
            title: 'How long does it take to complete a website or app?',
            content: 'Project timelines vary depending on complexity, but most websites are delivered in 2–4 weeks, and apps in 4–6 weeksi.'
        },
        {
            title: 'What industries do you serve?',
            content: 'We serve businesses in education, healthcare, real estate, retail, startups, and more—both in India and globally.'
        },
        {
            title: 'Do you offer post-launch support and maintenance?',
            content: 'Yes, we provide ongoing support, updates, and maintenance plans to keep your project running smoothly..'
        },
        {
            title: 'Can I customize my design or functionality?',
            content: 'Absolutely! All our solutions are fully customizable to match your business goals and brand identity..'
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

            <section className="faq" id="faq">

                <div className="faq-content">

                    <div className="main">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                    </div>

                    <div className="main-txt">
                        <p>We provide businesses with cutting-edge digital solutions that are customized to meet their specific requirements. Our team is dedicated to providing quality, performance, and customer satisfaction at every stage, from user-friendly websites to sophisticated software systems.</p>
                    </div>

                    <div className="faq-list">
                        {items.map((data, index) => (

                            <div key={index} className="faq-list-content" onClick={() => {
                                accordion(index);
                            }}>
                                <a className='faq-list-header'><span><i className='bx bx-question-mark' ></i></span> {data.title}<i className={open === index ? "bx bx-chevron-up" : "bx bx-chevron-down"} ></i></a>
                                <div className={open === index ? 'faq-list-body-new' : 'faq-list-body'}>
                                    <p>{data.content}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>

            </section>

        </>
    )

}