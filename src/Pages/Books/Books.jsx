import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../../Components/Book/Book";


const Books = () => {
    const { category} = useParams()
    const [books , setBooks] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/books/${category}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    },[category])
    return (
        <div className="max-w-[1200px] mx-auto md:px-5 my-16">
            <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">All Books {books.length}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;