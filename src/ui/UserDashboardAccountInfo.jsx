/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./Button";
import { useUpdateNameAndAvatar } from "../features/profiles/useUpdateNameAndAvatar";
import { useProfile } from "../features/profiles/useProfile";

function UserDashboardAccountInfo() {
  const [fullName, setFullName] = useState();
  const [avatar, setAvatar] = useState();
  const { isUpdating, updateUser } = useUpdateNameAndAvatar();
  const { isLoadingProfile, userProfile } = useProfile();

  if (isLoadingProfile) return null;
  const userId = userProfile.userAuthId;
  const userCurrentName = userProfile.userFullName;
  const userEmail = userProfile.userEmail;

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { userId, fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      },
    );
  }

  function handelCancel() {
    // when the user clicks on the cancel-btn then reset these
    setFullName(userCurrentName);
    setAvatar(null);
  }

  return (
    <div className="w-full space-y-5 bg-gray-100 p-4 dark:bg-gray-900 dark:text-white sm:p-8">
      <h1 className="text-2xl font-semibold dark:text-white sm:text-3xl">
        Update your account information
      </h1>
      <div className="rounded-lg bg-white p-6 dark:bg-gray-800  dark:text-white ">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* email input */}
          <div className="flex flex-wrap    items-center justify-between ">
            <label htmlFor="email" className="me-3 block text-sm font-medium ">
              Email address
            </label>

            <input
              value={userEmail}
              type="email"
              disabled="true"
              className="relative w-[230px] appearance-none rounded-md   border border-gray-300 bg-gray-800 px-3 py-2 placeholder-gray-400 disabled:bg-gray-200 dark:text-white  dark:disabled:bg-gray-700  sm:w-[350px] sm:text-sm   xl:w-[700px]"
            />
          </div>
          {/* full name input */}
          <div className="flex flex-wrap    items-center justify-between ">
            <label
              htmlFor="fullName"
              className="me-8 block text-sm font-medium "
            >
              Full Name
            </label>

            <input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isUpdating}
              type="text"
              required
              className="relative w-[230px] appearance-none rounded-md border   border-gray-300 px-3 py-2 text-white placeholder-gray-400 hover:border hover:border-blue-600 focus:outline focus:outline-blue-600 disabled:cursor-not-allowed disabled:bg-gray-700 dark:bg-gray-800 sm:w-[350px] sm:text-sm   xl:w-[700px]"
              placeholder="Enter your fullName"
            />
          </div>

          <div className="flex flex-wrap  items-center justify-between ">
            <label htmlFor="avatar" className="me-6 block text-sm font-medium ">
              User Avatar
            </label>
            <input
              type="file"
              // id="avatar"
              // accept="image/*"
              disabled={isUpdating}
              onChange={(e) => setAvatar(e.target.files[0])}
              className="w-[230px] text-sm file:mr-4 file:rounded-md  file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 file:disabled:bg-gray-700 file:dark:text-white sm:w-[350px]  xl:w-[700px]"
            />
          </div>
          <hr />
          <div className="flex flex-wrap justify-center space-x-0   space-y-3 sm:justify-end sm:space-x-2 sm:space-y-0 ">
            <Button
              className="w-full disabled:bg-gray-700 sm:w-auto "
              type="primary"
              disabled={isUpdating}
            >
              Update account
            </Button>
            <button
              type="reset"
              className="w-full rounded-md border-2 border-gray-400 bg-transparent px-4 py-2 font-semibold text-gray-400 transition-all hover:border-transparent hover:bg-gray-500 hover:text-white disabled:cursor-not-allowed sm:w-auto"
              onClick={handelCancel}
            >
              Cancel
            </button>
            {/* <Button
              onClick={handelCancel}
              className="w-full sm:w-auto "
              type="secondary"
            >
              Cancel
            </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDashboardAccountInfo;
