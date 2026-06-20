import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { messageContext } from "../context/flashMessageContext";

let Index = () => {

    const [categories , setCategories] = useState([])
    const data = useContext(messageContext)
    const {flashMessage} = useContext(messageContext)

    useEffect(()=>{
        getdata()
    } , [])

    const getdata = async () => {
        try{
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/index`)
            if(response.data.categories){
                setCategories(response.data.categories)
            }
        }catch(err){
            console.log(err)
            flashMessage("error" , err.message)
        }
    }

    return <>
        <main className="h-[99%] w-[99%] bg-[rgb(237,237,237)] justify-self-center font-[Arial, Helvetica, sans-serif] bg-[url('../images/indexPageImages/azbackground.jpg')] bg-top bg-no-repeat">
        <section className="h-[22vh] w-full flex justify-center items-end">
            <div className="w-[96%] text-[10px] bg-white flex justify-center items-center p-1.25 mb-5 md:text-[14px]">
                <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</p>
                <Link to='https://www.amazon.in/' target="_main" className="text-[rgb(41,123,194)] decoration-0 ml-1.25">Click here to go to amazon.in</Link>
            </div>
        </section>
        <section className="h-auto w-full flex flex-wrap gap-3.75 justify-center pb-4">
            {
                categories.map((category , index) => (
                    <div key={index} className="min-h-80 w-[46%] flex justify-center items-center bg-white sm:w-[29%] md:w-[30%] lg:w-[22%]">
                        <div className="h-full w-[90%] flex flex-col justify-evenly items-baseline">
                            <h2 className="text-center mt-1.5 text-l font-bold">{category.heading}</h2>
                            <div className="max-h-57.5 w-full flex justify-center my-2.5">
                                <img className="h-52.5 w-fit" src={category.image}/>
                            </div>
                        <Link to={`/searchedProductPage?brand=${category.brand}`} className="decoration-0 mb-2.5 pl-4 text-blue-600">{category.tag}</Link>
                        </div>
                    </div>
                ))
            } 
            
        </section>
    </main>
    </>
}

export default Index;