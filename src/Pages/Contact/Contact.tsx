import Breadcrumb from '../../Component/Breadcrumb/Breadcrumb';
export default function Contact() {
    return (
        <>
            <Breadcrumb pageName={"Contact"} />
            <div className="container">
                <div className="row">
                    <h2>Get In Touch</h2>
                    <div className="col-12">
                        <div className="row justify-content-center contactDetails">
                            <div className="col-md-4 col-8"></div>
                            <div className="col-md-4 col-8"></div>
                            <div className="col-md-4 col-8"></div>
                        </div>
                    </div>
                    <div className="col-12">
                        <form>
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-11">
                                    <div className="mb-3">
                                        <label htmlFor="fName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="fName" aria-describedby="firstNameHelp" placeholder='First Name'/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-11">
                                    <div className="mb-3">
                                        <label htmlFor="lName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lName" aria-describedby="lastNameHelp" placeholder='Last Name' />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label ">Subject</label>
                                <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" placeholder='Subject' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea className="form-control" id="message" rows={3} placeholder='Your Message'></textarea>
                            </div>
                            <button type="submit" className="btn bg-primary text-white">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
