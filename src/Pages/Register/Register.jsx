import { Helmet } from "react-helmet";
import img from "../../assets/others/authentication2.png";
import bg from "../../assets/others/authentication.png";
import { updateProfile } from "firebase/auth";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const axiosPublic = useAxiosPublic();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, SignInGithub, SignInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();

            Swal.fire({
              title: "Registered Success",
              text: "",
              icon: "success",
            });
            navigate("/");
            return updateProfile(user, {
              displayName: name,
            });
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, password, name);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        return updateProfile(user, {
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubLogin = () => {
    SignInGithub()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };
  const handleSignInGoogle = () => {
    SignInGoogle()
      .then((res) => {
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Registered Success",
              text: "",
              icon: "success",
            });
            navigate("/");
          }
        });
      })
      .catch((error) => console.log(error.message));
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
      className="w-full h-[600px] lg:h-[760px] border"
    >
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      {/* Hide the full div on md and sm screens, show on lg and larger screens */}
      <div
        className="hidden  lg:flex flex-row-reverse w-10/12 mx-auto lg:h-[90vh] mt-12"
        style={backgroundImg}
      >
        <div className="w-1/2 mx-auto mt-24 mr-12">
          <img src={img} alt="" className="w-full" />
        </div>
        <div className="lg:w-1/2 mx-auto ml-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body max-w-md"
          >
            <h1 className="text-2xl font-bold text-center mb-2">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email")}
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
                name="password"
                placeholder="password"
                {...register("password")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none hover:text-white hover:bg-gray-500 bg-[#D1A054B3]">
                Register
              </button>
            </div>
            <div>
              <h1 className="mt-2 font-semibold text-center text-[#D1A054B3]">
                Already registered?{" "}
                <Link to={"/login"}>
                  <span className="hover:text-red-500 hover:underline cursor-pointer">
                    Go to log in
                  </span>
                </Link>
              </h1>
              <h1 className="my-3 font-medium text-center">Or Login With</h1>
              <div className="flex items-center justify-center gap-6">
                <div className="text-4xl hover:text-blue-500 cursor-pointer">
                  <FaFacebook></FaFacebook>
                </div>
                <div
                  onClick={handleSignInGoogle}
                  className="text-4xl hover:text-red-500 cursor-pointer"
                >
                  <FaGoogle></FaGoogle>
                </div>
                <div
                  onClick={handleGithubLogin}
                  className="text-4xl hover:text-purple-500 cursor-pointer"
                >
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
          <form
            onSubmit={handleRegister}
            className="card-body max-w-md mx-auto"
          >
            <h1 className="text-2xl font-bold text-center mb-2">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none hover:text-white hover:bg-gray-500 bg-[#D1A054B3]">
                Register
              </button>
            </div>
            <div>
              <h1 className="mt-2 font-semibold text-center text-[#D1A054B3]">
                Already Registered?{" "}
                <Link to={"/login"}>
                  <span className="hover:text-red-500 hover:underline cursor-pointer ">
                    Go to log in
                  </span>
                </Link>
              </h1>
              <h1 className="my-3 font-medium text-center">Or Login With</h1>
              <div className="flex items-center justify-center gap-6">
                <div className="text-4xl hover:text-blue-500 cursor-pointer">
                  <FaFacebook></FaFacebook>
                </div>
                <div
                  onClick={handleSignInGoogle}
                  className="text-4xl hover:text-red-500 cursor-pointer"
                >
                  <FaGoogle></FaGoogle>
                </div>
                <div
                  onClick={handleGithubLogin}
                  className="text-4xl hover:text-purple-500 cursor-pointer"
                >
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

export default Register;
