import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import sorryImage from "../../assets/image/sorry__image-removebg-preview.png"

const BookDetails = () => {
    const [book, setBook] = useState([])
    const [borrow, setBorrow] = useState([])
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const { _id, image, name, author_name, category, short_description, rating } = book;
    const [quantity, setQuantity] = useState(0);

    const text = borrow.find(item => item?.email === user?.email && item?.book_id === _id);
    const isBorrow = !!text; // If 'text' is found, 'isBorrow' will be true; otherwise, it will be false

    console.log('hmmmmmmmmmm', isBorrow);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const borrowed_date = (`${day}-${month}-${year}`)


    // 654695efc0a1db0431fd357f 
    // 654695efc0a1db0431fd357f




    useEffect(() => {
        fetch(`http://localhost:5000/allBooks/${id}`)
            .then(response => response.json())
            .then(data => {
                setBook(data)
                setQuantity(data.quantity);
            });
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:5000/borrowBooks')
            .then(res => res.json())
            .then(data => setBorrow(data))
    }, [])






    const handleClose = () => {
        const modal = document.getElementById('my_modal_1');
        modal.close();
    }

    const handleReturnDate = e => {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value;
        const parsedDate = new Date(date);
        const return_date = `${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}`;

        // setQuantity(prevQuantity => prevQuantity - 1);
        // fetch(`http://localhost:5000/allBooks/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ quantity: quantity - 1 }),
        // })
        //     .then(res => res.json())
        //     .then(() => { })
        fetch(`http://localhost:5000/allBooks/${id}/decrement`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: quantity - 1 })

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setQuantity(quantity - 1)
                }
            });


        const borrowBook = { email: user?.email, userName: user?.displayName, image, name, category, return_date, borrowed_date, book_id: _id }


        fetch(`http://localhost:5000/borrowBooks/${_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(borrowBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Borrow this book", "successful", "success")
                        .then(() => {
                            window.location.reload();
                        });
                }
            })



        // fetch(`http://localhost:5000/borrowBooks/${_id}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(borrowBook),
        // })
        //     .then((response) => {
        //         if (response.status === 400) {
        //             setError('Book already exists');
        //         } else if (response.status === 200) {
        //             setError('');
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });



        const modal = document.getElementById('my_modal_1');
        modal.close();
    }

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
                        <button disabled={quantity <= 0} className="btn btn-secondary" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
                        {
                            isBorrow ?  <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="modal-action flex-col items-center justify-center text-center">
                                    <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    <form onSubmit={handleReturnDate} method="dialog" className="space-y-3 text-xl font-bold">
                                        <div className="flex justify-center mb-5">
                                            <img className="w-2/4" src={sorryImage} alt="" />
                                        </div>
                                        <h2 className="text-2xl">This book is borrow all ready.</h2>
                                        <p>Return it first and then you can borrow it.</p>
                                    </form>
                                </div>
                            </div>
                        </dialog> :  <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="modal-action flex-col items-center justify-center text-center">
                                    <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    <form onSubmit={handleReturnDate} method="dialog" className="space-y-3 text-xl font-bold">
                                        <div className="flex justify-center mb-5">
                                            <img className="w-2/4" src="https://cdn-icons-png.flaticon.com/512/7167/7167795.png" alt="" />
                                        </div>
                                        <label>
                                            Return date: <br />
                                            <input type="date" name="date" id="inputField" className="border-2 border-black rounded-md my-4" required />
                                        </label> <br />
                                        <input type="submit" className="btn bg-gradient-to-r from-cyan-500 to-[#fa0dc3] font-bold text-white" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        }
                        <button className="btn btn-warning">Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;