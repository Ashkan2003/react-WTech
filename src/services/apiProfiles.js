/* eslint-disable no-unused-vars */
import supabase, { supabaseUrl } from "./supabase";
// the userAuthId in the supabase is the uniq id created by the supabase auth when the user first time sign up

export async function getProfile(userId) { // this function is for getting one single profile by its id
    let { data, error } = await supabase
        .from('profiles')
        .select("*")
        .eq("userAuthId", userId) // get only one-row from its id
        .single(); // we use this when the data is a single object and dont need to array

    if (error) {
        console.error(error);
        throw new Error("user not found");
    }
    return data;
}

export async function createProfile(userInformation) { // this function is for creating a new userprofile and sending these informations for it 
    const userAuthId = userInformation.userAuthId
    const userEmail = userInformation.userEmail
    const userFullName = userInformation.userFullName

    console.log(userAuthId, userEmail, userFullName, "pppp", userInformation)
    const { data, error } = await supabase
        .from('profiles')
        .insert([
            { userAuthId: userAuthId, userFullName: userFullName, userEmail: userEmail },
        ])
        .select()

    if (error) {
        console.error(error);
        throw new Error("profile could not br created");
    }
    return data;
}

export async function updateProfileCourses(informations) { // this function is for updating  user-profile-courses by its id
    const userId = informations.userId
    const currentCoursesIdInSupabase = informations.currentCoursesIdInSupabase
    const userCourses = removeDuplicates(informations.coursesIdInCart)//the information.CoursesIdInCart is an array of ids but it may have duplicated-items like([1,2,2,3]) so we dont to send it like this to the data base so we write a function to delete the dublicated-items 

    function removeDuplicates(array) { // this function is for removing duplicates-items from an array 
        return array.filter((item, index) => array.indexOf(item) === index)
    }


    const { data, error } = await supabase
        .from('profiles')
        .update({ userSupabaseCourses: [...currentCoursesIdInSupabase, ...userCourses] })
        .eq("userAuthId", userId)
        .select()

    if (error) {
        console.error(error);
        throw new Error("can not update profile-courses");
    }
    return data;
}

export async function updateProfileNameAndAvatar(informations) {
    const userId = informations.userId
    const fullName = informations.fullName
    const avatar = informations.avatar

    if (fullName) { // if the fullName exist => user want to update his fullName
        const { data, error } = await supabase
            .from('profiles')
            .update({ userFullName: fullName })
            .eq("userAuthId", userId)
            .select()

        if (error) {
            console.error(error);
            throw new Error("can not update profile-fullName");
        }
    }
    if (avatar) { // if the avatar exists => user want to upadate his avatar-img
        //  if the user want to uplaod an avatar(avatar exists) then run the below code
        // 1. upload the avatar img
        console.log(avatar, "dd")
        const fileName = `avatar-${Math.random()}` // we need a unic-file-name for the avatar-img in the supabase
        const { error: storageError } = await supabase
            .storage
            .from("userAvatar-img")
            .upload(fileName, avatar)

        if (storageError) throw new Error(storageError.message, "zzz")

        // 2.update the userAvatar-img-url in profiles tables
        const { data, error: error2 } = await supabase
            .from('profiles')
            .update({ userAvatar: `${supabaseUrl}/storage/v1/object/public/userAvatar-img/${fileName}` })
            //https://gzmccmobazpybotcckcd.supabase.co/storage/v1/object/public/userAvatar-img/02.jpg
            .eq("userAuthId", userId)
            .select()

        if (error2) {
            console.error(error2);
            throw new Error("can not update profile-avatar");
        }

    }

}