import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useContext } from "react";
import { messageContext } from "../context/flashMessageContext";

let AdminHeader = () => {

    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)

    const logoutHandler = async () => {
        try{

            const response = await axios.get('/admin/adminSignout')
            flashMessage(response.data.type , response.data.message)
            navigate('/owner/signin')
        
        }catch(err){
            console.log(err)
            flashMessage("error" , err.message)
        }
    }

    const deleteAccountHandler = async () => {
        try{
            
            const response = await axios.get('/admin/deleteAccount')
            flashMessage(response.data.type , response.data.message)
            navigate('/owner/signup')
        
        }catch(err){
            console.log(err)
            flashMessage("error" , err.message)
        }
    }

    return <>
        <div className="w-full min-h-15 flex justify-center items-center border-b border-solid border-[grey]">  
        <div className="w-fit flex gap-3.75 text-[12px] font-semibold text-[rgb(255,47,47)] mx-3 lg:text-lg lg:gap-5">
            <Link to='/allCreatedProductPage' className="decoration-0">All Products</Link>
            <Link to='/createCategoryPage' className="decoration-0">Create New Category</Link>
            <Link to='/createProductPage' className="decoration-0">Create New Product</Link>
            <button onClick={()=>{
                logoutHandler()
            }} className="decoration-0 cursor-pointer">Log out</button>
            <button onClick={()=>{
                deleteAccountHandler()
            }} className="decoration-0 cursor-pointer">Delete Account</button>
        </div>
    </div>
    </>
}

export default AdminHeader;