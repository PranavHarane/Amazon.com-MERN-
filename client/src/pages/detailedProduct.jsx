import axios from "axios";
import { useEffect , useContext } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

const DetailedProduct = () => {

    const params = useParams()
    const {flashMessage} = useContext(messageContext)
    const [product , setProduct] = useState({})
    const [currentColor , setCurrentColor] = useState('')
    const [currentSize , setCurrentSize] = useState('')
    const [currentStyle , setCurrentStyle] = useState('')

    useEffect(()=>{
        getdata()
    } , [])

    const getdata = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/detailedProduct/${params.productId}`)
            if(response?.data?.product){
                setProduct(response.data.product)
                setCurrentColor(response.data.product.color?.[0])
                setCurrentSize(response.data.product.size?.[0])
                setCurrentStyle(response.data.product.style?.[0])
            }
        }catch(err){
            flashMessage("error" , err.message)
        }
    }

    return (
    <>
    <div className="min-h-screen w-[96vw] justify-self-center flex flex-col justify-center items-start my-5 lg:flex-row">
        <div className="w-full flex flex-col justify-center items-center gap-4 lg:flex-row lg:items-start">
            <img className="h-fit w-[90%] md:w-[80%] lg:w-[46%] sticky top-7" src={product.image}/>
            <div className="h-fit w-[98%] flex flex-col justify-start items-start gap-1.5">
                <p className="text-[16px]">{product.description}</p>
                <Link to='https://www.samsung.com/in/smartphones/galaxy-s26-ultra/buy/?cid=in_pd_search_google_all-products-brandshop-rlsa_ongoing_all-products-brandshop-26-rlsa-gd2c-pfm_text_text-search-ad_1ur-560042l-2026&gad_source=1&gad_campaignid=23617950935&gbraid=0AAAAADm5iQXUu50HAbfQDuVP2yNxRuHzD&gclid=Cj0KCQjwlerQBhDMARIsAB16H-Vy9fx_h-W63_VlJprlO3kMvrn9DzsXmcTvT_tJ2czXh1cVn7_urxYaAn0EEALw_wcB' target="_main" className="text-[rgb(42,139,188)] decoration-0">Visit the Samsung Store</Link>
                <div className="flex flex-col justify-baseline items-start gap-1.5">
                    <Link to='' className="text-[rgb(42,139,188)] decoration-0">{product.ratings} ratings</Link>
                    <div className="flex justify-center items-center gap-1.25">
                        <span className="font-semibold">{product.bought} bought</span>
                        <p>in past month</p>
                    </div>
                </div>
                <p className="w-[85%] border-t border-solid border-[rgb(207,207,207)]">$<span className="text-[38px] font-semibold">{product.price}</span></p>
                <div className="flex flex-col items-start gap-2 my-2.5">
                    <div className="w-full flex flex-col gap-1.5">
                        <div className="flex justify-start gap-1">
                            <span>Color:</span>
                            <p className="font-semibold">{currentColor}</p>
                        </div>
                        <div className="flex justify-start gap-2">
                        {
                            product.color?.map((col , index) => (
                                <span onClick={()=>{setCurrentColor(col)}} key={index} className="min-w-[20%] bg-[rgb(155,78,226)] text-center text-white text-[10px] p-[8px_10px] border-2 border-solid border-[rgb(107,107,107)] rounded-[10px]">{col}</span>
                            ))
                        }
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                        <div className="flex justify-start gap-1">
                            <span>Size:</span>
                            <p className="font-semibold" id="current-size">{currentSize} GB</p>
                        </div>
                        <div className="flex justify-start gap-2">
                            {
                                product.size?.map((siz , index) => (
                                    <span onClick={()=>{setCurrentSize(siz)}} key={index} className="rounded-[10px] p-[6px_8px] border-2 border-dotted border-[rgb(49,48,49)]">{siz} GB</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-1.5">
                        <div className="flex justify-start gap-1">
                            <span>Style:</span>
                            <p className="font-semibold" id="current-style">{currentStyle}</p>
                        </div>
                        <div className="flex justify-start gap-2">
                            {
                                product.style?.map((sty , index) => (
                                    <span onClick={()=>{setCurrentStyle(sty)}} key={index} className="rounded-[10px] p-[6px_8px] border-2 border-dotted border-[rgb(49,48,49)]">{sty}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-start gap-1">
                            <span>Pattern Name:</span>
                            <p className="font-semibold">{product.patternName}</p>
                        </div>
                    </div>
                </div>
                <div className="w-[85%] flex flex-col gap-1.5 py-5 border-t border-solid border-[rgb(207,207,207)]">
                    <div className="w-[80%] flex items-start gap-2">
                        <p className="w-[32%] font-semibold">Brand</p>
                        <span>{product.brandName}</span>
                    </div>
                    <div className="w-[80%] flex items-start gap-2">
                        <p className="w-[32%] font-semibold">Operating System</p>
                        <span>{product.operatingSystem}</span>
                    </div>
                    <div className="w-[80%] flex items-start gap-2">
                        <p className="w-[32%] font-semibold">Ram Memory Installed Size</p>
                        <span>{product.ramMemory} GB</span>
                    </div>
                    <div className="w-[80%] flex items-start gap-2">
                        <p className="w-[32%] font-semibold">CPU Model</p>
                        <span>{product.CPUModel}</span>
                    </div>
                    <div className="w-[80%] flex items-start gap-2">
                        <p className="w-[32%] font-semibold">CPU Size</p>
                        <span>{product.CPUSize}</span>
                    </div>
                    <div className="w-[80%] flex items-start gap-2">
                        <p className="w-[32%] font-semibold">Memory Storage</p>
                        <span>{product.memoryStorage} GB</span>
                    </div>
                </div>
                <div className="w-[85%] border-t border-solid border-[rgb(207,207,207)]">
                    <h2 className="text-[22px] mt-3.75 mb-2.5">About this item</h2>
                        <ol className="ml-5 text-sm">
                            {
                                product.aboutItem?.map((about , index) => (
                                <li key={index}>{about}</li>
                                ))
                            }
                        </ol>
                </div>
            </div>
        </div>
        <div className="h-fit w-47.5 rounded-[10px] p-[10px_14px] m-4 flex flex-col justify-start items-start gap-1.5 border border-solid border-[rgb(207,207,207)]">
            <p className="w-[85%]">$<span className="text-[38px]">{product.price}</span></p>
            <p className="text-[rgb(20,120,20)] text-[16px]">In Stock</p>
            <div className="w-full flex gap-1">
                <span>Quantity:</span>
                <select className="w-[20%] outline-none" name="product-quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            <button to='' className="bg-[rgb(255,213,0)] text-black w-[90%] text-center decoration-0 rounded-[30px] border-none mt-2 p-2">Add to cart</button>
            <button to='' className="bg-[rgb(255,213,0)] text-black w-[90%] text-center decoration-0 rounded-[30px] border-none mt-2 p-2">Buy Now</button>
            <div className="h-fit w-full flex flex-col justify-start items-center gap-1.5 my-2">
                <div className="w-full flex gap-1">
                    <p className="w-[35%] text-[12px]">Ships from</p>
                    <p className="w-[35%] text-[12px]">Amazon.com</p>
                </div>
                <div className="w-full flex gap-1">
                    <p className="w-[35%] text-[12px]">Sold by</p>
                    <p className="w-[35%] text-[12px]">Amazon.com</p>
                </div>
                <div className="w-full flex gap-1">
                    <p className="w-[35%] text-[12px]">Returns</p>
                    <p className="w-[35%] text-[12px] text-[rgb(42,139,188)] decoration-0">30-day refund/replacement</p>
                </div>
                <div className="w-full flex gap-1">
                    <p className="w-[35%] text-[12px]">Support</p>
                    <p className="w-[35%] text-[12px] text-[rgb(42,139,188)] decoration-0">Product support included</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default DetailedProduct;