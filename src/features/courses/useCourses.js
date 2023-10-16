import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../services/apiCourses";

// this is a custom-hook

export function useCourses(numOfCourses) {
    //numOfCourses : the number of courses to show to the uses


    const {
        // these states are enternal-react-query-state for manage the error or the isLoading and ect...
        isLoading,
        error,
        data: courses // the data is coming from the supabase// its an array of obj that obj contains the courses details
    } = useQuery({
        queryFn: () => getCourses(numOfCourses), // the queryFn : pass the function who will fetch the data from the api
        queryKey: ["courses"] // this is a optioanall key for access the data in other component in the catch
    })
    return { isLoading, error, courses }
}