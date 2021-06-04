import React from 'react';

const Bottom = () => {
    return (
        <div>
            <footer className="bg-dark text-white pt-5 pb-4">

                <div className="container text-centre text-md-left">

                    <div className="row text-centre text-md-left">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning" >Company Name</h5>
                            <p className="logo">CinéHome </p>
                        </div>
                        <div className="col-md-2 col-lg-2 mx-auto mt-3">
                            <h5 className="mb-4 font-weight-bold text-warning products">Products</h5>
                            <p>
                                <a href="#"className="text-uppercase  text-white">The Providers</a>
                            </p>
                            <p>
                                <a href="#"className=" text-uppercase  text-white">The Providers</a>
                            </p>
                            <p>
                                <a href="#"className=" text-uppercase  text-white">The Providers</a>
                            </p>
                            <p>
                                <a href="#" className="text-uppercase  text-white">The Providers</a>
                            </p>

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning ">UseFul Links</h5>

                            <p>
                                <a href="#" className="text-uppercase bold text-white ">Contact</a>
                            </p>
                            <p>
                                <a href="#" className="text-uppercase bold text-white ">Your Account</a>
                            </p>
                            <p>
                                <a href="#" className="text-uppercase bold text-white">Help</a>
                            </p>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning ">Contact</h5>
                            <p>
                                <i className="fas fa-home mr-3"> New York .NY 2333 ,US </i>
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"> CineHome@gmail.com </i>
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"> +1 2544812316 90 </i>
                            </p>
                            <p>
                                <i className="fas fa-print mr-3"> +1 0322505698 41 </i>
                            </p>

                        </div>


                    </div>
                    <hr className="mb-4"/>

                    <div className="row align-items-centre">

                        <div className="col-md-7 col-lg-8">
                            <p> Copyright ©2021 All right reserved by:<strong className="copyright text-warning " >The Providres </strong>
                             </p>
                        </div>

                        <div className="col-md-5 col-lg-4">
                            <div className="text-centre text-md-right">
                                <ul className="list-unstyled list-inline ">
                                    <li className="list-inline-item">
                                    <a href="# " className="btn-floating btn-sm text-white"> <i className="fab fa-facebook" ></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="# " className="btn-floating btn-sm text-white"> <i className="fab fa-twitter" ></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="# " className="btn-floating btn-sm text-white"> <i className="fab fa-google-plus" ></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="# " className="btn-floating btn-sm text-white"> <i className="fab fa-youtube" ></i></a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="# " className="btn-floating btn-sm text-white"> <i className="fab fa-linkedin" ></i></a>
                                    </li>
                                    
                                </ul>

                            </div>

                        </div>


                    </div>
                </div>

            </footer>
        </div>
    )
}
export default Bottom;