import { useForm } from "react-hook-form";
import { BsDot } from "react-icons/bs";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateBooks = () => {
    const book = useLoaderData()
    const { _id, image, name, author_name, category, quantity, short_description, rating } = book;
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.quantity = parseInt(data.quantity);
        fetch(`http://localhost:5000/allBooks/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    swal("Update book", "successful", "success")
                    navigate('/allCategoryBooks')
                }
            })
    };

    return (
        <div className="bg-gray-300 p-10">
            <h2 className="text-4xl font-bold text-center my-8 underline">Update Book</h2>
            <div className=" max-w-[1200px] mx-auto md:px-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex gap-10 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Name :</label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full px-5 rounded-md py-1" defaultValue={name} placeholder="Book Name" />
                            <br />
                            {errors.name && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Author Name :</label>
                            <input {...register("author_name", { required: true })} className="w-full px-5 rounded-md py-1" defaultValue={author_name} placeholder="Author Name" />
                            <br />
                            {errors.author_name && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex mt-4 gap-10 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Category :</label>
                            <select {...register("category", { required: true })} className="w-full px-5 rounded-md py-1" defaultValue={category}>
                                <option value="" disabled>Select a category</option>
                                <option value="Nobel">Nobel</option>
                                <option value="Horror">Horror</option>
                                <option value="History">History</option>
                                <option value="Travel">Travel</option>
                            </select>
                            <br />
                            {errors.category && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Rating :</label>
                            <input {...register("rating", { required: true })} className="w-full px-5 rounded-md py-1" defaultValue={rating} placeholder="rating" />
                            <br />
                            {errors.rating && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex mt-4 gap-10 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Quantity :</label>
                            <input type="number" {...register("quantity", { required: true })}
                                className="w-full px-5 rounded-md py-1" defaultValue={quantity} placeholder="quantity" />
                            <br />
                            {errors.quantity && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Short Description :</label>
                            <input {...register("short_description", { required: true })} className="w-full px-5 rounded-md py-1" defaultValue={short_description} placeholder="short description" />
                            <br />
                            {errors.short_description && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <label className="text-xl font-bold">Image URL :</label>
                        <input {...register("image", { required: true })} className="w-full px-5 rounded-md py-1" defaultValue={image} placeholder="image URL" />
                        <br />
                        {errors.image && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                    </div>

                    <input className="btn btn-block mt-5 normal-case bg-blue-500 hover:bg-blue-700 text-xlt text-white text-xl" type="submit" value="Update Book" />
                </form>
            </div>
        </div>
    );
};

export default UpdateBooks;