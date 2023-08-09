import HeroImg from '..//assets/hero-img.png'

export default function Hero() {

    return (
        <>

            <section className="hero " id="hero">

                <div className="hero-content d-flex align-items-center">



                    <div className="hero-txt">
                        <h1>Better Solutions For Your Business</h1>
                        <p>We are team of talented designers making websites with Bootstrap</p>

                        <div className="hero-btn d-flex align-items-center">

                            <a href='#' className='get-started'>Get Started</a>
                            <a href='#' className='watch-video'><i class='bx bx-play' ></i> Watch Video</a>

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