import axios from "axios"

export const getComplaint=async()=>{
    const res=await axios.get("https://medwander-backend.vercel.app/api/complaint/get")
    return res;
}