import Banner from "./Banner/Banner";
import BookCategories from "./BookCategories/BookCategories";
import Teams from "./Teams/Teams";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategories></BookCategories>
            <div className="items-center lg:flex gap-4 my-16">
                <div className="flex-1">
                    <img className="md:h-[500px] w-full object-cover rounded" src="https://img.freepik.com/premium-photo/robot-reading-book_842454-1065.jpg" alt="" />
                </div>
                <div className="flex-1 md:px-0 px-4">
                    <h2 className="md:text-4xl text-2xl my-3 font-bold">The Vital Role of Libraries in <span className="red_text">Knowledge</span></h2>
                    <p className="md:text-xl">Libraries are essential repositories of knowledge, providing access to a diverse range of resources, from books to digital materials. They play a crucial role in education, research, and personal development. Libraries offer structured information, academic support, and serve as hubs for community learning. They are instrumental in preserving cultural and historical heritage, fostering independent learning, and promoting equal access to knowledge. Modern libraries also incorporate digital resources, making information accessible from anywhere. They inspire creativity and innovation, provide equal access to knowledge, and support problem-solving and collaboration. Furthermore, they preserv... </p>
                    <div className="flex justify-end pr-4 my-4">
                        <button className="btn btn-secondary">Read more</button>
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
                    <div className="flex justify-center">
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