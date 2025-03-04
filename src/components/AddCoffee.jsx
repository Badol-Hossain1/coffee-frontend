import Swal from 'sweetalert2'
const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault()
        const Form = new FormData(e.target)
        const Name = Form.get('name')

        const Chef = Form.get('Chef')

        const Photo = Form.get('Photo')

        const Details = Form.get('Details')

        const Category = Form.get('Category')

        const Taste = Form.get('Taste')

        const Supplier = Form.get('Supplier')

        const newCoffee = {
            Name,
            Supplier,
            Taste,
            Category,
            Details,
            Photo,
            Chef,
        }
        //    sent data to the server
        fetch('http://localhost:4000/AddCoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            // sending new data to server
            body: JSON.stringify(newCoffee),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Coffee Created',
                        text: 'you have successfully created the data',
                        icon: 'success',
                    })
                }
            })
    }
    return (
        <form onSubmit={handleAddCoffee} className="p-24  bg-[#a8a089]">
            <h1 className="text-center text-3xl font-bold text-yellow-300 mb-4">
                Add your Coffee
            </h1>
            <div className="flex gap-2">
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Name</label>
                    <input
                        className="bg-gray-400 rounded-md placeholder-gray-500 px-2 py-2.5 w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee name"
                    />
                </div>
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Chef</label>
                    <input
                        className="bg-gray-400 rounded-md placeholder-gray-500 px-2 py-2.5  w-full"
                        type="text"
                        name="Chef"
                        placeholder="Enter coffee chef"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Supplier</label>
                    <input
                        className="bg-gray-400 placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="Supplier"
                        placeholder="Enter coffee supplier"
                    />
                </div>
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Taste</label>
                    <input
                        className="bg-gray-400 placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="Taste"
                        placeholder="Enter coffee taste"
                    />
                </div>
            </div>{' '}
            <div className="flex gap-2">
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Category</label>
                    <input
                        className="bg-gray-400 placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="Category"
                        placeholder="Enter coffee category"
                    />
                </div>
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Details</label>
                    <input
                        className="bg-gray-400 placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="Details"
                        placeholder="Enter coffee details"
                    />
                </div>
            </div>
            <div className="flex md:w-full flex-col from-control">
                <label>Photo</label>
                <input
                    className="bg-gray-400 placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                    type="text"
                    name="Photo"
                    placeholder="Enter photo URL"
                />
            </div>
            <button className="bg-amber-300 cursor-pointer text-black p-2 w-full mt-4 rounded-md">
                Add Coffee
            </button>
        </form>
    )
}

export default AddCoffee
