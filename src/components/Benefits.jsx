import { useState, useEffect } from 'react';
import BenefitsImg from '../assets/benefits.png';


export default function Benefits() {

    const [open, setOpen] = useState(0);

    const items = [
        {
            title: 'Non consectetur a erat nam at lectus urna duis?',
            content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
        },
        {
            title: 'Feugiat scelerisque varius morbi enim nunc?',
            content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
        },
        {
            title: 'Dolor sit amet consectetur adipiscing elit?',
            content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis'
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
                        <h3>Eum ipsam laborum deleniti <span>velit pariatur architecto aut nihil</span></h3>
                        <p className='par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                        <div className='benefits-lists'>

                            {items.map((data, index) => (

                                <div key={index} className={open === index ? "benefit-list-content-new" : "benefit-list-content"} onClick={() => {
                                    accordion(index);
                                }}>
                                    <a className='benefit-list-header'><span>0{index + 1}</span> {data.title}<i className={open === index ? "bx bx-chevron-up" : "bx bx-chevron-down"} ></i></a>
                                    <div className='benefit-list-body'>
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