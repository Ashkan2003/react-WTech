/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignup } from "../features/authentication/useSignup";
import SpinnerMini from "../ui/SpinnerMini";


// Email regex: /\S+@\S+\.\S+/

function Signup() {
  const { register, formState, getValues, handleSubmit, reset } = useForm(); // we used react-hook-form to manage out form
  const { errors } = formState;
  const { isLoading, singup } = useSignup();

  function onSubmit({ fullName, email, password }) {
    //destructure the data coming from the react-hook-from handleSubmit-function to {fullName, email, password} we need these to pass to signup-function//we dont need passwordConfirm// the data is the intire data coming from the inputs-value
    singup(
      { fullName, email, password }, // when the user submit the form then send these information to the signup-function
      {
        onSettled: () => reset, // when the work finished with success or error then reset the form with react-hook-form reset-function
      },
    );
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-900 sm:px-6 lg:px-8">
      <div className="mt-8  sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800  px-9 py-8 shadow sm:rounded-lg sm:px-16">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <img
              src="/brand-logo.png"
              className="w-24 rounded-full bg-gray-600 p-2"
              alt=""
            />
            <Link to="/main" className="text-3xl font-bold text-blue-600">
              W<span className="text-red-600">Tech</span>
            </Link>
          </div>
          <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className=" text-center text-3xl font-extrabold text-white">
              Create a new account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* email input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="Enter your email address"
                  id="email"
                  type="email"
                  disabled={isLoading}
                  {...register("email", {
                    required: "this field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please provide a valid email address",
                    },
                  })}
                />
                <p className="text-red-600">{errors?.email?.message}</p>
              </div>
            </div>
            {/* full name input */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="Enter your full name"
                  id="fullName"
                  disabled={isLoading}
                  type="text"
                  {...register("fullName", {
                    required: "this field is required",
                  })}
                />
                <p className="text-red-600">{errors?.fullName?.message}</p>
              </div>
            </div>
            {/* password input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="Enter your password"
                  id="password"
                  disabled={isLoading}
                  type="password"
                  {...register("password", {
                    required: "this field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimom of 8 characters",
                    },
                  })}
                />
                <p className="text-red-600">{errors?.password?.message}</p>
              </div>
            </div>
            {/* confirm password */}
            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-medium text-white"
              >
                Repeat your password
              </label>
              <div className="mt-1">
                <input
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="Enter your password"
                  id="passwordConfirm"
                  disabled={isLoading}
                  type="password"
                  {...register("passwordConfirm", {
                    required: "this field is required",
                    validate: (
                      value, // the value is the passwordConfirm and by getValues-function we access to all input-valus tha has registered and we acces to password-input-value by getValues().password
                    ) =>
                      value === getValues().password ||
                      "Passwords need to match",
                  })}
                />
                <p className="text-red-600">
                  {errors?.passwordConfirm?.message}
                </p>
              </div>
            </div>

            <p className=" font-semibold text-blue-600">
              have an account ?
              <Link to="/login" className="text-blue-400">
                {" "}
                Login
              </Link>
            </p>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {!isLoading ? "Sign up" : <SpinnerMini />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
