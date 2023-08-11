import ClientOne from '../assets/team-1.jpg';
import ClientTwo from '../assets/team-2.jpg';
import ClientThree from '../assets/team-3.jpg';
import ClientFour from '../assets/team-4.jpg';

export default function Team() {

    return (
        <>

            <section className="team" id="team">

                <div className="team-content">

                    <div className="main">
                        <h2>TEAM</h2>
                    </div>

                    <div className="main-txt">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="team-list row">

                        <div className="team-list-row col-lg-6">

                            <div className="team-list-content">

                                <div className="team-list-img">
                                    <img src={ClientOne} alt="" />
                                </div>

                                <div className="team-profile">
                                    <h3>Richard Sy</h3>
                                    <span>Chief Executive Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>

                                    <div className="team-social-links">
                                        <a href=""><i className='bx bxl-twitter'></i></a>
                                        <a href=""><i className='bx bxl-facebook' ></i></a>
                                        <a href=""><i className='bx bxl-instagram-alt' ></i></a>
                                        <a href=""><i className='bx bxl-linkedin-square' ></i></a>
                                    </div>

                                </div>

                            </div>

                            <div className="team-list-content">
                                <div className="team-list-img">
                                    <img src={ClientTwo} alt="" />
                                </div>

                                <div className="team-profile">
                                    <h3>Abegail Malto</h3>
                                    <span>Product Manager</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>

                                    <div className="team-social-links">
                                        <a href=""><i className='bx bxl-twitter'></i></a>
                                        <a href=""><i className='bx bxl-facebook' ></i></a>
                                        <a href=""><i className='bx bxl-instagram-alt' ></i></a>
                                        <a href=""><i className='bx bxl-linkedin-square' ></i></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="team-list-row col-lg-6">

                            <div className="team-list-content">
                                <div className="team-list-img">
                                    <img src={ClientThree} alt="" />
                                </div>

                                <div className="team-profile">

                                    <h3>Zeyan Alcantara</h3>
                                    <span>CTO</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>

                                    <div className="team-social-links">
                                        <a href=""><i className='bx bxl-twitter'></i></a>
                                        <a href=""><i className='bx bxl-facebook' ></i></a>
                                        <a href=""><i className='bx bxl-instagram-alt' ></i></a>
                                        <a href=""><i className='bx bxl-linkedin-square' ></i></a>
                                    </div>

                                </div>
                            </div>

                            <div className="team-list-content">
                                <div className="team-list-img">
                                    <img src={ClientFour} alt="" />
                                </div>

                                <div className="team-profile">

                                    <h3>Rica Anderson</h3>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>

                                    <div className="team-social-links">
                                        <a href=""><i className='bx bxl-twitter'></i></a>
                                        <a href=""><i className='bx bxl-facebook' ></i></a>
                                        <a href=""><i className='bx bxl-instagram-alt' ></i></a>
                                        <a href=""><i className='bx bxl-linkedin-square' ></i></a>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}