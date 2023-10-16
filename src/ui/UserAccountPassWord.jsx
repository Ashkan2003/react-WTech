/* eslint-disable no-unused-vars */
import { useUpdateUserPassword } from "../features/authentication/useUpdateUserPassword";
import Button from "./Button";
import { useForm } from "react-hook-form";

function UserAccountPassWord() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { isUpdating, updateUserPassword } = useUpdateUserPassword();

  function onSubmit({ password }) {
    console.log(password, "aa");
    updateUserPassword(password, { onSettled: reset() });
  }

  function handelCancel() {
    reset();
  }

  return (
    <div className="w-full space-y-5 bg-gray-100 p-4 dark:bg-gray-900 dark:text-white sm:p-8">
      <h1 className="text-2xl font-semibold dark:text-white sm:text-3xl">
        Change your account password
      </h1>
      <div className="rounded-lg bg-white p-6 dark:bg-gray-800  dark:text-white ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* paasword input */}
          <div className="flex flex-wrap    items-center justify-between ">
            <label className=" block text-sm font-medium ">
              Enter new password
            </label>
            <div>
              <input
                id="password"
                disabled={isUpdating}
                type="password"
                required
                className="relative  w-[230px] appearance-none rounded-md border   border-gray-300 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600 disabled:cursor-not-allowed disabled:bg-gray-700 dark:bg-gray-800 sm:w-[350px] sm:text-sm   xl:w-[700px]"
                placeholder="●●●●●●●●●●"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
              <p className="block text-red-600">{errors?.password?.message}</p>
            </div>
          </div>
          {/* confirm password input */}
          <div className="flex flex-wrap    items-center justify-between ">
            <label className="me-3 w-[140px]  text-sm font-medium ">
              Confirm password
            </label>
            <div>
              <input
                id="passwordConfirm"
                disabled={isUpdating}
                type="password"
                required
                className="relative w-[230px] appearance-none rounded-md border   border-gray-300 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600 disabled:cursor-not-allowed disabled:bg-gray-700 dark:bg-gray-800 sm:w-[350px] sm:text-sm   xl:w-[700px]"
                placeholder="●●●●●●●●●●"
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    getValues().password === value || "Passwords need to match",
                })}
              />
              <p className="mb-5 text-red-600">
                {errors?.passwordConfirm?.message}
              </p>
            </div>
          </div>

          <hr />
          <div className="flex flex-wrap justify-center space-x-0   space-y-3 sm:justify-end sm:space-x-2 sm:space-y-0 ">
            <Button
              className="w-full disabled:bg-gray-700 sm:w-auto "
              type="primary"
              disabled={isUpdating}
            >
              Change password
            </Button>
            <button
              type="reset"
              className="w-full rounded-md border-2 border-gray-400 bg-transparent px-4 py-2 font-semibold text-gray-400 transition-all hover:border-transparent hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed sm:w-auto"
              onClick={handelCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserAccountPassWord;
