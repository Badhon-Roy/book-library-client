// import { useEffect, useState } from "react";
import BookCategory from "../BookCategory/BookCategory";
import { useQuery } from "@tanstack/react-query";


const BookCategories = () => {
    // const [categories , setCategories] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/categories')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(setCategories(data));
    //     })
    // },[])
    const { data: categories , isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
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
        <div className="my-16 md:my-32 md:px-0 px-4">
            <h2 className="md:text-3xl text-2xl text-center mb-8 font-bold">Our Popular <span className="red_text">Category</span></h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {
                    categories?.map(category => <BookCategory key={category._id} bookCategory={category}></BookCategory>)
                }
            </div>
        </div>
    );
};

export default BookCategories;