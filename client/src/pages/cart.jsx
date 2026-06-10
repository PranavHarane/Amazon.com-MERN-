import { useState , useEffect , useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { messageContext } from "../context/flashMessageContext";

let Cart = () => {
    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)
    const [products , setProducts] = useState([])
    let isCartEmpty = products.length === 0

    const getdata = async () => {
        try{
            const response = await axios.get('/user/cart')
            console.log(response)
            if(!response?.data?.user){
                navigate('/signin')
            }
            if(response?.data?.products.length > 0){
                setProducts(response.data.products)
            }

        }catch(err){
            console.log(err)
        }
    }

    const deleteFromCart = async (productId) => {
        try{
            const response = await axios.get(`/user/deleteFromCart/${productId}`)
            setProducts(response.data.products)
            flashMessage(response.data.type , response.data.message)  
        }catch(err){
            console.log(err.message)
            flashMessage("error" , err.message)
        }
    }

    useEffect(()=>{
        getdata()
    } , [])

    if(isCartEmpty){
        return <>
        <div className="h-[90vh] w-full font-[Arial,Helvetica,sans-serif] flex flex-col justify-start items-center gap-7.5 bg-[rgb(209,222,222)]">
        <div className="bg-white h-[40vh] w-[96%] flex flex-col justify-center items-center gap-2.5 mt-10">
            <img className="h-fit w-62.5" src="../images/emptyCartLogo.png"/>
            <div className="flex flex-col justify-center items-start">
                <h2 className="text-[20px] font-bold">Your Amazon Cart is empty</h2>
                <Link to='/' className="text-[rgb(34,128,190)] decoration-0">Shop today's deals</Link>
            </div>
        </div>
        <div className="h-[14vh] w-[96%] bg-white"></div>
        <p className="text-[12px] text-[rgb(49,49,49)] w-[90vw]">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list or your items and reflects each item's most recent price. Do you have a gift card or promotional code? W'll ask you to enter your claim code when it's time to pay</p>
        </div>
        </>
    }

    return <>
    <div className="h-screen w-full bg-[rgb(209,222,222)] flex justify-center items-start lg:h-fit">
        <div className="min-h-[60%] w-[96%] bg-white my-6.25 p-5">
            <p className="text-[30px] pb-4 border-b border-solid border-[rgb(165,165,165)]">Shopping Cart</p>
            {
                products?.map((product , index) => (
                <div key={product._id} className="h-[80%] w-[96%] flex justify-start items-start gap-2 my-4 py-6.25 border border-solid border-[rgb(229,229,229)] rounded-lg lg:px-3">
                    <div className="h-fit w-[50%] lg:w-[38%] lg:flex justify-end">
                        <Link to={`/detailedProduct/${product._id}`} className="lg:w-[70%] flex justify-center"><img className="h-auto w-full md:w-[75%] lg:pt-2" src={product.image}/></Link>
                    </div>
                    <div className="min-w-[30%] flex flex-col justify-between items-start gap-3 lg:w-[62%]">
                        <div className="h-full w-full flex flex-col gap-1.5">
                            <p className="text-md">{product.description}</p>
                            <span className="text-[rgb(22,119,20)] text-[15px]">In Stock</span>
                            <div className="hidden sm:flex flex-col justify-between items-start gap-1.25 my-2">
                                <div className="flex gap-1">
                                    <span className="font-semibold">Color:</span>
                                    <p>{product.color?.[0]}</p>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-semibold">Size:</span>
                                    <p>{product.size?.[0]} GB</p>
                                </div>
                                <div className="flex gap-1">
                                    <span className="font-semibold">Style:</span>
                                    <p>{product.style?.[0]}</p>
                                </div>
                                </div>
                                    <div className="h-fit w-full text-[14px] flex flex-col items-start gap-0.5">
                                <div className="flex items-center p-[4px_8px] rounded-[20px] font-semibold border-[3px] border-solid border-[rgb(255,230,0)]">
                                    <button className="h-5 w-6 text-[25px] flex justify-center items-center border-none bg-white">-</button>
                                    <div className="h-5 w-6 text-[20px] flex justify-center items-center border-none bg-white">1</div>
                                    <button className="h-5 w-6 text-[20px] flex justify-center items-center border-none bg-white">+</button>
                                </div>
                                <button onClick={()=>{deleteFromCart(product._id)}} className="text-[rgb(29,123,199)] decoration-0 cursor-pointer">Delete</button>
                                <Link to='' className="text-[rgb(29,123,199)] decoration-0">Save for later</Link>
                                <Link to='' className="text-[rgb(29,123,199)] decoration-0">Compare with similar items</Link>
                                <Link to='' className="text-[rgb(29,123,199)] decoration-0">Share</Link>
                                    </div>
                                </div>
                            <div className="text-3xl font-bold"><span className="text-xl font-semibold">$</span>{product.price}</div>
                        </div>
                    </div>
                ))
            }
            <div className="flex flex-col justify-center items-start gap-2 border-t border-solid border-[rgb(165,165,165)]">
                <div className="text-[20px] justify-self-end flex gap-1.5 mt-2.5">
                    <span>Subtotal( items): </span>
                    <p className="font-bold">$ {products.reduce((total , product) => {
                        return total + product.price
                    } , 0)}</p>
                </div>
                <button className="w-fit text-[13px] font-semibold outline-none border-none rounded-[20px] bg-[rgb(255,230,0)] py-1 px-4 cursor-pointer">Proceed to checkout</button>
            </div>    
        </div>
    </div>
    </>

}

export default Cart;