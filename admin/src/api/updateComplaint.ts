import axios from "axios"

export const updateComplaint=async(id:string,status:string)=>{
    console.log(id+" "+status)
    const result=await axios.put("http://localhost:3000/api/update",{
        id,
        status
    })
    return result
}