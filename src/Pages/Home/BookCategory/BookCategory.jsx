import { AiOutlineRight } from "react-icons/ai"
import { Link } from "react-router-dom";

const BookCategory = ({ bookCategory }) => {
    const { image, category } = bookCategory;
    return (
        <div className="shadow-lg p-2 rounded-2xl bg-red-300">
            <img className="w-full rounded-2xl h-[200px]" src={image} alt="" />
            <div className="text-center">
                <h3 className="md:text-2xl text-xl font-bold  my-4">{category}</h3>
                <div className="flex justify-center">
                    <Link to={`/books/${category}`}>
                        <button className="red_bg hover:bg-blue-600 py-1 mb-3 px-5 text-xl text-white rounded-md flex items-center">Learn more <AiOutlineRight></AiOutlineRight> </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;