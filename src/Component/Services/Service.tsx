import ServiceCard from '../ServiceCard/ServiceCard'

export default function Service() {
    return (
        <>
            <section>
                <div className="container my-5">
                    <div className="row justify-content-between text-center my-4 gy-4 ">
                        <h2 className='fw-bolder my-5 display-5'>Translation Services</h2>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <ServiceCard />
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <ServiceCard />
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <ServiceCard />
                        </div>
                    </div>
                    <button className='btn btn-lg btn-dark text-white'>See more</button>
                    <hr className='my-4 text-dark border border-1 border-black opacity-100' />

                </div>
                <div className="container my-5">
                    <div className="row justify-content-between text-center my-4 gy-4">
                        <h2 className='fw-bolder my-5 display-5'>Comprehensive Academic Services</h2>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <ServiceCard />
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <ServiceCard />
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12">
                            <ServiceCard />
                        </div>
                    </div>
                    <button className='btn btn-lg btn-dark text-white'>See more</button>
                </div>
            </section>
        </>
    )
}
