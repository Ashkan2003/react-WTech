import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// this is a cutom-hhok
export function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => { // the user is the data coming from the mutationFn(the data returned from the loginApi-function)
            queryClient.setQueryData(['user'], user.user)//whit setQueryData-function we menualy set a data into the react-query-catch// so when ever this data bing downloaded from api it gets from the catch so the loading process will decrice// store the user.user-data into the react-query-catch by the key of "user"   // this is a optional-thing to do for increseing the performance of the loading the page when the user is loging-in.
            
            navigate('/main', { replace: true }) // whit replace : true we can navigate back
        },
        onError: err => {
            console.log('ERROR', err)
            toast.error("Provided email or password are incorrect")
        }
    })

    return { login, isLoading }
}