import { Link } from 'react-router'
import Swal from 'sweetalert2'
const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, Name, Supplier, Taste, Category, Details, Photo, Chef } =
        coffee

    const handleDelete = (_id) => {
        console.log('🚀 ~ CoffeeCard ~ _id:', _id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Your file has been deleted.',
                                icon: 'success',
                            })
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className=" p-24">
            <div className="card card-side  bg-yellow-200 p-4 text-black shadow-sm">
                <figure>
                    <img
                        src="https://i.ibb.co.com/67HHHLrD/bbq-summer-party-illustration-ai-generative-free-photo.jpg"
                        alt="Movie"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>{Details}</p>

                    <h2 className="">{Chef}</h2>
                    <button className="btn btn-success">View</button>
                    <Link className='btn btn-primary' to={`updateCoffee/${_id}`}>
                    <button className="">edit</button>
                    </Link>
                   
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-secondary"
                    >
                        delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
