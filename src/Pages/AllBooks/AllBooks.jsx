import { useLoaderData } from "react-router-dom";
import Book from "./Book/Book";
import { useState } from "react";


const AllBooks = () => {
    const books = useLoaderData()
    const [filterBooks, setFilterBooks] = useState([])
    const [isClick, setIsClick] = useState(false)
    const handleFilterBook = () => {
        setIsClick(true)
        const book = books.filter(item => item?.quantity > 0)
        setFilterBooks(book)
    }
    return (
        <div>
            {
                isClick ? <h2 className="md:text-3xl text-2xl font-bold text-center my-8">All Books : {filterBooks.length} </h2> : <h2 className="md:text-3xl text-2xl font-bold text-center my-8">All Books : {books.length} </h2>
            }
            <div className="flex justify-center md:justify-end">
                <button onClick={handleFilterBook} className="btn btn-secondary md:btn-md btn-sm">Filter by available book</button>
            </div>
            {
                isClick ? <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 md:px-0 px-4 my-8 md:my-16">
                    {
                        filterBooks?.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div> : <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 md:px-0 px-4 my-8 md:my-16">
                    {
                        books?.map(book => <Book key={book._id} book={book}></Book>)
                    }
                </div>
            }
        </div>
    );
};

export default AllBooks;