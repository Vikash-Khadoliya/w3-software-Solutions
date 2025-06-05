

export default function Pricing() {

    return (
        <>

            <section className="pricing" id="pricing">

                <div className="pricing-content">

                    <div className="main">
                        <h2>PRICING</h2>
                    </div>

                    <div className="main-txt">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="pricing-list row">

                        <div className="pricing-list-row col-xl-4">

                            <div className="price-list-content">
                                <h4>Basic Plan</h4>
                                <h3><span>₹</span>0</h3>
                                <span>per month</span>

                                <ul className="price-list-content-includes">
                                    <li><i className='bx bx-check' ></i>Responsive Website Layout</li>
                                    <li><i className='bx bx-check' ></i>Basic SEO Setup</li>
                                    <li><i className='bx bx-check' ></i>Contact Form Integration</li>
                                    <li><i className='bx bx-x' ></i><del>Blog/Portfolio Section</del></li>
                                    <li><i className='bx bx-x' ></i><del>Custom Domain Setup</del></li>
                                </ul>

                                <a href="" className="btn btn-dark">Get Started</a>

                            </div>

                        </div>

                        <div className="pricing-list-row col-xl-4">

                            <div className="price-list-content filter">
                                <h4>Standard Plan</h4>
                                <h3><span>₹</span>9,99</h3>
                                <span>per month</span>

                                <ul className="price-list-content-includes">
                                    <li><i className='bx bx-check' ></i>Everything in Basic</li>
                                    <li><i className='bx bx-check' ></i>Blog & Portfolio Features</li>
                                    <li><i className='bx bx-check' ></i>Dynamic CMS Setup (WordPress/React)</li>
                                    <li><i className='bx bx-check' ></i>Premium Hosting</li>
                                    <li><i className='bx bx-check' ></i>Dedicated Project Manager</li>
                                </ul>

                                <a href="" className="btn btn-dark">Get Started</a>

                            </div>

                        </div>

                        <div className="pricing-list-row col-xl-4">

                            <div className="price-list-content">
                                <h4>Premium Plan</h4>
                                <h3><span>₹</span>19,99</h3>
                                <span>per month</span>

                                <ul className="price-list-content-includes">
                                    <li><i className='bx bx-check' ></i>Everything in Standard</li>
                                    <li><i className='bx bx-check' ></i>Custom Web Development (HTML, CSS, JS, React)</li>
                                    <li><i className='bx bx-check' ></i>Dynamic Admin Panel (CMS with WordPress / Custom Stack)</li>
                                    <li><i className='bx bx-check' ></i>Software Deployment & Hosting Support</li>
                                    <li><i className='bx bx-check' ></i>Dedicated Developer Support</li>
                                </ul>

                                <a href="" className="btn btn-dark">Get Started</a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )

}