import { useEffect, useState } from "react";
import BookCategory from "../BookCategory/BookCategory";


const BookCategories = () => {
    const [categories , setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>{
            console.log(setCategories(data));
        })
    },[])
    return (
        <div className="max-w-[1200px] mx-auto md:px-5 my-32">
            <h2 className="md:text-3xl text-2xl text-center mb-8 font-bold">Our Popular <span className="red_text">Category</span></h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {
                    categories.map(category => <BookCategory key={category._id} bookCategory={category}></BookCategory>)
                }
            </div>
        </div>
    );
};

export default BookCategories;