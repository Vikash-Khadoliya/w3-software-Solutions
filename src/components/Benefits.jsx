import BenefitsImg from '../assets/benefits.png';

export default function Benefits() {

    return (
        <>

            <section className="benefits" id="benefits">

                <div className="benefits-content">


                    <div className="benefits-txt">
                        <h3>Eum ipsam laborum deleniti <span>velit pariatur architecto aut nihil</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
                    </div>

                    <div className="benefits-img">
                        <img src={BenefitsImg} alt="" />
                    </div>

                </div>

            </section>

        </>
    )

}