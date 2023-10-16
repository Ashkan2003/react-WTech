import { useMutation } from "@tanstack/react-query"
import { updateProfileCourses as updateProfileCoursesApi } from "../../services/apiProfiles"
// import { useUser } from "../authentication/useUser"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

function useUpdateProfileCourses() {

    const navigate = useNavigate()

    const { isLoading:isLoadingUpdatingProfileCourses, mutate:updateProfileCourse } = useMutation({
        mutationFn: (userId,currentCoursesIdInSupabase,coursesIdInCart) => updateProfileCoursesApi(userId,currentCoursesIdInSupabase,coursesIdInCart),
        onSuccess: () => {
            toast.success("Course succesfully bought😁!")
            navigate("/userDashboard/userDashboard/Home")
        },
        onError: (err) => toast.error(err.message),

    })
    return {isLoadingUpdatingProfileCourses,updateProfileCourse}
}

export default useUpdateProfileCourses
