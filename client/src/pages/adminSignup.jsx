import { Link, useNavigate } from "react-router-dom";
import { useState , useContext } from 'react';
import axios from 'axios';
import { messageContext } from "../context/flashMessageContext";

let AdminSignup = () => {

    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)

    const [formData , setFormData] = useState({
        fullname : '' ,
        email : '' ,
        password : ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        })
    }

    const registerAdmin = async (e) => {
        e.preventDefault()
        try{

            if(formData.fullname.length < 5 || formData.password.length < 5){
                return flashMessage("warn" , "Minimum length must be required.")
            }

            const response = await axios.post(
                '/admin/adminSignup' ,
                formData
            )
            setFormData({
                fullname : '' ,
                email : '' ,
                password : ''
            })

            navigate('/owner/signin')

        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    return <>
    <div className="font-[Arial, Helvetica, sans-serif] flex flex-col justify-center items-center border-b border-solid border-[rgb(177,177,177)]">
        <img className="h-7.5 w-25 mt-5" src="../images/indexPageImages/amazon_logo3.png"/>
        <div className="h-82.5 max-w-80 flex flex-col justify-evenly items-baseline rounded-[10px] my-5 p-5 border border-solid border-[rgb(214,212,212)]">
            <p className="text-[24px]">Create Admin account</p>
            <form onSubmit={(e)=>{
                registerAdmin(e)
            }} className="h-[80%] w-full flex flex-col justify-center items-baseline">
                <p className="text-[14px] font-bold">Your name</p>
                <div className="h-8 w-full text-[13px] rounded-[7px] mb-1.5 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="text" placeholder="First and Last name" name="fullname" value={formData.fullname}/>
                </div>
                <p className="text-[14px] font-bold">Email</p>
                <div className="h-8 w-full text-[13px] rounded-[7px] mb-1.5 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="text" name="email" value={formData.email}/>
                </div>
                <p className="text-[14px] font-bold">Password</p>
                <div className="h-8 w-full text-[13px] rounded-[7px] mb-1.5 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="password" placeholder="At least 6 characters" name="password" value={formData.password}/>
                </div>
                <p className="text-[12px]">Password must be at least 6 characters</p>
                <input className="w-[99%] text-[14px] my-1 py-1 rounded-[15px] border-none outline-none bg-[rgb(255,213,0)] cursor-pointer" type="submit" value="Create your Admin account"/>
            </form>
        </div>
    </div>
    </>
}

export default AdminSignup;