import { useContext, useEffect, useState } from "react";
import BorrowedBook from "./BorrowedBook/BorrowedBook";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BorrowedBooks = () => {
    const [books, setBooks] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/borrowBooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [user])
    return (
        <div className="max-w-[1200px] mx-auto md:px-5">
            {
                books.length > 0 ? <div>
                    {
                        books?.map(book => <BorrowedBook key={book._id} book={book}></BorrowedBook>)
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