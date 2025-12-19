// import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/abfc1ea0-56f6-47a8-b323-afbc9719c964/cropped-WhatsApp_Image_2025-11-12_at_17-06-08_0162802e-remov (3).png'
import { useContext } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../Context/AuthContext/AuthContext';


export default function Login() {
    // let navigate=useNavigate();
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("AuthContext must be used within a LanguageProvider");
    }

    const { saveLoginData } = context;  
    let {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  const onSubmit=async (data:any)=>{
    try {
      let response= await axios.post('https://dummyjson.com/user/login', data);
      localStorage.setItem("token",response.data.accessToken)
      saveLoginData();
      window.location.href='https://transgetasoft.infinityfreeapp.com/';
    } catch (error:any) {
      console.log(error.message);
    }
  }
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4 col-6 text-center">
  <img src={logo}
                            width={150}
                            height={150}
                            alt="" />
                        <h2>Upload your research</h2>
                        <h3 className='text-muted fs-6 fw-lighter'>Fill in your details and upload your PDF. We will review it manually.</h3>
                        <form className='text-start' onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="text" {...register("username",{ required: "Email is required" })} className="form-control" id="exampleInputPassword1" placeholder='Enter your email address' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" {...register("password",{ required: "Password is required" })} className="form-control" id="exampleInputPassword1" placeholder='Enter your password' />
                            </div>
                            <p className='text-danger'>{errors.username?.message?.toString()||errors.password?.message?.toString()}</p>
                            <button type="submit" className="btn btn-primary d-block w-100">Login</button>
                        </form>
            </div>
        </div>
    </div>
    </>
  )
}
