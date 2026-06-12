import axios from "axios";
import { useState , useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

let AdminSignin = () => {

    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)

    const [formData , setFormData] = useState({
        email : '' ,
        password : ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }

    const signinAdmin = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/admin/adminSignin` , 
                formData
            )
            flashMessage(response.data.type , response.data.message)

            setFormData({
                email : '' ,
                password : ''
            })

            if(response.data.type == "success"){
                navigate('/allCreatedProductPage')
            }

        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    return <>
    <div className="font-[Arial, Helvetica, sans-serif] flex flex-col justify-center items-center border-b border-solid border-[rgb(177,177,177)]">
        <img className="h-7.5 w-25 mt-5" src="../images/indexPageImages/amazon_logo3.png"/>
        <div className="h-75 max-w-[320px] flex flex-col justify-evenly items-baseline rounded-[10px] my-5 p-5 border border-solid border-[rgb(214,212,212)]">
            <p className="text-[24px]">Sign in to Admin Account</p>
            <form onSubmit={(e)=>{
                signinAdmin(e)
            }} className="h-[51%] w-full flex flex-col justify-center items-baseline">
                <p className="text-[13px] font-bold">Email</p>
                <div className="h-8 w-full rounded-[7px] mb-1.5 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="text" name="email" value={formData.email}/>
                </div>
                <p className="text-[13px] font-bold">Password</p>
                <div className="h-8 w-full text-[13px] rounded-[7px] mb-1.5 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="password" placeholder="At least 6 characters" name="password" value={formData.password}/>
                </div>
                <input className="h-7.5 w-[99%] text-[14px] py-0.5 rounded-[15px] border-none outline-none bg-[rgb(255,213,0)]" type="submit" value="Continue"/>
            </form>
        </div>
    </div>
    </>
}

export default AdminSignin;