
import { useQuery } from "@tanstack/react-query";
import Book from "./Book/Book";
import { useState } from "react";


const AllBooks = () => {
    // const [books, setBooks] = useState([])
    const [filterBooks, setFilterBooks] = useState([])
    const [isClick, setIsClick] = useState(false)
    // useEffect(() => {
    //     fetch('https://book-library-server-chi.vercel.app/allBooks' , {credentials : "include"})
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, []);

    const { data: books, isLoading, isError, error } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('https://book-library-server-chi.vercel.app/allBooks', { credentials: "include" })
            return res.json();
        }
    })

    if (isError) {
        return <div className="flex justify-center items-center h-[50vh]">
            <h3 className="text-2xl text-red-600 font-bold">{error.message}</h3>
        </div>
    }

    const handleFilterBook = () => {
        setIsClick(true)
        const book = books.filter(item => item?.quantity > 0)
        setFilterBooks(book)
    }
    return (
        <div>
            {
                isLoading ? <div className="flex justify-center items-center h-[50vh]">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
                    :
                    <div>
                        {
                            isClick ? <h2 className="md:text-3xl text-2xl font-bold text-center my-8">All Books : {filterBooks?.length} </h2> : <h2 className="md:text-3xl text-2xl font-bold text-center my-8">All Books : {books?.length} </h2>
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
            }
        </div>
    );
};

export default AllBooks;