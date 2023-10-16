// note that for all read,delete,update,create (crud) you need RLS-policies-Authenication // go to supabase.com > Authentication > Policies > and create new Policies 

import supabase from "./supabase";


export async function getArticles() { // this function is for getting courses-table from supabase// it return a array of obj

    //we write this code from the supabase-account > api-Doc > cabins > read All rows
    const { data, error } = await supabase
        .from('articles')
        .select('*') // with the * we get all the rows

    if (error) {
        console.error("error")
        throw new Error("Articles coud not be load")
    }
    return data
}