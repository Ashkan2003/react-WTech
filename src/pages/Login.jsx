import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../features/authentication/useLogin";
import SpinnerMini from "../ui/SpinnerMini";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return; // if the user doesnot passed the email and the password then do noting

    login(
      // the login-function is the react-query mutate-function so we can use functions like "onSuccess" or "onError" or "onSettled" by in. we can use these-finction by adding "," and writing a second-optional-argument that is a obj to write these-functions into it
      { email, password },
      {
        onSettled: () => {
          // the onSettled-func is like onSuccess-func but its defference is that when ever the mutate-func succeded or failed(error) its code will run
          // when ever the user loged-in or failed to log-in, clear these states(clear inputs)
          setEmail("");
          setPassword("");
          localStorage.setItem("coursesInCart", JSON.stringify([])); // this is for the time when the user for example swich bettven account and we dont want the localStorage to save another user shopping cart courses in to another user account// so we reset it to the []
        },
      },
    );
  }

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-900 py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800  px-4 py-8 shadow sm:rounded-lg sm:px-10">
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
              Login to your account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  type="email"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 bg-gray-800 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600  sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm font-semibold text-indigo-500"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {!isLoading ? "Login" : <SpinnerMini />}
              </button>
            </div>
          </form>
          <hr className="mx-1 my-4 border-indigo-700" />
          <p className="text- font-semibold text-blue-600">
            dont have an account ?
            <Link to="/signUp" className="text-blue-400">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
