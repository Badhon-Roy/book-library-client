// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "../../Components/Book/Book";
import { useQuery } from "@tanstack/react-query";


const Books = () => {
    const { category } = useParams()
    // const [books, setBooks] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/books/${category}`)
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [category])

    const { data: books, isLoading, isError, error } = useQuery({
        queryKey: ['books' , category],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/books/${category}`)
            return res.json();
        }
    })

    if (isLoading) {
        return <div className="flex justify-center items-center h-[50vh]">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    else if (isError) {
        return <div className="flex justify-center items-center h-[50vh]">
            <h3 className="text-2xl text-red-600 font-bold">{error.message}</h3>
        </div>
    }



    return (
        <div className="my-16 md:px-0 px-4">
            {
                books?.length > 0 ? <div>
                    <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
                        {books?.slice(0, 1).map(book => (
                            <span key={book._id}>{book.category}</span>
                        ))} Books {books?.length}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            books?.map(book => <Book key={book._id} book={book}></Book>)
                        }
                    </div>
                </div> : <div >
                    <div className="flex justify-center items-center mt-5">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/845/913/small/online-courses-with-students-sitting-on-books-pile-with-laptops-notebooks-png.png" alt="" />
                    </div>
                    <h2 className="md:text-4xl text-3xl font-bold text-center my-16">There are currently no books.</h2>
                </div>
            }
        </div>
    );
};

export default Books;