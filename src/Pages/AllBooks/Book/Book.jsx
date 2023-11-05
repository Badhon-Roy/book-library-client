import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const {_id , image, name, quantity, author_name, category, rating } = book;
    return (
        <div className="shadow-xl">
            <img className="md:h-[250px] h-[200px] w-full" src={image} alt="" />
            <div className="p-4">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>Quantity: {quantity}</p>
                <p>Author: <span className="font-bold">{author_name}</span></p>
                <p>{category}</p>
                <div className="flex">

                    {Array.from({ length: 5 }, (_, i) => {
                        const starValue = i + 1;
                        return (
                            <span
                                key={starValue}
                                className={`star ${starValue <= rating ? 'active' : ''}`}
                            >
                                <FaStar className="text-sm"></FaStar>
                            </span>
                        );
                    })}
                </div>
                <div className="flex justify-end">
                    <Link to={`/allBooks/${_id}`}>
                        <button className="badge badge-outline py-3 px-4 hover:bg-rose-500 font-bold hover:text-white">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Book;