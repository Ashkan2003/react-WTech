// npm install --save @supabase/supabase-js
// we write this code from supabase-account > initializing
// note that for all read,delete,update,create (crud) you need RLS-policies-Authenication // go to supabase.com > Authentication > Policies > and create new Policies 
// *important*// we set every RLS-policies to "Applied to :authenticated" so the only users that have singup and loged-in can see the datas of the supasbase on the app
// fo example if a haker access the file in incpect-element and change the code can see the forexample tables in login-page whit out loging-in so the sitteng up will prevent this

import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://gzmccmobazpybotcckcd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6bWNjbW9iYXpweWJvdGNja2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMjE2OTUsImV4cCI6MjAxMDY5NzY5NX0.P0GECcS-QWlpLcfc6rnluBmb-fk3xLHVrc90MRmomE4" // supabaseKey. we get this from our supabase-account from setting-API-projectApI
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase