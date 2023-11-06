
import swal from "sweetalert";

const BorrowedBook = ({ book , onDelete  }) => {
    const { _id, book_id, image, name, category, quantity, return_date, borrowed_date } = book;

    const handleReturnBook = () => {
        fetch(`http://localhost:5000/allBooks/${book_id}/increment`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: quantity + 1 })

        })
            .then((res) => res.json())
            .then(() => {});

        // 
        fetch(`http://localhost:5000/borrowBooks/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    onDelete(_id);
                    swal('Return Book' , 'successful' , 'success')
                }
        })


    }
    return (
        <div className="my-6 px-4">
            <div className="flex flex-col items-center bg-red-300 border border-gray-200 rounded-lg shadow md:flex-row md:p-0 p-4">
                <div>
                    <img className="object-cover bg-no-repeat md:my-0 my-4 w-[250px] md:h-[200px] h-[300px] md:rounded-none md:rounded-l-lg md:mr-4 mr-0" src={image} alt="" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-5 items-center ml-4">
                    <div className="w-[300px] md:mb-0 mb-3 md:space-y-4">
                        <h2 className="font-bold text-xl md:text-2xl">{name}</h2>
                        <p>Category : {category}</p>
                    </div>
                    <div className="w-[300px] md:space-y-4 text-xl font-medium">
                        <h2>Borrowed Date : {borrowed_date}</h2>
                        <h2>Return Date : {return_date}</h2>
                    </div>
                    <div >
                        <button onClick={handleReturnBook} className="btn btn-secondary mb-4">Return</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default BorrowedBook;