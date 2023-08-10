import { useState, useEffect } from 'react';
import BenefitsImg from '../assets/benefits.png';


export default function Benefits() {

    const [open, setOpen] = useState(true);
    const [close, setClose] = useState(true);

    const accordion = (id) => {

        const lists = document.getElementsByClassName("benefit-list-content");




        if (open) {


            document.getElementById(id).className = "benefit-list-content-new";
            // document.getElementById(id).querySelector(".bx-chevron-down").className = "bx bx-chevron-up"

            setOpen(!open);

        } else {
            document.getElementById(id).className = "benefit-list-content";
            // document.getElementById(id).querySelector(".bx-chevron-up").className = "bx bx-chevron-down"
            setOpen(!open);

        }





    }

    return (
        <>

            <section className="benefits" id="benefits">

                <div className="benefits-content row">


                    <div className="benefits-txt col-sm-6">
                        <h3>Eum ipsam laborum deleniti <span>velit pariatur architecto aut nihil</span></h3>
                        <p className='par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                        <div className='benefits-lists'>

                            <div className="benefit-list-content" id='01' onClick={() => {
                                accordion('01');
                            }}>
                                <a className='benefit-list-header'><span>01 </span> Non consectetur a erat nam at lectus urna duis?<i className='bx bx-chevron-down'></i></a>
                                <div className='benefit-list-body' id='01'>
                                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                </div>
                            </div>

                            <div className="benefit-list-content" id='02' onClick={() => {
                                accordion('02');
                            }}>
                                <a className='benefit-list-header'><span>02 </span> Feugiat scelerisque varius morbi enim nunc?<i className='bx bx-chevron-down'></i></a>
                                <div className='benefit-list-body' id='02'>
                                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                </div>

                            </div>

                            <div className="benefit-list-content" id='03' onClick={() => {
                                accordion('03');
                            }}>
                                <a className='benefit-list-header'><span>03 </span> Dolor sit amet consectetur adipiscing elit?<i className='bx bx-chevron-down'></i></a>
                                <div className='benefit-list-body' id='03'>
                                    <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                                </div>
                            </div>



                        </div>

                    </div>

                    <div className="benefits-img col-sm-6">
                        <img src={BenefitsImg} alt="" />
                    </div>

                </div>

            </section>

        </>
    )

}