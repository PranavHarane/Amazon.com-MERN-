import axios from "axios";
import { useState , useEffect , useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

const EditProductPage = () => {

    const {productId} = useParams()
    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)
    const [product , setProduct] = useState({
        description : '',
        brandURL : '',
        price : '',
        color : ['', '', ''],
        size : ['', '', ''],
        style : ['', '', ''],
        brandName : '',
        operatingSystem : '',
        ramMemory : '',
        CPUModel : '',
        CPUSize : '',
        memoryStorage : '',
        aboutItem : ['', '', '', '']
    })

    const getdata = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/editProductPage/${productId}`)
            setProduct(response.data?.product)
            if(!response.data.product){
                navigate('/owner/signup')
            }
            flashMessage(response.data.type , response.data.message)
        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try{
            const formData = new FormData()

            formData.append('product' , JSON.stringify(product))

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/editProduct/${productId}` , formData)
            flashMessage(response.data.type , response.data.message)

            if(response.data.type == "success"){
                navigate('/allCreatedProductPage')
            }

        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    const changeHandler = (e) => {
        setProduct({
            ...product ,
            [e.target.name] : e.target.value
        })
    }

    const changeArray = (e , index) => {
        const fieldName = e.target.name 
        const upadatedArray = [...product[fieldName]]
        upadatedArray[index] = e.target.value

        setProduct({
            ...product ,
            [fieldName] : upadatedArray
        })
    }

    useEffect(()=>{
        getdata()
    } , [])

    return (
        <>
            <div className="min-h-screen w-[94vw] mx-3">
            <h2 className="text-[20px] font-bold my-3.75">Edit the Product</h2>
            <hr/>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} >
                <h2 className="text-[18px] font-bold my-3.75">1] Product Details</h2>
                <p className="w-fit text-[16px] font-semibold inline ml-1.5">Product Image:</p>
                <input className="w-50 text-[14px] bg-[rgb(24,152,232)] border-none outline-none rounded-[10px] my-1.5 ml-1.5 p-2" type="file"  name="image"/>
                <textarea onChange={(e)=>{changeHandler(e)}} className="h-20 min-w-[90%] text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg my-2.5 ml-1.5 p-3.5 resize-none" placeholder="Write Description for Product" name="description" value={product.description}></textarea>
                <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg my-2.5 ml-1.5 p-3.5" type="text" placeholder="Brand URL" name="brandURL" value={product.brandURL}/>
                <input onChange={(e)=>{changeHandler(e)}} className="text-[14x] bg-[rgb(241,237,237)] border-none outline-none rounded-lg my-2.5 ml-1.5 p-3.5" type="text" placeholder="Product Price" name="price" value={product.price}/>

                <h2 className="text-[18px] font-bold my-3.75">2] Specification Details</h2>
                <div className="flex flex-col p-2">
                <h3 className="w-fit text-[16px] font-semibold">Colors</h3>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <input onChange={(e)=>{changeArray(e , 0)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option1" name="color" value={product.color[0]}/>
                        <input onChange={(e)=>{changeArray(e , 1)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option2" name="color" value={product.color[1]}/>
                        <input onChange={(e)=>{changeArray(e , 2)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option3" name="color" value={product.color[2]}/>
                    </div>
                </div>
                <div className="flex flex-col p-2">
                <h3 className="w-fit text-[16px] font-semibold">Sizes</h3>
                    <div className="flex flex-col gap-2 text-[14px]">   
                        <input onChange={(e)=>{changeArray(e , 0)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option1" name="size" value={product.size[0]}/>
                        <input onChange={(e)=>{changeArray(e , 1)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option2" name="size" value={product.size[1]}/>
                        <input onChange={(e)=>{changeArray(e , 2)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option3" name="size" value={product.size[2]}/>
                    </div>
                </div>
                <div className="flex flex-col p-2">
                <h3 className="w-fit text-[16px] font-semibold">Styles</h3>
                    <div className="flex flex-col gap-2 text-[14px]">
                        <input onChange={(e)=>{changeArray(e , 0)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option1" name="style" value={product.style[0]}/>
                        <input onChange={(e)=>{changeArray(e , 1)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option2" name="style" value={product.style[1]}/>
                        <input onChange={(e)=>{changeArray(e , 2)}} className="bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 md:w-[40%]" type="text" placeholder="Option3" name="style" value={product.style[2]}/>
                    </div>
                </div>

                <h2 className="text-[18px] font-bold my-3.75">3] More Details</h2>
                <div className="text-[16px] flex flex-col gap-2.5">
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Brand</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Brand Name" name="brandName" value={product.brandName}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Operating System</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Operating System" name="operatingSystem" value={product.operatingSystem}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Ram Memory</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Ram Memory" name="ramMemory" value={product.ramMemory}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">CPU Model</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="CPU Model" name="CPUModel" value={product.CPUModel}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">CPU Size</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="CPU Size" name="CPUSize" value={product.CPUSize}/>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <h3 className="w-fit font-semibold">Memory Storage</h3>
                        <input onChange={(e)=>{changeHandler(e)}} className="text-[14px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5" type="text" placeholder="Memory Storage" name="memoryStorage" value={product.memoryStorage}/>
                    </div>
                </div>

                <h2 className="text-[18px] font-bold my-3.75">4] About Item</h2>
                <div className="flex flex-col text-[14px] gap-2.5">
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 0)}} className="h-20 w-full text-[16px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={product.aboutItem[0]}></textarea>
                    </div>
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 1)}} className="h-20 w-full text-[16px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={product.aboutItem[1]}></textarea>
                    </div>
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 2)}} className="h-20 w-full text-[16px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={product.aboutItem[2]}></textarea>
                    </div>
                    <div className="flex items-center">
                        <textarea onChange={(e)=>{changeArray(e , 3)}} className="h-20 w-full text-[16px] bg-[rgb(241,237,237)] border-none outline-none rounded-lg p-3.5 resize-none" placeholder="Write about item" name="aboutItem" value={product.aboutItem[3]}></textarea>
                    </div>
                </div>

                <input className="bg-[rgb(24,152,232)] border-none outline-none rounded-[20px] my-5 p-[10px_50px] text-white text-[16px]" type="submit" value="Update Product"/>
            </form>
        </div>
        </>
    )
}

export default EditProductPage;