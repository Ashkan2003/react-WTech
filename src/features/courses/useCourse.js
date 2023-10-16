import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getCourse } from "../../services/apiCourses"

export function useCourse() {

    const { courseId } = useParams()
    const {
        isLoading,
        error,
        data: course
    } = useQuery({
        queryKey: ["course", courseId],// this is a optioanall key for access the data in other component in the catch
        queryFn: () => getCourse(courseId) // the queryFn : pass the function who will fetch the data from the api
    })
    
    return { isLoading, error, course }
}


