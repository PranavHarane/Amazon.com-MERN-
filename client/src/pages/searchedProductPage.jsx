import axios from "axios";
import { useEffect, useState , useContext } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

let SearchedProductPage = () => {

    const [ searchParams , setSearchParams ] = useSearchParams()
    const searchValue = searchParams.get("brand")
    const Navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)
    const [products , setProducts] = useState([])

    useEffect(()=>{
        getdata()
    } , [searchValue])

    const getdata = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/searchProduct?searchValue=${searchValue}`)
            if(response.data.type == "error"){
                flashMessage("error" , response.data.message)
            }
            if(response.data.products){
                setProducts(response.data.products)
            }
        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    const addToCart = async (e , id) => {
        e.preventDefault()
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/addToCart/${id}`)
            if(!response.data?.type == "success"){
                Navigate('/signin')
            }
            flashMessage(response.data.type , response.data.message)

        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    if(products.length == 0){
        return <>
            <div className="h-28 w-full flex justify-center items-center">
                <h1 className="text-5xl font-semibold">No Results</h1>
            </div>
        </>
    } 

    return <>
    <div className="h-full w-full">
        <h3 className="font-bold text-[20px]">Results</h3>
        <p className="text-[rgb(109,109,109)] text-[16px]">Check each product page for buying options.</p>
        {
            products.map((product , index) => (
                <div key={product._id} className="min-h-[36vh] w-[98%] flex justify-baseline self-center gap-3 border border-solid border-[rgb(229,229,229)] rounded-lg my-3.75">
                    <div className="h-fit w-[50%] lg:w-[38%]">
                        <Link to={`/detailedProduct/${product._id}`} className="flex justify-end"><img className="h-auto w-full md:w-[75%] lg:w-[35%] lg:pt-2" src={product.image}/></Link>
                    </div>
                    <div className="h-full w-[55%] flex flex-col justify-start gap-0.75 py-1">
                        <h3 className="text-[24px] font-bold">{product.brandName}</h3>
                        <p className="text-[12px]">{product.description}</p>
                        <div className="text-[10px] flex">
                            <span>Options:</span>
                            <p>{product.size.length} sizes</p>
                        </div>
                        <div className="text-[12px]">
                            <p className="sm:text-[rgb(20,132,218)]">{product.ratings}</p>
                            <p className="text-[11px] text-[rgb(109,109,109)]">{product.bought} bought in past month</p>
                        </div>
                        <p className="text-[14px]">$<span className="text-[20px] font-semibold">{product.price}</span></p>
                        <div className="text-[12px] flex flex-col">
                            <p>Delivery <span className="font-semibold">Tue, Jul 15</span></p>
                            <p>Ships to India</p>
                        </div>
                        <button onClick={(e)=>{addToCart(e , product._id)}} className="w-45 text-[16px] font-semibold bg-[rgb(255,213,0)] flex justify-center py-1 my-1 decoration-0 rounded-[20px] border-none">Add to cart</button>
                    </div>
                </div>
            ))
        }
    </div>
    </>
}

export default SearchedProductPage;