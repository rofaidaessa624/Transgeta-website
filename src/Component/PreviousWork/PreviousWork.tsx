import WorkCard from '../WorkCard/WorkCard'
export default function PreviousWork() {
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row justify-content-start text-center gy-4">
                        <h2 className='fw-bolder mt-5 display-5'>We have proven track record</h2>
                            <h3 className='mb-5 mt-2 '>
                                Contact us now and join our partners in success
                                </h3>
                        <div className="col-md-6 col-11">
                            <WorkCard position={"top"} img={"images/workCardImg1.png"} title={"Translation of Banking Documents for Bank of Oman Arab – 2023"} desc={`In 2023, Trans-Gate handled the translation of a series of critical documents for
                                            Bank of Oman Arab, including financial reports, legal documents, and banking
                                            contracts. Our team focused on maintaining absolute accuracy in financial and
                                            banking terminology, helping the bank enhance communication with its clients
                                            and international partners. All projects were delivered on time and met the
                                            required standards, ensuring the highest levels of quality and thorough review.`} />
                        </div>
                        <div className="col-md-6 col-11">
                            <WorkCard position={"bottom"} img={"images/workCardImg2.png"} 
                            title={"Translation of Regulatory Provisions for Import and Sale of AlcoholicBeverages for the Iraqi General Customs Authority – 2022"} 
                            desc={`In 2022, Trans-Gate translated regulations related to the import and sale of
alcoholic beverages, covering legal provisions and regulatory texts. We
emphasized precision in conveying legal details to ensure accurate
understanding in various official and commercial contexts, fully complying with
international standards for legal translation.`} />
                        </div>
                        <div className="col-md-6 col-11">
                            <WorkCard position={"top"} img={"images/workCardImg3.png"}
                             title={"Translation of Commercial Contracts and International Agreements for the ICC – 2020"}
                              desc={`In 2020, Trans-Gate translated commercial contracts and import-export
agreements for the International Chamber of Commerce (ICC), an international
organization representing companies and institutions from over 170 countries.
The translation focused on legal accuracy and precise commercial terminology,
facilitating smooth execution of agreements and promoting international trade,
while adhering to the highest standards of quality and review.`} />
                        </div>
                        <div className="col-md-6 col-11">
                            <WorkCard position={"bottom"} img={"images/workCardImg4.png"}
                             title={"Translation of Patents for the World Intellectual Property Organization (WIPO) – 2025"}
                              desc={`In 2025, Trans-Gate translated patents for the World Intellectual Property
Organization (WIPO), the international agency specializing in intellectual
property and patents. We focused on technical accuracy and scientific
terminology to ensure the protection of inventors’ and companies’ rights,
meeting deadlines while delivering high-quality translations subject to
meticulous review for consistency and legal precision.`} />
                        </div>
                        <div className="col-md-6 col-11">
                            <WorkCard position={"top"} img={"images/workCardImg5.png"}
                             title={""}
                              desc={``} />
                        </div>
                        <div className="col-md-6 col-11">
                            <WorkCard position={""} img={"images/workCardImg6.png"}
                             title={"Academic Consulting for PhD Researchers – King Abdulaziz University, Saudi Arabia – 2024"}
                              desc={`In 2024, Trans-Gate provided comprehensive consulting to several PhD
students at King Abdulaziz University, Saudi Arabia. Our services included
support in research design, data analysis, and professional drafting of
research chapters. We emphasized enhancing academic writing quality
and ensuring clarity and coherence of ideas, helping researchers elevate
their work to meet publication and academic review standards.`} />
                        </div>
                        <div className="col-md-6 col-11">
                            <WorkCard position={"bottom"} img={"images/workCardImg7.png"}
                             title={"Academic Consulting for Researchers – King Saud University, Saudi Arabia – 2024"}
                              desc={`In the same year, we provided advanced academic consulting for
researchers at King Saud University, Saudi Arabia, including support in
study preparation, scientific review, and guidance to improve research
quality. Our team focused on practical solutions to enhance result
analysis, organize references, and draft conclusions with academic
precision, enabling researchers to submit rigorous studies aligned with
national and international university standards.`} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
