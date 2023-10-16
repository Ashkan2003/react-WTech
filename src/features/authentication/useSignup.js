/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCreateProfile from "../profiles/useCreateProfile";

export function useSignup() {
    // when the user sign up call the createProfile-function and send the user information to create a new profile-row  in the profiles-table
    // we do this beacus we need to acces the user-information easily from the subpase
    const { isLoadingCreatingProfile, createProfile } = useCreateProfile();

    const navigate = useNavigate()

    const { mutate: singup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            let userAuthId = user.user.id
            let userFullName = user.user.user_metadata.fullName
            let userEmail = user.user.email

            toast.success("Account succesfully created!")
            navigate("/main")

            console.log(user)

            createProfile(// when the sign up succesfully finished then create a profile-row in the profiles-table
                {
                    userAuthId, //this id is very unik provided by supabase when the user sighn up
                    userFullName,
                    userEmail,
                },
            )

        }

    })

    return { singup, isLoading }
}