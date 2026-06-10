import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast , ToastContainer} from 'react-toastify'
import { messageContext } from "../context/flashMessageContext";

let Signin = () => {

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

    const signinUser = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post(
                '/user/userSignin' ,
                formData
                )
            console.log(response)

            setFormData({
                email : '' ,
                password : ''
            })

            if(response.data.type == "success"){
                navigate('/')
            }
            flashMessage(response.data.type , response.data.message)
            
        }catch(err){
            flashMessage("error" , err.message)
            console.log(err.message)
        }
    }

    return <>
    <div className="font-[Arial, Helvetica, sans-serif] flex flex-col justify-center items-center border-b border-solid border-[rgb(177,177,177)]">
        <img className="h-7.5 w-25 mt-5" src="../images/indexPageImages/amazon_logo3.png"/>
        <div className="h-90 max-w-[320px] flex flex-col justify-evenly items-baseline rounded-[10px] mt-5 p-5 border border-solid border-[rgb(214,212,212)]">
            <p className="text-[24px]">Sign in</p>
            <form onSubmit={(e)=>{
                signinUser(e)
            }} className="h-[51%] w-full flex flex-col justify-center items-baseline">
                <p className="text-[14px] font-bold">Email</p>
                <div className="h-8 w-full rounded-[7px] mb-1.25 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="text" name="email" value={formData.email}/>
                </div>
                <p className="text-[14px] font-bold">Password</p>
                <div className="h-8 w-full text-[13px] rounded-[7px] mb-1.25 text-center border-[3px] border-solid border-white">
                    <input onChange={(e)=>{
                        handleChange(e)
                    }} className="h-full w-full outline-none rounded-[5px] p-1.25 bg-transparent border border-solid border-[rgb(69,69,69)]" type="password" placeholder="At least 6 characters" name="password" value={formData.password}/>
                </div>
                <input className="h-7.5 w-[99%] rounded-[15px] border-none outline-none bg-[rgb(255,213,0)] cursor-pointer" type="submit" value="Continue"/>
            </form>
            <div className="w-full flex flex-col justify-center items-baseline mt-3 mb-1 gap-2">
                <p className="text-[13px]">By continueing you agree to Amazon's 
                    <Link to='' className="text-[rgb(28,125,210)] underline"> Conditions of Use</Link> and
                    <Link to='' className="text-[rgb(28,125,210)] underline"> Privacy Notice</Link>
                </p>
                <Link to='' className="text-[rgb(28,125,210)] decoration-0 text-[16px]">Need help?</Link>
            </div>
        </div>
        <div className="h-fit w-[320px] flex flex-col justify-center items-center gap-1 my-6.25 border-t border-solid border-[rgb(196,196,196)]">
            <div className="relative bottom-2 text-[grey] bg-white px-1 text-[12px]">
                <p>New to Amazon?</p>
            </div>
            <Link to='/signup' className="w-full text-black py-[4px_6px] text-[13px] decoration-0 text-center rounded-[20px] border-2 border-solid border-[rgb(196,196,196)]">
                Create your Amazon account
            </Link>
        </div>
    </div>
    <div className="flex flex-col justify-center items-center text-[12px] gap-2.5 my-8">
        <div className="text-[rgb(28,125,210)] flex gap-2">
            <Link to='' className="decoration-0">Conditions of Use</Link>
            <Link to='' className="decoration-0">Privacy Notice</Link>
            <Link to='' className="decoration-0">Help</Link>
        </div>
        <pre>@ 1996-2025, Amazon.com, Inc. or its affiliates</pre>
    </div>
    </>
}

export default Signin;