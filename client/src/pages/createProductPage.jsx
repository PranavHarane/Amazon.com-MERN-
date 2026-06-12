import axios from "axios";
import { useEffect, useRef, useState , useContext } from "react";
import { useNavigate } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

const CreateProductPage = () => {

    const navigate = useNavigate()
    const fileInputRef = useRef(null)
    const {flashMessage} = useContext(messageContext)
    const [ image , setImage ] = useState(null)
    const [ info , setInfo ] = useState({
        description : '' ,
        brandURL : '' ,
        price : '' ,
        color : ['','',''] ,
        size : ['','',''] ,
        style : ['','',''] ,
        brandName : '' ,
        operatingSystem : '' ,
        ramMemory : '' ,
        CPUModel : '' ,
        CPUSize : '' ,
        memoryStorage : '' ,
        aboutItem : ['','','',''] 
    })

    const getdata = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/createProductPage`)
            if(response.data.admin){
                navigate('/createProductPage')
            }else{
                navigate('/owner/signup')
            }
        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try{
            const formData = new FormData()

            formData.append('image' , image)
            formData.append('info' , JSON.stringify(info))

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/createProduct` , formData)

            setImage(null)
            setInfo({
                description : '' ,
                brandURL : '' ,
                price : '' ,
                color : ['','',''] ,
                size : ['','',''] ,
                style : ['','',''] ,
                brandName : '' ,
                operatingSystem : '' ,
                ramMemory : '' ,
                CPUModel : '' ,
                CPUSize : '' ,
                memoryStorage : '' ,
                aboutItem : ['','','',''] 
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

    const changeArray = (e , index) => {
        const fieldname = e.target.name
        const upadatedArray = [...info[fieldname]]
        upadatedArray[index] = e.target.value

        setInfo({
            ...info ,
            [fieldname] : upadatedArray
        })
    }

    useEffect(()=>{
        getdata()
    } , [])

    return (
        <>
        <div className="min-h-screen w-[94vw] mx-3">
            <h2 className="text-[20px] font-bold my-3.75">Create New Product</h2>
            <hr/>
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <h2 className="text-[18px] font-bold my-3.75">1] Product Details</h2>
                <p className="w-fit text-[16px] font-semibold inline ml-1.5">Product Image:</p>
                <input ref={fileInputRef} onChange={(e)=>{setImage(e.target.files[0])}} className="w-50 text-[14px] bg-[rgb(24,152,232)] border-none outline-none rounded-[10px] my-2.5 ml-1.5 p-2" type="file"  name="image" />
                <textarea onChange={(e)=>{changeHandler(e)}} className="h-20 min-w-[90%] text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg my-1.5 ml-1.5 p-3.5 resize-none" placeholder="Write Description for Product" name="description" value={info.description}></textarea>
                <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg my-2.5 ml-1.5 p-3.5" type="text" placeholder="Brand URL" name="brandURL" value={info.brandURL}/>
                <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg my-2.5 ml-1.5 p-3.5" type="text" placeholder="Product Price" name="price" value={info.price}/>

                <h2 className="text-[18px] font-bold my-3.75">2] Specification Details</h2>
                <div className="flex flex-col p-2">
                <h3 className="w-fit text-[16px] font-semibold">Colors :</h3>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <input onChange={(e)=>{changeArray(e , 0)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option1" name="color" value={info.color[0]}/>
                        <input onChange={(e)=>{changeArray(e , 1)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option2" name="color" value={info.color[1]}/>
                        <input onChange={(e)=>{changeArray(e , 2)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option3" name="color" value={info.color[2]}/>
                    </div>
                </div>
                <div className="flex flex-col p-2">
                <h3 className="w-fit text-[16px] font-semibold">Sizes :</h3>
                    <div className="flex flex-col gap-2 text-[14px]">   
                        <input onChange={(e)=>{changeArray(e , 0)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option1" name="size" value={info.size[0]}/>
                        <input onChange={(e)=>{changeArray(e , 1)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option2" name="size" value={info.size[1]}/>
                        <input onChange={(e)=>{changeArray(e , 2)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option3" name="size" value={info.size[2]}/>
                    </div>
                </div>
                <div className="flex flex-col p-2">
                <h3 className="w-fit text-[16px] font-semibold">Styles :</h3>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <input onChange={(e)=>{changeArray(e , 0)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option1" name="style" value={info.style[0]}/>
                        <input onChange={(e)=>{changeArray(e , 1)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option2" name="style" value={info.style[1]}/>
                        <input onChange={(e)=>{changeArray(e , 2)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option3" name="style" value={info.style[2]}/>
                    </div>
                </div>

                <h2 className="text-[18px] font-bold my-3.75">3] More Details</h2>
                <div className="text-[16px] flex flex-col gap-2.5">
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Brand</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Brand Name" name="brandName" value={info.brandName}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Operating System</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Operating System" name="operatingSystem" value={info.operatingSystem}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Ram Memory</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Ram Memory" name="ramMemory" value={info.ramMemory}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">CPU Model</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="CPU Model" name="CPUModel" value={info.CPUModel}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">CPU Size</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="CPU Size" name="CPUSize" value={info.CPUSize}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Memory Storage</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Memory Storage" name="memoryStorage" value={info.memoryStorage}/>
                    </div>
                </div>

                <h2 className="text-[18px] font-bold my-3.75">4] About Item</h2>
                <div className="flex flex-col text-[14px] gap-2.5">
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 0)}} className="h-20 w-full bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={info.aboutItem[0]}></textarea>
                    </div>
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 1)}} className="h-20 w-full bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={info.aboutItem[1]}></textarea>
                    </div>
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 2)}} className="h-20 w-full bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={info.aboutItem[2]}></textarea>
                    </div>
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 3)}} className="h-20 w-full bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={info.aboutItem[3]}></textarea>
                    </div>
                </div>

                <input className="bg-[rgb(24,152,232)] border-none outline-none rounded-[20px] my-5 p-[10px_50px] text-white text-[16px]" type="submit" value="Create Product"/>
            </form>
        </div>
        </>
    )
}

export default CreateProductPage;