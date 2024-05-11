import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalState } from "../GlobalState";


function ResetTokenAPI({id}){
    
    const [userId, setUserId] = useState("")
    const [resetToken, setResetToken] = useState("")


    useEffect(()=>{
        const getResetToken =async()=>{
            try{
                const res = await axios.get(`http://localhost:8000/api/resetToken/663208c12a00f09feffe56ae`)
                console.log(res.data.userId)
                console.log(res.data.token)
            }catch(err){
                alert(err.res.data.msg)
            }

            getResetToken()
        }
    },[id])

    return{
        userId: [userId, setUserId],
        resetToken: [resetToken, setResetToken]
    }

}

export default ResetTokenAPI;