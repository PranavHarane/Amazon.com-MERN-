import axios from "axios";
import { useEffect, useRef, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

const CreateCategoryPage = () => {

    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)
    const fileInputRef = useRef(null)
    const [info , setInfo] = useState({
        brand : '' ,
        heading : '' ,
        tag : ''
    })
    const [image , setImage] = useState(null)
    
    const getdata = async () =>{
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/createProductPage`)

            if(response.data.admin){
                navigate('/createCategoryPage')
            }else{
                navigate('/owner/signup')
            }
        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        try{
            const formdata = new FormData()

            formdata.append('brand' , info.brand)
            formdata.append('heading' , info.heading)
            formdata.append('tag' , info.tag)
            formdata.append('image' , image)

            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/product/createCategory` ,
                formdata
            )

            setImage(null)
            setInfo({
                brand : '' ,
                heading : '' ,
                tag : ''
            })
            fileInputRef.current.value = ''

            flashMessage(response.data.type , response.data.message)

        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    const changeHandler = (e) => {
        setInfo({
            ...info ,
            [e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        getdata()
    } , [])

    return <>
        <div className="h-full w-[94%] mx-3">
            <h2 className="text-[20px] font-bold my-4">Create New Category</h2>
            <hr className="text-gray-600"/>
            <h2 className="text-[18px] font-bold my-4">Category Details</h2>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className="flex flex-col gap-2.5" >
                <div className="w-fit flex items-center gap-1">
                    <h3 className="w-fit text-[16px] font-semibold">Brand :</h3>
                    <input onChange={(e)=>{
                        changeHandler(e)
                    }} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-2.5" type="text" placeholder="Brand Name" name="brand" value={info.brand}/>
                </div>
                <div className="flex items-center">
                    <h3 className="w-25 text-[16px] font-semibold">Category Heading :</h3>
                    <textarea onChange={(e)=>{
                        changeHandler(e)
                    }} className="h-25 w-[70%] text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write Heading for Category" name="heading" value={info.heading}></textarea>
                </div>
                <div className="flex items-center gap-1">
                    <h3 className="inline ml-1.5 text-[16px] font-semibold">Category Image :</h3>
                    <input onChange={(e)=>{
                        setImage(e.target.files[0])
                    }} ref={fileInputRef} className="max-w-62.5 text-center text-[14px] text-white bg-[rgb(24,152,232)] border-none outline-none rounded-lg p-3.5" type="file" name="image"/>
                </div>
                <div className="w-fit flex items-center gap-1">
                    <h3 className="w-fit text-[16px] font-semibold">Explore Tag :</h3>
                    <input onChange={(e)=>{
                        changeHandler(e)
                    }} className="text-[16px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-2.5" type="text" placeholder="Write Explore Tag" name="tag" value={info.tag}/>
                </div>
                <input className="bg-[rgb(24,152,232)] border-none outline-none rounded-[20px] mt-5 p-2.5 text-white block text-[18px] md:w-62.5" type="submit" value="Create Category"/>
            </form>
        </div>
        </>
}

export default CreateCategoryPage;