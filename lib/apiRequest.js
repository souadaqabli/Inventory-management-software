import toast from "react-hot-toast";

export async function makePostRequest(
    setLoading, 
    endpoint, 
    data, 
    ressourceName, 
    reset
) {
    try {
        setLoading(true);
        const baseUrl = "http://localhost:3000";
        const response= await fetch(`${baseUrl}/${endpoint}` ,{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        })
        if (response.ok){
            console.log(response)
            setLoading(false)
            toast.success(`New ${ressourceName} created Successfully!`)
            reset();
        }else{
            setLoading(false)
            toast.error("Something went wrong")
        }
        
     } catch (error) {
        setLoading(false)
        console.log(error)
     } 
}

export async function makePutRequest(
    setLoading, 
    endpoint, 
    data, 
    ressourceName, 
    redirect,
    reset
) {
    try {
        
        setLoading(true);
        const baseUrl = "http://localhost:3000";
        const response= await fetch(`${baseUrl}/${endpoint}` ,{
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        })
        if (response.ok){
            console.log(response)
            setLoading(false)
            toast.success(`${ressourceName} updated Successfully!`)
            redirect();
        }else{
            setLoading(false)
            toast.error("Something went wrong")
        }
        
     } catch (error) {
        setLoading(false)
        console.log(error)
     } 
}