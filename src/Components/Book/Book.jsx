import { FaStar } from "react-icons/fa"
import "./Book.css"
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {_id, image, name,category, rating } = book;
    return (
        <div className="bg-base-100 shadow-xl">
            <figure><img className="w-full h-[250px]" src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="md:text-2xl text-xl font-bold">
                    {name}
                </h2>
                <p>Category : {category}</p>
                <div className="flex">

                    {Array.from({ length: 5 }, (_, i) => {
                        const starValue = i + 1;
                        return (
                            <span
                                key={starValue}
                                className={`star ${starValue <= rating ? 'active' : ''}`}
                            >
                                <FaStar></FaStar>
                            </span>
                        );
                    })}
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/allBooks/${_id}`}>
                        <button className="badge badge-outline py-3 px-4 hover:bg-rose-500 font-bold hover:text-white ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Book;