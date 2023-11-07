import { useForm } from "react-hook-form";
import { BsDot } from "react-icons/bs"
import swal from "sweetalert";
const AddBook = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.quantity = parseInt(data.quantity);
        fetch('https://book-library-server-umber.vercel.app/allBooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    swal("Book add", "successful", "success")
                    reset();
                }
            })
    };

    return (
        <div className="bg-blue-300 md:p-10 p-5">
            <h2 className="text-4xl font-bold text-center my-8 underline">Add Book</h2>
            <div className=" ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex gap-10 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Name :</label>
                            <input
                                {...register("name", { required: true })}
                                className="w-full px-5 rounded-md py-1" placeholder="Book Name" />
                            <br />
                            {errors.name && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Author Name :</label>
                            <input {...register("author_name", { required: true })} className="w-full px-5 rounded-md py-1" placeholder="Author Name" />
                            <br />
                            {errors.author_name && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex mt-4 gap-10 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Category :</label>
                            <select {...register("category", { required: true })} className="w-full px-5 rounded-md py-1" defaultValue="">
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
                            <input {...register("rating", { required: true })} className="w-full px-5 rounded-md py-1" placeholder="rating" />
                            <br />
                            {errors.rating && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                    </div>
                    <div className="md:flex mt-4 gap-10 justify-between">
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Quantity :</label>
                            <input type="number" {...register("quantity", { required: true })}
                                className="w-full px-5 rounded-md py-1" placeholder="quantity" />
                            <br />
                            {errors.quantity && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                        <div className="flex-1 space-y-2">
                            <label className="text-xl font-bold">Short Description :</label>
                            <input {...register("short_description", { required: true })} className="w-full px-5 rounded-md py-1" placeholder="short description" />
                            <br />
                            {errors.short_description && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <label className="text-xl font-bold">Image URL :</label>
                        <input {...register("image", { required: true })} className="w-full px-5 rounded-md py-1" placeholder="image URL" />
                        <br />
                        {errors.image && <span className="text-red-600 flex items-center"><BsDot></BsDot> This field is required</span>}
                    </div>

                    <input className="btn btn-block mt-5 bg-blue-500 normal-case hover:bg-blue-700 text-xlt text-white text-xl" type="submit" value="Add Book" />
                </form>
            </div>
        </div>
    );
};

export default AddBook;