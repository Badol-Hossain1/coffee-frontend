import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
    const LoadedCoffees = useLoaderData()
    const [coffees,setCoffees] = useState(LoadedCoffees)
    return (
        <>
            <div className="text-5xl">data {coffees.length}</div>
          <div className='grid grid-cols-2'>
             
           {
            coffees.map(coffee => <CoffeeCard key={coffee._id}
              
              coffees = {coffees}
              setCoffees={setCoffees}
              coffee={coffee}></CoffeeCard>)
           }
          </div>
        </>
    )
}

export default App
