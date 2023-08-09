import ClientOne from '../assets/client-1.png';
import ClientTwo from '../assets/client-2.png';
import ClientThree from '../assets/client-3.png';
import ClientFour from '../assets/client-4.png';
import ClientFive from '../assets/client-5.png';
import ClientSix from '../assets/client-6.png';

export default function Partners() {

    return (
        <>

            <section className="partners" id="partners">

                <div className="partners-content row">

                    <div className="partner-logo col-sm-2 ">
                        <img src={ClientOne} alt="" />
                    </div>

                    <div className="partner-logo col-sm-2">
                        <img src={ClientTwo} alt="" />
                    </div>

                    <div className="partner-logo col-sm-2">
                        <img src={ClientThree} alt="" />
                    </div>

                    <div className="partner-logo col-sm-2">
                        <img src={ClientFour} alt="" />
                    </div>

                    <div className="partner-logo col-sm-2">
                        <img src={ClientFive} alt="" />
                    </div>

                    <div className="partner-logo col-sm-2">
                        <img src={ClientSix} alt="" />
                    </div>

                </div>

            </section>

        </>
    )

}