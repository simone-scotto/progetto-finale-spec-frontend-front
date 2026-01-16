export default function HomePage() {
    return (
        <>
            <div className="hero d-flex align-items-end pb-5  position-relative">
                <div className="hero-text text-center">
                    <h1>Choose your road</h1>
                </div>
                <div className="container brands-overlay p-0">
                    <div className="row m-0">


                        <div className="col p-0 d-flex justify-content-center">
                            <div className="brand-box ">
                                <img className="brand" src="../../public/canyon-logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col p-0 d-flex justify-content-center">
                            <div className="brand-box ">
                                <img className="brand" src="../../public/santa-cruz-logo.svg" alt="" />
                            </div>
                        </div>
                        <div className="col p-0 d-flex justify-content-center">
                            <div className="brand-box ">
                                <img className="brand" src="../../public/cannondale-logo.svg" alt="" />
                            </div>
                        </div>
                        <div className="col p-0 d-flex justify-content-center">
                            <div className="brand-box ">
                                <img className="brand" src="../../public/trek-logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col p-0 d-flex justify-content-center">
                            <div className="brand-box ">
                                <img className="brand object-fit-none" src="../../public/rose-bikes-logo.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}