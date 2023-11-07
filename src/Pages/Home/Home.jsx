import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";
import BookCategories from "./BookCategories/BookCategories";
import Teams from "./Teams/Teams";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 500,
            offset: 200,
        });
    }, []);

    const navigate = useNavigate()
    const handleReadMore = () => {
        navigate('/readMore')
    }
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                <div className="items-center lg:flex gap-8 my-16">
                    <div className="flex-1">
                        <img className="md:h-[500px] w-full object-cover rounded" src="https://img.freepik.com/premium-photo/robot-reading-book_842454-1065.jpg" alt="" />
                    </div>
                    <div className="flex-1 md:px-0 px-4">
                        <h2 className="md:text-4xl text-2xl my-3 font-bold">The Vital Role of Libraries in <span className="red_text">Knowledge</span></h2>
                        <p className="md:text-xl">Libraries play a vital role in the acquisition, preservation, and dissemination of knowledge, serving as repositories of information and hubs of learning for individuals and communities. In a world inundated with digital resources, libraries continue to be essential institutions that contribute to the enrichment of society through access to books, research materials, and educational programs. This essay explores the critical role of libraries in knowledge management and dissemination, emphasizing their historical significance, their evolution in the digital age, and their ...</p>
                        <div className="flex justify-end pr-4 my-4">
                            <button onClick={handleReadMore} className="btn btn-secondary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <Teams></Teams>
            <div className="md:flex items-center gap-10 my-16">
                <div className="flex-1 flex justify-center">
                    <img className="w-[300px]" src="https://s.alicdn.com/@sc04/kf/H03c6c6547f4f40008e76c64ebb3550a7o.jpg_720x720q50.jpg" alt="" />
                </div>
                <div className="flex-1 md:px-0 px-4 space-y-3 text-center">
                    <h2 className="md:text-3xl text-2xl font-bold underline">STAY WITH US</h2>
                    <p className="md:text-xl">Subscribe to our Book Library Management Ltd now and stay up-to-date with new collections, the latest look books and exclusive books.</p>
                    <div className="flex justify-center zoom-in-up">
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text md:text-xl">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;