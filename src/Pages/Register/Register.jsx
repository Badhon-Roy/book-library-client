import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import RegisterAnimation from "../../assets/animation_lokko1dv.json"
import Lottie from "lottie-react";

const Register = () => {
    const { createUser, userProfile } = useContext(AuthContext)
    const [errorMassage, setErrorMassage] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setErrorMassage("Password must be at least 6 characters");
            return;
        }
        else if (!/^(?=.*[a-z]).*$/.test(password)) {
            setErrorMassage("Password must have at least one Lowercase Character.");
            return;
        }
        else if(! /^(?=.*[A-Z]).*$/.test(password)){
            setErrorMassage("Password must have at least one Uppercase Character.")
            return;
        }
        else if(! /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)){
            setErrorMassage("Password must contain at least one Special Symbol.")
            return;
        }
        else {
            setErrorMassage('');
        }

        createUser(email, password)
            .then(res => {
                userProfile(name, image)
                    .then(res => {
                        console.log(res.user);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                console.log(res?.user);
                navigate(location?.state ? location.state : '/')
                swal("Good job", "Register successful", "success").then(() => {
                    window.location.reload();

                })
            })
            .catch(error => {
                setErrorMassage(error.message)
            })
    }



    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="bg-base-200  md:flex items-center">
             <div className="flex-1 md:block hidden">
                <Lottie
                    animationData={RegisterAnimation}
                    loop={true}
                    autoplay={true}
                />
            </div>
            <div className="flex-1 md:w-2/4 mx-auto py-20 px-4">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-8">Please Register</h1>
                </div>
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Image URL</span>
                                </label>
                                <input type="text" name="image" placeholder="image url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="text-xl mt-2">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-xl mt-2">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder="password" className="input input-bordered w-full" required />

                                    <p className="absolute right-5 top-4 text-xl" onClick={handleShowPassword}>
                                        {
                                            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </p>
                                </div>


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-secondary text-xl text-white">Register</button>
                            </div>
                        </form>
                        {
                            errorMassage && <p className="text-red-500">{errorMassage}</p>
                        }
                        <p>You have an account? <Link to="/login"> <span className="text-blue-600 font-bold cursor-pointer text-[18px]">Login</span></Link> </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Register;