// note that for all read,delete,update,create (crud) you need RLS-policies-Authenication // go to supabase.com > Authentication > Policies > and create new Policies 

import supabase from "./supabase";


export async function getCourse(id) {// this function is for geting a single course from supabase by its id
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", id) // get only one-row from its id
      .single(); // we use this when the data is a single object and dont need to array
  
    if (error) {
      console.error(error);
      throw new Error("course not found");
    }
    
    return data;
  }


export async function getCourses(numOfCourses) { // this function is for getting courses-table from supabase// it return a array of obj

    //we write this code from the supabase-account > api-Doc > cabins > read All rows
    const { data, error } = await supabase
        .from('courses')
        .select('*') // with the * we get all the rows
        .range(0, numOfCourses) //optional//if we dont write then returns all of the rows// with the range method we select the num of the rows to fetch of the array-courses 

    if (error) {
        console.error("error")
        throw new Error("Courses coud not be load")
    }
    return data
}

export async function getFilteredCourses(filter, sortBy) { // this function is for getinng courses with filters

    let query = supabase
        .from('courses')
        .select("*")

    // the stack for sorting and filtering are in the CoursesFilter.jsx-file
    // filtering if(filter) was trusly-value => overwrite the query
    if (filter) query = query.eq(filter.field, filter.value) // if the filter was trusly-value then set the query to query.eq("supabase-row-item-key", value) for example query.eq("stack", "frontend")

    // sorting if(sortBy) was trusly-value => overwrite the query
    // the order-method is a supabase-method for ordreing its a recepy to folow
    if (sortBy.field) query = query.order(sortBy.field, { ascending: sortBy.direction === "low" })
    
    const { data, error } = await query

    if (error) {
        console.error("error")
        throw new Error("Courses coud not be load")
    }

    return data
}