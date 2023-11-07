import { FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

const Teams = () => {
    return (
        <div className="lg:my-32 my-16">
            <h2 className="md:text-3xl text-2xl my-8 text-center font-bold">Meet our <span className="red_text">team members</span></h2>
            <div className="grid md:grid-cols-3 gap-6 md:px-0 px-4">
                <div>
                    <img className="w-full " src="https://boighor-demo.myshopify.com/cdn/shop/files/1_92e5d685-795e-4027-a1e5-116ef2da2165_large.jpg?v=1613738746" alt="" />
                    <h2 className="text-center text-2xl font-bold my-3">Joey</h2>
                    <div className="flex justify-center gap-2">
                        <a className="text-2xl" href=""><FaFacebookF className="text-[#0866ff]"></FaFacebookF></a>
                        <a className="text-2xl" href=""><AiOutlineTwitter className="text-[#1da1f2]"></AiOutlineTwitter></a>
                        <a className="text-2xl" href=""><AiOutlineInstagram className="text-[#c93085]"></AiOutlineInstagram></a>
                    </div>
                </div>
                <div>
                    <img className="w-full" src="https://boighor-demo.myshopify.com/cdn/shop/files/3_large.jpg?v=1613738746" alt="" />
                    <h2 className="text-center text-2xl font-bold my-3">James Watson</h2>
                    <div className="flex justify-center gap-2">
                        <a className="text-2xl" href=""><FaFacebookF className="text-[#0866ff]"></FaFacebookF></a>
                        <a className="text-2xl" href=""><AiOutlineTwitter className="text-[#1da1f2]"></AiOutlineTwitter></a>
                        <a className="text-2xl" href=""><AiOutlineInstagram className="text-[#c93085]"></AiOutlineInstagram></a>
                    </div>
                </div>
                <div>
                    <div>
                        <img className="w-full" src="https://boighor-demo.myshopify.com/cdn/shop/files/2_84d01e4d-a385-424a-8616-5a140b5cc6ec_large.jpg?v=1613738746" alt="" />
                    </div>
                    <h2 className="text-center text-2xl font-bold my-3">Madelyayn Robert</h2>
                    <div className="flex justify-center gap-2">
                        <a className="text-2xl" href=""><FaFacebookF className="text-[#0866ff]"></FaFacebookF></a>
                        <a className="text-2xl" href=""><AiOutlineTwitter className="text-[#1da1f2]"></AiOutlineTwitter></a>
                        <a className="text-2xl" href=""><AiOutlineInstagram className="text-[#c93085]"></AiOutlineInstagram></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;