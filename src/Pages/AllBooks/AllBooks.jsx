import { useLoaderData } from "react-router-dom";
import Book from "./Book/Book";


const AllBooks = () => {
    const books = useLoaderData()
    return (
        <div className="max-w-[1200px] mx-auto px-5">
            <h2 className="md:text-3xl text-2xl font-bold text-center my-8">All Books : {books.length} </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 my-16">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;