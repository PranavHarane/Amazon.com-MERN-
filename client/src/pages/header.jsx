import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { messageContext } from "../context/flashMessageContext";

let Header = () => {

    const navigate = useNavigate()
    const [productBrand , setProductBrand] = useState('')
    const {flashMessage} = useContext(messageContext)

    const searchHandler = (e) => {
        e.preventDefault()
        try{
            navigate(`/searchedProductPage?brand=${productBrand}`)
        }catch(err){
            console.log(err.message)
            flashMessage("error" , err.message)
        }
    }
    
    const changeHandler = (e) => {
        setProductBrand(e.target.value)
    }

    return <>
    <header className="h-fit w-full text-white">
        <div className="h-fit w-full flex flex-col gap-0.5 sm:flex-row items-center bg-[rgb(28,28,47)] sm:p-1 sm:text-[12px]">
            <div className="h-fit w-full flex justify-between items-center sm:gap-1 md:gap-2 px-3.5 sm:w-[40%] sm:px-0 sm:justify-start md:w-[38%] lg:w-[25%]">
                <div className="flex">
                    <div className="flex items-center sm:hidden">
                        <i className="fa-solid fa-bars text-[22px]"></i>
                    </div>
                    <Link to='/' className="hover:border rounded-sm border-white">
                        <img className="h-fit w-25 sm:w-30" src="../images/indexPageImages/amazon_logo.png"/>
                    </Link>
                </div>
                <Link to='' className="hidden sm:flex w-fit text-[12px] items-center hover:border rounded-sm border-white">
                    <span className="m-[15px 3px 0px 0px] text-[18px]">
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <div className="w-fit leading-tight flex flex-col px-1 py-1.5">
                        <span className="sm:leading-tight text-[10px] inline-block">Deliver to</span>
                        <span className="text-[14px] font-bold">India</span>
                    </div>
                </Link>
                <div className="flex justify-center items-center gap-4 sm:hidden">
                    <div className="flex justify-center itmes-center text-[16px]">
                        <p className="mt-1">Sign in <span className="mx-[-4px_-4px]"><i className="fa-solid fa-angle-right"></i></span></p>
                        <span className="text-[22px]"><i className="fa-solid fa-user"></i></span>
                    </div>
                <Link to='/cart' className="flex flex-col justify-center items-center text-white decoration-0">
                    <span className="text-[22px]"><i className="fa-solid fa-cart-shopping"></i></span>
                    <p className="font-bold text-[10px] -mt-2">Cart</p>
                </Link>
                </div>
            </div>
            <div className="h-fit w-full">
                <div className="h-fit w-full flex justify-center px-3.5 pb-1.5 sm:px-2 sm:py-0 text-[14px]">
                        <select className="hidden sm:block w-10 text-black bg-[rgb(213,213,213)] outline-none text-center rounded-l-lg">
                            <option>All</option>
                            <option>nothing i can do</option>
                            <option>there is</option>
                            <option>to you</option>
                        </select>
                    <input onChange={(e)=>{changeHandler(e)}} className="w-[90%] text-[16px] text-black outline-none p-1.5 bg-white rounded-l-lg sm:rounded-none" type="text" placeholder="Search Amazon.com" value={productBrand}/>
                    <button onClick={(e)=>{searchHandler(e)}} className="text-black bg-[rgb(245,190,38)] flex justify-center items-center border-none p-2.25 rounded-r-lg cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className="hidden sm:flex justify-between items-center gap-0.5 lg:w-[34%]">
                <div className="hidden lg:flex justify-around items-center gap-0.5 px-2 py-2.5 lg:mr-2 hover:border rounded-sm border-white">
                    <img className="h-fit w-5" src="../images/indexPageImages/flag.png" alt="" />
                    <div className="font-bold">
                       EN
                    </div>
                </div>
                <Link to='/accountPage' className="flex flex-col justify-center  px-2 py-2.5 text-white decoration-0 hover:border rounded-sm border-white">
                    <span className="sm:hidden lg:inline-flex items-center leading-none">Hello, sign in</span>
                    <span className="font-bold sm:inline-flex items-center leading-none">Account & Lists</span>
                </Link>
                <Link to='' className="text-white decoration-0  px-2 py-2.5 lg:inline-flex items-center leading-none flex flex-col hover:border rounded-sm border-white">
                    <span>Returns</span>
                    <span className="font-bold">& Orders</span>
                </Link>
                <Link to='/cart' className="text-white decoration-0  px-2 py-1 leading-tight lg:flex flex-col hover:border rounded-sm border-white">
                    <span className="sm:text-[18px]"><i className="fa-solid fa-cart-shopping"></i></span>
                    <span className="font-bold">Cart</span>
                </Link>
            </div>
        </div>
        <div className="h-9.75 w-full text-[14px] bg-[#222f3d] flex justify-between items-center sm:text-[16px]">
            <div id="headerTwoOptions" className="h-full w-full flex justify-evenly items-center text-[12px] md:text-[14px] overflow-x-auto .no-scrollbar sm:justify-start sm:gap-1">
                <Link to='' className="hidden sm:block py-1.5 px-1.25 decoration-0 text-white hover:border rounded-sm border-white">
                    <i className="fa-solid fa-bars"></i>
                    <span className="font-bold">All</span>
                </Link>
                <Link to=''  className="decoration-0 text-white sm:py-1.5 px-1.25 hover:border rounded-sm border-white">
                    Today's Deals
                </Link>
                <Link to=''  className="decoration-0 text-white sm:py-1.5 px-1.25 hover:border rounded-sm border-white">
                    Registry
                </Link>
                <Link to=''  className="decoration-0 text-white sm:py-1.5 px-1.25 hover:border rounded-sm border-white">
                    Prime Video
                </Link>
                <Link to=''  className="decoration-0 text-white sm:py-1.5 px-1.25 hover:border rounded-sm border-white">
                    Gift Cards
                </Link>
                <Link to=''  className="decoration-0 text-white sm:py-1.5 px-1.25 hover:border rounded-sm border-white">
                    Customer Service
                </Link>
                <Link to=''  className="decoration-0 text-white sm:py-1.5 px-1.25 hover:border rounded-sm border-white">
                    Sell
                </Link>
            </div>
        </div>
   </header>
    </>
}

export default Header;