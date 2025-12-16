import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/cropped-WhatsApp_Image_2025-11-12_at_17-06-08_0162802e-remov (3).png'


export default function FreeTrans() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    return (
        <>
            <div className="freeTransContainer">
                <Button className='rounded-pill shadow' variant="primary" onClick={handleShow}>
                    Launch vertically centered modal
                </Button>
                <Modal show={show} centered  onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>

                    <Modal.Body className='text-center'>
                        <img src={logo}
                            width={150}
                            height={150}
                            alt="" />
                        <h2>Upload your research</h2>
                        <h3 className='text-muted fs-6 fw-lighter'>Fill in your details and upload your PDF. We will review it manually.</h3>
                        <form className='text-start'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your full name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your email address' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your mobile number' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Upload research (PDF)</label>
                                <input className="form-control" type="file" id="formFile" accept=".pdf,application/pdf" />
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                            <Button variant="secondary" className='mx-3' onClick={handleClose}>
                                Close
                            </Button>

                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
