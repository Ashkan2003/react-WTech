/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../../services/apiProfiles"
import { useUser } from "../authentication/useUser";

export function useProfile() {

  const { user } = useUser();// when the user sign up for the first time supabase create a new unic id for him(see in in the usermanagment in supabase) and then we send this id to the profile table by creating a new profile and then when the user logeed in inthe next time we get the user-profile(informations) by its unik id
  const userId = user?.id
  
  const { isLoading: isLoadingProfile, data: userProfile } = useQuery({
    queryFn: () => getProfile(userId),
    queryKey: ["userProfile"],
    enabled: !!userId //if enabled is true then this query will run if it is false this query wont run// enabled-option get only true ot false//to convert userId(it is a string) to true or false we set ! to it and one more ! to opposite it// for examle  the userId existts so !userId will be false and !!userId will be true so enabled = true so this query will run
  })
  return { isLoadingProfile, userProfile }
}


