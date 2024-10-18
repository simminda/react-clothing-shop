import React from 'react';


const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted" >
            {/* Section: Social media  */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* Left  */}
                <div className="me-5 d-none d-lg-block">
                    <span>Connect with us on Social Media:</span>
                </div>
                {/* Right  */}
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </section>

            {/* Section: Links  */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* Grid row  */}
                    <div className="row mt-3">
                        {/* co. column  */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content  */}
                            <h6 className="fw-bold mb-4">
                                <p>The Thread Shed</p>
                            </h6>
                            <p>
                                <img id="myLogo" src="./images/logo.jpg" alt="logo" width="60" height="60"/>
                            </p>
                        </div>

                        {/* Contacts column */}
                        <div className="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
                            {/* Links  */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="bi-house me-3"></i>7, 7th Avenue, Edenvale, 1609</p>
                            <p><i className="bi-envelope me-3"></i>customercare@tts.co.za</p>
                            <p><i className="bi-phone me-3"></i> + 27 83 833 6837</p>
                            <p><i className="bi-printer me-3"></i> + 27 11 100 1001</p>
                        </div>

                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-4 mx-auto mb-4">
                            {/* Links  */}
                            <h6 className="text-uppercase fw-bold mb-4">Trading Hours</h6>
                            <p><i className="bi bi-caret-right-fill me-3"></i> Monday - Friday: 09h00 - 17h00</p>
                            <p><i className="bi bi-caret-right-fill me-3"></i> Saturday: 09h30 - 14h00</p>
                            <p><i className="bi bi-caret-right-fill me-3"></i> Sunday: Closed</p>
                            <p><i className="bi bi-caret-right-fill me-3"></i> Public holidays: 09h30 - 14h00</p>
                            <p><i className="bi bi-caret-right-fill me-3"></i> (Closed on Easter and Christmas)</p>
                        </div>
                    </div>
                    {/* Grid row  */}
                </div>
            </section>

            {/* Copyright  */}
            <div className="text-center p-4">
                <small>© 2023 Copyright - The Thread Shed (Pty) Ltd | SIM-X Design</small>
            </div>
        </footer>
    );
};


export default Footer;