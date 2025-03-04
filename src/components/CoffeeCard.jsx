const CoffeeCard = ({ coffee }) => {
    const { Name, Supplier, Taste, Category, Details, Photo, Chef } = coffee

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
                    <button className="btn btn-primary">edit</button>
                    <button className="btn btn-secondary">delete</button>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
