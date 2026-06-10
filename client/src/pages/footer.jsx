import { Link } from "react-router-dom";

let Footer = () => {

    return <>
    <footer className="font-[Arial, Helvetica, sans-serif] leading-tight">
        <div className="bg-[#27333d] flex justify-center">
            <Link to='' className="h-full w-full text-center decoration-none py-4 text-white">Back to top</Link>
        </div>
        <div className="bg-[#222f3d]">
            <div className="flex justify-center items-start gap-20 text-white py-10 sm:px-9">
                <div className="hidden sm:flex flex-col justify-center items-start gap-2.5">
                    <h4 className="font-bold mb-1.25">Get to Know Us</h4>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Careers</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Blog</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">About Amazon</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Investors Relations</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Amazon Devices</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Amazon Science</Link>
                </div>
                <div className="hidden sm:flex flex-col justify-center items-start gap-2.5">
                    <h4 className="font-bold mb-1.25">Make Money with Us</h4>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Sell products on Amazon</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Sell on Amazon Business</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Sell apps on Amazon</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Become an Affiliate</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Advertise Your Products</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Self-Publish with Us</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Host an Amazon hub</Link>
                </div>
                <div className="hidden sm:flex flex-col justify-center items-start gap-2.5">
                    <h4 className="font-bold mb-1.25">Amazon Payment Products</h4>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Amazon Business Card</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Shop with Points</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Reload Your Balance</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Amazon Currency Converter</Link>
                </div>
                <div className="flex flex-col justify-center items-center gap-2.5 sm:items-start">
                    <h4 className="hidden sm:block font-bold mb-1.25">Let Us Help You</h4>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Amazon and COVID-19</Link>
                    <Link to='/accountPage' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Your Account</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Your Orders</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Shipping Rates & Policies</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Returns & Replacements</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Manage Your Content and Devices</Link>
                    <Link to='' className="text-[14px] text-[rgb(219,219,219)] decoration-0 hover:underline">Help</Link>
                </div>
            </div>
            <hr className="text-[grey]"/>
            <div className="flex justify-center items-center gap-2.25 text-[rgb(217,217,217)] p-[30px_2px_40px_2px] text-[13px]">
                <img className="hidden sm:h-8.75 w-25 mr-12.5 mt-2.25" src="/images/indexPageImages/amazon_logo2.png"/>
                <Link to='' className="flex justify-center items-center gap-1.25 text-[rgb(199,199,199)] decoration-none border border-solid border-[rgb(216,216,216)] rounded-[3px] p-[8px_12px]">
                    <i className="fa-solid fa-globe"></i>
                    <p>English</p>
                </Link>
                <Link to='' className="w-37.5 flex justify-center items-center gap-1.25 text-[rgb(199,199,199)] decoration-none border border-solid border-[rgb(216,216,216)] rounded-[3px] p-[8px_12px]">
                    <p>$</p>
                    <p>USD-U.S. Dollar</p>
                </Link>
                <Link to='' className="flex justify-center items-center gap-1.25 text-[rgb(199,199,199)] decoration-none border border-solid border-[rgb(216,216,216)] rounded-[3px] p-[8px_12px]">
                    <img className="h-3.75 w-5" src="/images/indexPageImages/flag.png"/>
                    <p>United States</p>
                </Link>
            </div>
        </div>
        <div className="bg-[#010f1e] text-white flex flex-col justify-center items-center">
            <div className="h-fit w-[60%] hidden md:w-[85%] md:flex flex-col justify-center items-center flex-wrap gap-5 mt-12.5 ">
                <div className="flex items-start md:gap-x-4 lg:gap-x-9 xl:gap-x-12 text-[12px]">
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Amazon Music</p>
                        <span className="text-[rgb(168,168,168)]">Stream millions of songs</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Amazon Ads</p>
                        <span className="text-[rgb(168,168,168)]">Reaxh customers wherever they spend time</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">6pm</p>
                        <span className="text-[rgb(168,168,168)]">Score deals on fashion brands</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">AbeBooks</p>
                        <span className="text-[rgb(168,168,168)]">Books, art & collections</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">ACX</p>
                        <span className="text-[rgb(168,168,168)]">Audiobook Publishing Made Easy</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Sell on Amazon</p>
                        <span className="text-[rgb(168,168,168)]">Start a Selling Account</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Veeqo</p>
                        <span className="text-[rgb(168,168,168)]">Shipping Software Inventory Management</span>
                    </Link>
                </div>
                <div className="flex items-start md:gap-x-4 lg:gap-x-9 xl:gap-x-12 text-[12px]">
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)] text-[14px]">Amazon Business</p>
                        <span className="text-[rgb(168,168,168)]">Everything For Your Business</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Amazon Global</p>
                        <span className="text-[rgb(168,168,168)]">Ship Orders Internationally</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Amazon Web Services</p>
                        <span className="text-[rgb(168,168,168)]">Scalable Cloud Computing Services</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Audible</p>
                        <span className="text-[rgb(168,168,168)]">Listen to Books & Original Audio Performances</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Box Office Mojo</p>
                        <span className="text-[rgb(168,168,168)]">Find Movie Box Office Data</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Goodreads</p>
                        <span className="text-[rgb(168,168,168)]">Book reviews & recommendations</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">IMDb</p>
                        <span className="text-[rgb(168,168,168)]">Movies, TV & Celebrities</span>
                    </Link>
                </div>
                <div className="flex items-start md:gap-x-4 lg:gap-x-9 xl:gap-x-12 text-[12px]">   
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">IMDbPro</p>
                        <span className="text-[rgb(168,168,168)]">Get Info Entertainment Professionals Need</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">Kindle Direct Publishing</p>
                        <span className="text-[rgb(168,168,168)]">Indie Digital & Print Publishing Made Easy</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">Prime Video Direct</p>
                        <span className="text-[rgb(168,168,168)]">Video Distribution Made Easy</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">Shopbop</p>
                        <span className="text-[rgb(168,168,168)]">Designer Fashion Brands</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">Woot!</p>
                        <span className="text-[rgb(168,168,168)]">Deals and Shenanigans</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">Zappos</p>
                        <span className="text-[rgb(168,168,168)]">Shoes & Clothing</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 hover:underline">
                        <p className="text-[rgb(255,255,255)]">Ring</p>
                        <span className="text-[rgb(168,168,168)]">Smart Home Security Systems</span>
                    </Link>
                </div> 
                <div className="flex items-start md:gap-x-4 lg:gap-x-9  xl:gap-x-12 text-[12px]">   
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">eero WiFi</p>
                        <span className="text-[rgb(168,168,168)]">Stream 4K Video in Every Room</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Blink</p>
                        <span className="text-[rgb(168,168,168)]">Smart Security for Every Home</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Neighbors App</p>
                        <span className="text-[rgb(168,168,168)]">Real-Time Crime & Safely Alerts</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">Amazon Subscription Boxes</p>
                        <span className="text-[rgb(168,168,168)]">Top <s></s>ubscription boxes-right to your door</span>
                    </Link>
                    <Link to='' className="text-[rgb(213,213,213)] h-auto w-25 decoration-none hover:underline">
                        <p className="text-[rgb(255,255,255)]">PillPack</p>
                        <span className="text-[rgb(168,168,168)]">Pharmacy Simplified</span>
                    </Link>
                </div>     
            </div>
            <div className="flex flex-col justify-center items-center m-[40px_0px_30px_0px] text-[12px] gap-y-2.5">
                <div className="w-62.5 flex justify-center flex-wrap items-center gap-x-2 lg:w-162.5">
                    <p className='hover:underline'>Conditions of Use</p>
                    <p className='hover:underline'>Privacy Notice</p>
                    <p className='hover:underline'>Consumer Health Data Privacy Disclosure</p>
                    <p className="flex items-center hover:underline">Your Ads Privacy Choices<img className="h-2.5 w-6.25 ml-1" src="../images/indexPageImages/footer4-logo.png"/></p>
                </div>
                <p>@1996-2025,Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
   </footer>
   </>
}

export default Footer;