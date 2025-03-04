const AddCoffee = () => {
    return (
        <form className="p-24  bg-[#a8a089]">
            <h1 className="text-center text-3xl font-bold text-yellow-300 mb-4">Add your Coffee</h1>
            <div className="flex gap-2">
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Name</label>
                    <input
                        className="bg-white rounded-md placeholder-gray-500 px-2 py-2.5 w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee name"
                    />
                </div>
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Chef</label>
                    <input
                        className="bg-white rounded-md placeholder-gray-500 px-2 py-2.5  w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee chef"
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Supplier</label>
                    <input
                        className="bg-white placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee supplier"
                    />
                </div>
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Taste</label>
                    <input
                        className="bg-white placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee taste"
                    />
                </div>
            </div>{' '}
            <div className="flex gap-2">
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Category</label>
                    <input
                        className="bg-white placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee category"
                    />
                </div>
                <div className="flex md:w-1/2 flex-col from-control">
                    <label>Details</label>
                    <input
                        className="bg-white placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                        type="text"
                        name="name"
                        placeholder="Enter coffee details"
                    />
                </div>
            </div>
            <div className="flex md:w-full flex-col from-control">
                <label>Photo</label>
                <input
                    className="bg-white placeholder-gray-500 rounded-md px-2 py-2.5  w-full"
                    type="text"
                    name="name"
                    placeholder="Enter photo URL"
                />
            </div>
            <button className="bg-amber-300 text-black p-2 w-full mt-4 rounded-md">
                Add Coffee
            </button>
        </form>
    )
}

export default AddCoffee
