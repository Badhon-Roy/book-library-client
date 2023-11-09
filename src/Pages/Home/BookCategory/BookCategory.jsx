import { AiOutlineRight } from "react-icons/ai"
import { Link } from "react-router-dom";

const BookCategory = ({ bookCategory }) => {
    const { image, category } = bookCategory;
    return (
        <div className="related group">
            <div className="shadow-lg p-2 rounded-2xl bg-red-400 transition-transform transform scale-95 group-hover:scale-105 duration-200">
                <img className="w-full rounded-2xl md:h-[200px] h-[250px]" src={image} alt="" />
                <div className="text-center">
                    <h3 className="md:text-2xl text-xl font-bold  my-4">{category}</h3>
                    <div className="flex justify-center">
                        <Link to={`/books/${category}`}>
                            <button className="bg-[#f000b8] hover:bg-[#cd1aa3] text-xl text-white py-1 mb-3 px-5 rounded-md flex items-center">Learn more <AiOutlineRight></AiOutlineRight> </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;