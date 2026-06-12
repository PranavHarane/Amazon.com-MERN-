import { Link , useNavigate } from "react-router-dom";
import axios from "axios"
import { useState , useEffect , useContext } from "react";
import { messageContext } from "../context/flashMessageContext";

let AllCreatedProductPage = () => {

    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)
    const [products , setProducts] = useState([])

    useEffect(()=>{
        getdata()
    } , [])

    const getdata = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/allCreatedProductPage`);
            setProducts(response.data.products)

            if(!response.data.type == "success"){
                navigate('/owner/signup')
            }

        }catch(err){
            flashMessage("error" , err.message)
        }
    }
    
    return <>
    <div className="h-full w-full">
        {
            products.map((product , index) => (
                <div key={index} className="min-h-[36vh] w-[98%] flex justify-start gap-3 border border-solid border-[rgb(229,229,229)] rounded-lg my-3.75">
                    <div className="h-fit w-[50%] flex justify-end lg:w-[38%]">
                        <img className="h-auto w-full md:w-[75%] lg:w-[35%] lg:pt-2" src={product.image}/>
                    </div>
                    <div className="h-full w-[55%] flex flex-col justify-start gap-1 py-1">
                        <h3 className="text-[24px] font-semibold">{product.brandName}</h3>
                        <p className="text-[12px]">{product.description}</p>
                        <div className="text-[10px] flex">
                            <span>Options: </span>
                            <p>{product.size.length} sizes</p>
                        </div>
                        <div className="text-[12px]">
                            <p className="text-[rgb(20,132,218)]">{product.ratings}</p>
                            <p className="text-[11px] text-[rgb(109,109,109)]">{product.bought} bought in past month</p>
                        </div>
                        <p className="text-[14px]">$<span className="text-[20px] font-semibold">{product.price}</span></p>
                        <div className="text-[12px] flex flex-col">
                            <p className="font-semibold">Patten Name: {product.patternName}</p>
                        </div>
                        <Link to={`/editProductPage/${product._id}`} className="w-45 text-[16px] font-semibold bg-[rgb(255,213,0)] flex justify-center py-1 decoration-0 rounded-[20px] brder-none">Edit Product</Link>
                    </div>
                </div>
            ))
        }

    </div>
    </>
}

export default AllCreatedProductPage;