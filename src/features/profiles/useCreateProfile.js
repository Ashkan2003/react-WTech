/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query"
import { createProfile as createProfileApi } from "../../services/apiProfiles"
import { toast } from "react-hot-toast";

function useCreateProfile() {


    const { mutate: createProfile, isLoading: isLoadingCreatingProfile } = useMutation({
        mutationFn: (userAuthId, userFullName, userEmail) => createProfileApi(userAuthId, userFullName, userEmail),
        onSuccess: () => {
            // when ever the mutationFn was successfull then run this code
            toast.success("New profile successfull created"); //when ever the mutationFn was successfull then run this code show this message
            // queryClient.invalidateQueries({ queryKey: ["cabins"] }); // invalidate the data by its key in the catch to re-render the ui
        },
        onError: err => {
            console.log('ERROR', err)
            toast.error("Provided email or password are incorrect")
        }
    })



    return { isLoadingCreatingProfile, createProfile }
}

export default useCreateProfile
