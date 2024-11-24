import axios from "axios"

export const updateComplaint=async(id:string,status:string)=>{
    const result=await axios.put("https://medwander-backend.vercel.app/api/complaint/update",{
        id,
        status
    })
    return result
}