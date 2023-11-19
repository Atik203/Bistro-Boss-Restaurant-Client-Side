import { Helmet } from "react-helmet";
import img from "../../assets/others/authentication2.png";
import bg from "../../assets/others/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  const handleLogin2 = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValid = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const backgroundImg = {
    background: `url(${bg}) lightgray 50% / cover no-repeat`,
    boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
  };

  const backgroundImg2 = {
    background: `url(${bg}) lightgray 50% / cover no-repeat`,
  };

  return (
    <div
      style={backgroundImg2}
      className="w-full h-[600px] lg:h-[800px] border"
    >
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      {/* Hide the full div on md and sm screens, show on lg and larger screens */}
      <div
        className="hidden  lg:flex w-10/12 mx-auto lg:h-[97vh] mt-10"
        style={backgroundImg}
      >
        <div className="lg:w-1/2 lg:mx-auto lg:mt-24">
          <img src={img} alt="" className="w-11/12 mx-auto" />
        </div>
        <div className="lg:w-1/2 mx-auto">
          <form onSubmit={handleLogin} className="card-body max-w-md">
            <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <LoadCanvasTemplate></LoadCanvasTemplate>
            </div>
            <div className=" mt-1 flex items-center">
              <div>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Type the captcha"
                  className="input input-bordered mr-2"
                  required
                />
              </div>
              <div>
                <button
                  onClick={handleValid}
                  className="btn btn-outline btn-success"
                >
                  validate
                </button>
              </div>
            </div>
            {disabled && (
              <did className="form-control">
                <h1 className="text-red-500">Captcha didn't match</h1>
              </did>
            )}
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn border-none hover:text-white hover:bg-gray-500 bg-[#D1A054B3]"
              >
                Login
              </button>
            </div>
            <div>
              <h1 className="mt-2 font-semibold text-center text-[#D1A054B3]">
                New here?{" "}
                <Link to={"/register"}>
                  <span className="hover:text-red-500 hover:underline cursor-pointer">
                    Create a New Account
                  </span>
                </Link>
              </h1>
              <h1 className="my-3 font-medium text-center">Or Login With</h1>
              <div className="flex items-center justify-center gap-6">
                <div className="text-4xl cursor-pointer">
                  <FaFacebook></FaFacebook>
                </div>
                <div className="text-4xl cursor-pointer">
                  <FaGoogle></FaGoogle>
                </div>
                <div className="text-4xl cursor-pointer">
                  <FaGithub></FaGithub>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Show the full div on md and sm screens, hide on lg and larger screens */}
      <div className=" lg:hidden" style={backgroundImg2}>
        <div className="w-11/12 mx-auto">
          <form onSubmit={handleLogin2} className="card-body max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none hover:text-white hover:bg-gray-500 bg-[#D1A054B3]">
                Login
              </button>
            </div>
            <div>
              <h1 className="mt-2 font-semibold text-center text-[#D1A054B3]">
                New here?{" "}
                <Link to={"/register"}>
                  <span className="hover:text-red-500 hover:underline cursor-pointer ">
                    Create a New Account
                  </span>
                </Link>
              </h1>
              <h1 className="my-3 font-medium text-center">Or Login With</h1>
              <div className="flex items-center justify-center gap-6">
                <div className="text-4xl cursor-pointer">
                  <FaFacebook></FaFacebook>
                </div>
                <div className="text-4xl cursor-pointer">
                  <FaGoogle></FaGoogle>
                </div>
                <div className="text-4xl cursor-pointer">
                  <FaGithub></FaGithub>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
