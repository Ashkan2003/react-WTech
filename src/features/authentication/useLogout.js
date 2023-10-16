/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth"

function useLogout() {
    // the logoutApi-function will remove the user-login-information like session from the supabase-catch
    // and the queryClient.removeQueries() will remove the user-login-information like session from the react-query-catch

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi, // becuse of logoutApi that delete the data from catch we use useMutation
        onSuccess: () => {
            queryClient.removeQueries();// this will delete the user-log-in information emiditly from the catch
            navigate("/login", { replace: true })
        }
    })



    return { logout, isLoading }
}

export default useLogout
