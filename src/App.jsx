import { useLoaderData } from 'react-router'
import './App.css'
import CoffeeCard from './components/CoffeeCard'

function App() {
    const coffees = useLoaderData()
    return (
        <>
            <div className="text-5xl">data {coffees.length}</div>
          <div className='grid grid-cols-2'>
             
           {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
           }
          </div>
        </>
    )
}

export default App
