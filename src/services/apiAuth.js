import supabase from "./supabase";

export async function signup({ fullName, email, password }) {// this function is for signing up the new users
    const { data, error } = await supabase.auth.signUp({
        email, password, options: { // this options is a optionall thing in supabase to give the new-created-user optainal-information
            data: {
                fullName,
                avatar: '',
                userSupabaseCourses: [],
            }
        }
    })

    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function login({ email, password }) { // this function is for sending the user email and password from the login-form(ui) to the supabase for login the user(the user who have a account previosly )
    let { data, error } = await supabase.auth.signInWithPassword({ // we get this code from supabase => API Doc => userManagement 
        email,
        password
    })

    if (error) {
        throw new Error(error.message)
    }

    return data

    // this data will return an object of 1.session and 2.user 
    // session: {access_token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6InV0L3JNYnBtRTQ4N2JFaj…WQifQ.of50IiDvYdSh8caxH2wKLC4Ah2sD1pFu5-xjZ2-ClVw', token_type: 'bearer', expires_in: 3600, expires_at: 1693992789, refresh_token: 'xrmtKWYAeHBxGBlYlrRL1A', …}
    // user: {id: 'c119d42e-4e97-40b1-90c8-36264b91f295', aud: 'authenticated', role: 'authenticated', email: 'ashkanpc2003@gmail.com', email_confirmed_at: '2023-09-06T06:52:05.344542Z', …}
}

export async function logout() { // this function is for loging out the user
    const { error } = await supabase.auth.signOut() // we write this code from the supabase

    if (error) {
        throw new Error(error.message)
    }
}

export async function getCurrentUser() { // this function is for getting user loged in when ever the user for ezaple "reload the page" or "come back 2 hours later" make him steel loged in

    // the session is the data coming from the login-function which is stored in the local-storage
    const { data: session } = await supabase.auth.getSession() // the getSession-func is a supabase-method to get the loged-in-user-informetion from the local-storage 

    if (!session.session) return null // if session is not exists inthe local-storage in means that there is not any user loged-in previosly

    const { data, error } = await supabase.auth.getUser() // we get this code from the supabase. the getUser-function is for getting the current-loged-in-user-information from the supabase 



    if (error) {
        throw new Error(error.message)
    }

    // console.log(data?.user,"ddddddddddddd")
    return data?.user // we use optional chaing for if the data exists(if there is a current-user-loged-in) return data.user
}


export async function updateCurrentUserPassword(newPassword) { // this function is for updating user password

    const { data, error } = await supabase.auth.updateUser({
        password: newPassword
    }) // we get this code from supabase 

    if (error) {
        throw new Error(error.message)
    }

    return data
}



