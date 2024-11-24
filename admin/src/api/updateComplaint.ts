import axios from "axios"

export const updateComplaint=async(id:string,status:string)=>{
    const result=await axios.put("http://localhost:3000/api/complaint/update",{
        id,
        status
    })
    return result
}