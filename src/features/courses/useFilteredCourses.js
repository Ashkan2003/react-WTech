/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query"
import { getFilteredCourses } from "../../services/apiCourses"
import { useSearchParams } from "react-router-dom"

function useFilteredCourses() {
    const [searchParams] = useSearchParams()

    // filter
    const filterValue = searchParams.get("stack")
    const filter = !filterValue || filterValue === "all"
        ? null // if the filterValue geted from the URL-search-params was empty or the filterValue was "all" => it means that we want all the courses so dont filter
        : { field: 'stack', value: filterValue } // else => create an obj whit field(supabase-row-item-key) and value(comes from the URL)

    // sort
    const sortByRaw = searchParams.get('sort')
    const [field, direction] = sortByRaw === null ? ["id", "high"] : sortByRaw.split("-") //if the sortByRaw was null then run the first option of the sortBy (read the CoursesSortBy.jsx file) // split the sortByRaw into two parts and then store it as a array
    const sortBy = { field, direction } // store field and direction as a obj in the sortBy


    const {
        isLoading: isLoading,
        data: filteredCourses,
        error
    } = useQuery({
        queryFn: () => getFilteredCourses(filter, sortBy),
        queryKey: ["filteredCourses", filter, sortBy]
    })

    return { isLoading, filteredCourses, error }
}

export default useFilteredCourses
