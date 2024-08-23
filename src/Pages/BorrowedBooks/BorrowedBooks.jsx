import { useContext, useEffect, useState } from "react";
import BorrowedBook from "./BorrowedBook/BorrowedBook";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const BorrowedBooks = () => {
    const [books, setBooks] = useState([])
    const { user } = useContext(AuthContext)


    // useEffect(() => {
    //     fetch(`https://book-library-server-chi.vercel.app/borrowBooks?email=${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => setBooks(data))
    // }, [user])
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`https://book-library-server-chi.vercel.app/borrowBooks?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    useEffect(() => {
        if (data) {
            setBooks(data)
        }
    }, [data])
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


    const handleBookDelete = () => {
        // setBooks(books.filter(book => book._id !== deletedId));
        refetch()
    };


    return (
        <div>
            {
                books?.length > 0 ? <div>
                    {
                        books?.map(book => <BorrowedBook key={book._id} book={book} onDelete={handleBookDelete}></BorrowedBook>)
                    }
                </div> :
                    <div >
                        <div className="flex justify-center items-center mt-5">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/845/913/small/online-courses-with-students-sitting-on-books-pile-with-laptops-notebooks-png.png" alt="" />
                        </div>
                        <h2 className="md:text-4xl text-3xl font-bold text-center my-16">You are not borrow any book.</h2>
                    </div>
            }
        </div>
    );
};

export default BorrowedBooks;