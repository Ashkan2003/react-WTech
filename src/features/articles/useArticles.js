import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../services/apiArticles";

// this is a custom-hook

export function useArticles() {

    const {
        // these states are enternal-react-query-state for manage the error or the isLoading and ect...
        isLoading,
        error,
        data: articles // the data is coming from the supabase// its an array of obj that obj contains the courses details
    } = useQuery({
        queryFn: getArticles, // the queryFn : pass the function who will fetch the data from the api
        queryKey: ["articles"] // this is a optioanall key for access the data in other component in the catch
    })
    return { isLoading, error, articles }
}