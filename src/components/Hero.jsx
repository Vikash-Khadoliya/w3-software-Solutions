import HeroImg from '..//assets/hero-img.png'

export default function Hero() {

    return (
        <>

            <section className="hero " id="hero">

                <div className="hero-content">



                    <div className="hero-txt">
                        <h1>Better Solutions For Your Business</h1>
                        <p>We are team of talented designers making websites with Bootstrap</p>

                        <div className="hero-btn">

                        </div>

                    </div>

                    <div className="hero-img">

                        <img src={HeroImg} alt="" />

                    </div>

                </div>


            </section>

        </>
    )

}