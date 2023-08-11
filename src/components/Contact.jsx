
export default function Contact() {

    return (
        <>

            <section className="contact" id="contact">

                <div className="contact-content">

                    <div className="main">
                        <h2>Contact</h2>
                    </div>

                    <div className="main-txt">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="contact-list row">

                        <div className="contact-list-row col-xl-5">

                            <div className="contact-list-content">

                                <div className="contact-list-info">
                                    <i class='bx bx-map' ></i>
                                    <div className="info">
                                        <h3>Location:</h3>
                                        <span>A108 Adam Street, New York, NY 535022</span>
                                    </div>

                                </div>

                                <div className="contact-list-info">
                                    <i class='bx bx-envelope' ></i>
                                    <div className="info">
                                        <h3>Email:</h3>
                                        <span>info@example.com</span>
                                    </div>

                                </div>

                                <div className="contact-list-info">
                                    <i class='bx bx-phone' ></i>
                                    <div className="info">
                                        <h3>Call:</h3>
                                        <span>+1 5589 55488 55s</span>
                                    </div>

                                </div>

                                <div className="contact-list-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103110.83303928128!2d-115.28478735552801!3d36.13701376443796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c48b8b171a13%3A0xcef7e53940dd10f7!2sWinchester%2C%20NV%2C%20USA!5e0!3m2!1sen!2sph!4v1691734033160!5m2!1sen!2sph" frameborder="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                </div>

                            </div>

                        </div>

                        <div className="contact-list-row col-xl-7">

                            <div className="contact-list-content">

                                <form className="row">

                                    <div className="contact-list-form col-lg-6">
                                        <label>Your Name</label>
                                        <input type="text" />
                                    </div>

                                    <div className="contact-list-form col-lg-6">
                                        <label>Your Email</label>
                                        <input type="text" />
                                    </div>

                                    <div className="contact-list-form col-12">
                                        <label>Subject</label>
                                        <input type="text" />
                                    </div>

                                    <div className="contact-list-form col-12">
                                        <label>Message</label>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>

                                    <div className="contact-list-btn">
                                        <button type="submit" className="btn">Send Message</button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}