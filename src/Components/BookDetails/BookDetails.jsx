import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const [book, setBook] = useState([])
    const { id } = useParams()
    console.log(id);
    const { image, name, quantity, author_name, category, short_description, rating } = book; useEffect(() => {
        fetch(`http://localhost:5000/allBooks/${id}`)
            .then(res => res.json())
            .then(data => {
                setBook(data)
            })
    }, [id])
    return (
        <div className="max-w-[1200px] mx-auto md:px-5 my-16">
            <div className="md:w-2/3 mx-auto">
                <img className="w-full h-[70vh] mb-7" src={image} alt="" />
                <div className="md:px-0 px-5">
                    <h2 className="md:text-2xl text-xl font-bold">
                        {name}
                    </h2>
                    <p className="md:text-xl mt-2">Author name : <span className="red_text font-bold">{author_name}</span></p>
                    <p className="md:text-xl mt-2">Category : {category}</p>
                    <p className="md:text-xl mt-2">Quantity : {quantity}</p>
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
                    <p className="my-3">{short_description}</p>
                    <div className="flex justify-around">
                        <button className="btn btn-secondary">Borrow</button>
                        <button className="btn btn-warning">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;