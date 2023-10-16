/* eslint-disable no-unused-vars */
// we used talwindCss for styling this project //npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p
// we used react-router-dom v6(new) to routing this project// npm i react-router-dom
// we used react-icons npm i
// we used contex-api for global-state-managment
//we used react-query for remote-state-managment// npm i @tanstack/react-query@4
//npm i @tanstack/react-query-devtools// this is for react-query-tools
//npm install --save @supabase/supabase-js// the supabase project-password = ashkanPC2003
//npm i react-hot-toast // this library is for showing good-notification
// we use react-spinners-css to provide spinners//npm i react-spinners-css
//npm i tiny-slider-react //for slidering the articles
// npm i react-hook-form // this library is for managing form
//npm i react-scroll // this is for the scroll functinality of the site
//npm i react-countup // this is for animation count up of the numbers of lables
//npm install recharts
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DarkModeProvider } from "./context/DarkModeContext";
import SpinnerFullPage from "./ui/SpinnerFullPage";

// import Main from "./pages/Main";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import UserDashboard from "./pages/UserDashboard";
// import CourseDetails from "./pages/CourseDetails";
// import ShoppingCart from "./pages/ShoppingCart";
// import AllCourses from "./pages/AllCourses";
// import ProtectedRouteLayout from "./pages/ProtectedRouteLayout";
// import Signup from "./pages/Signup";
// import ProtectedRoute from "./ui/ProtectedRoute";
// import UserDashboardHome from "./ui/UserDashboardHome";
// import UserDashboardSettings from "./ui/UserDashboardSettings";

// this is the way to use lazy-loading in the loading of pages so it will incrise the speed and performance
const Main = lazy(() => import("./pages/Main"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const CourseDetails = lazy(() => import("./pages/CourseDetails"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart"));
const AllCourses = lazy(() => import("./pages/AllCourses"));
const Signup = lazy(() => import("./pages/Signup"));
const ProtectedRouteLayout = lazy(() => import("./pages/ProtectedRouteLayout"));
const ProtectedRoute = lazy(() => import("./ui/ProtectedRoute"));
const UserDashboardHome = lazy(() => import("./ui/UserDashboardHome"));
const UserAccountPassWord = lazy(() => import("./ui/UserAccountPassWord"));
const UserDashboardAccountInfo = lazy(() =>
  import("./ui/UserDashboardAccountInfo"),
);

const queryClient = new QueryClient({
  // this is a resepy to follow to run react-query
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0, // its the time to refresh for example if data changes in the server side then refresh it after 0 seconds
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      {/*this is a contextApi to provide the darkmode to all the components in the app */}
      <QueryClientProvider client={queryClient}>
        {/*provide(enabel) react-query for the entire project */}
        <ReactQueryDevtools initialIsOpen={false} />
        {/*optionall // enable react-query-dev-tools */}
        <Suspense fallback={<SpinnerFullPage />}>
          {/*the Suspence is a way to wait the lazy-loaded cmponents while its loading from the server then show the fallback(the fallback can be a spinnner or a simple message) */}
          <Routes>
            {/* we have to diffrent layout : 1)AppLayout 2)ProtectedRouteLayout */}
            {/* this route is for public users */}
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="main" />} />
              <Route path="main" element={<Main />} />
              <Route path="allCourses" element={<AllCourses />} />
              <Route
                path="courseDetails/:courseId"
                element={<CourseDetails />}
              />
            </Route>
            {/* this route is for the users that logged in  */}
            <Route
              element={
                <ProtectedRoute>
                  <ProtectedRouteLayout />
                </ProtectedRoute>
              }
            >
              <Route path="shoppingCart" element={<ShoppingCart />} />
              <Route path="userDashboard" element={<UserDashboard />}>
                <Route
                  index
                  path="userDashboard/Home"
                  element={<UserDashboardHome />}
                />
                <Route
                  path="userDashboard/AccountInfo"
                  element={<UserDashboardAccountInfo />}
                />
                <Route
                  path="userDashboard/UserAccountPassWord"
                  element={<UserAccountPassWord />}
                />
              </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Toaster //this is a recepy to follow to write this library these are the settings for enabling react-hot-toast
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
