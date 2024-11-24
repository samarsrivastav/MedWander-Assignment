import axios from "axios"

export const deleteComplaint=async(id:string)=>{
    const result=await axios.delete("https://medwander-backend.vercel.app/api/complaint/delete",{
        data:{id}
    })
    return result
}