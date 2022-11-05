import React from 'react'

const Register = () => {
    return (
        <>
            <main className="main-content  mt-0">
                <section className="min-vh-100 mb-8">
                    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{ backgroundImage: "url(assets/img/curved-images/curved14.jpg)" }}>
                        <span className="mask bg-gradient-dark opacity-6"></span>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 text-center mx-auto">
                                    <h1 className="text-white mb-2 mt-5">Welcome!</h1>
                                    <p className="text-lead text-white">Use these awesome forms to login or create new account in your project for free.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-lg-n10 mt-md-n11 mt-n10">
                            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                                <div className="card z-index-0">
                                    <div className="card-header text-center pt-4">
                                        <h5>Register with</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="email-addon" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                                            </div>
                                            <p className="text-sm mt-3 mb-0">Already have an account? <a href="/login" className="text-dark font-weight-bolder">Login</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Register