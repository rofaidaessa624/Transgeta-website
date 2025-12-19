import CountUp from "react-countup";

export default function Achievement() {
    return (
        <>
            <section className="bg-colored my-5 py-5">
                <div className="container">
                    <div className="row text-white text-center">
                        <div className="col-md-3 col-6">
                            <CountUp
                                className='  h1'
                                start={0}
                                end={50}
                                duration={4}
                                delay={2}
                                separator=" "
                                suffix='+'
                                decimal=","
                            >
                            </CountUp>
                            <p className='fw-light'>Partners</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <CountUp
                                className='h1'
                                start={0}
                                end={500}
                                duration={4}
                                delay={2}
                                separator=" "
                                suffix='+'
                                decimal=","
                            >
                            </CountUp>
                            <p className='fw-light'>Academic consultation</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <CountUp
                                className='  h1'
                                start={0}
                                end={900}
                                duration={4}
                                delay={2}
                                separator=" "
                                suffix='+'
                                decimal=","
                            >
                            </CountUp>
                            <p className='fw-light'>Client</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <CountUp
                                className='  h1'
                                start={0}
                                end={700}
                                duration={4}
                                delay={2}
                                separator=" "
                                suffix='+'
                                decimal=","
                            >
                            </CountUp>
                            <p className='fw-light'>Translated project</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
