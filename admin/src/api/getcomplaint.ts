import axios from "axios"

export const getComplaint=async()=>{
    const res=await axios.get("http://localhost:3000/api/complaint/get")
    return res;
}