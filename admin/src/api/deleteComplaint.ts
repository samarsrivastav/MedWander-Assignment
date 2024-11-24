import axios from "axios"

export const deleteComplaint=async(id:string)=>{
    const result=await axios.delete("http://localhost:3000/api/complaint/delete",{
        data:{id}
    })
    return result
}