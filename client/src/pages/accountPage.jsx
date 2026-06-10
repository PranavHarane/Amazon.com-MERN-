import { useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { messageContext } from "../context/flashMessageContext";

let AccountPage = () => {

    const navigate = useNavigate()
    const {flashMessage} = useContext(messageContext)

    useEffect( ()=>{
        getdata()
    } , [])

    const getdata = async () => {
        try{
            const response = await axios.get('/user/account')
            if(response.data.user){
                navigate('/accountPage')
            }else{
                navigate('/signin')
            }
        }catch (err) {
            flashMessage("error" , err.message)
            console.log(err)
        }
    }

    const logoutUser = async () => {
        try{
            const response = await axios.get('/user/userSignout')
            flashMessage(response.data.type , response.data.message)
        }catch(err){
            flashMessage("error" , err.message)
            console.log(err.message)
        }
    }

    const deleteAccount = async () => {
        try{
            const response = await axios.get('/user/deleteAccount')
            flashMessage(response.data.type , response.data.message)
        }catch(err){
            console.log(err.message)
            flashMessage("error" , err.message)
        }
    }

    return <>
    <div className="font-[Arial,Helvetica,sans-serif] justify-self-center mt-10 leading-tight">
        <h1 className="text-[30px] font-bold">Your Account</h1>
        <div className="h-fit w-[86vw] flex flex-col items-center gap-3.75 my-5 sm:flex-row flex-wrap justify-center">
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/yourOrders.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Your Orders</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Track, return, cancel an order, download invoice or buy again
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/loginAndSecurity.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Login & Security</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Edit login, name and mobile number
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/prime.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Prime</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Manage your membership, view benefits, and payment settings
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15w w-15" src="/images/accountPageImages/yourAddresses.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Your Addresses</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Edit, remove or set default address
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/yourBusinessaccount.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Your business account</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Sign up for free to save with business-only pricing and receive deliveries during business hours
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/giftCards.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Gift cards</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        View balance or redeem a card, and purchase a new Gift Card
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/yourPayments.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Your Payments</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        View all transtions, manag payment methods and settings
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/yourAmazonFamily.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Your Amazon Family</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Manage profiles, sharing, and permissions in one place
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/digitalServices.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Digital Services and Device Support</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Troubleshoot device issues, manage or cancel digital subscriptions
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/archivedOrders.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Archieved Orders</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        View and manage your archieved orders
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/yourLists.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Your Lists</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        View, modify, and share your lists, or create new ones
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/customerService.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' className="text-[16px] text-black decoration-0">Customers Service</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Browse self service options, help articles or contact us
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/logout.webp"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' onClick={()=>{
                        logoutUser()
                    }} className="text-[16px] text-black decoration-0">Log out</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Log out from the amazon.com
                    </p>
                </div>
            </div>
            <div className="min-h-fit w-75 flex items-start gap-2 rounded-md p-[12px_14px] border border-solid border-[rgb(211,211,211)]">
                <div>
                    <img className="h-15 w-15" src="/images/accountPageImages/deleteAcc.png"/>
                </div>
                <div className="h-fit w-[70%] flex flex-col">
                    <Link to='/' onClick={()=>{
                        deleteAccount()
                    }} className="text-[16px] text-black decoration-0">Delete Account</Link>
                    <p className="text-[12px] text-[rgb(80,80,80)] mt-1">
                        Delete your amazon account
                    </p>
                </div>
            </div>

        </div>
    </div>
    </>
}

export default AccountPage;