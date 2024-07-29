
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <div className='grid grid-rows-12 grid-flow-col gap-4 h-screen'>
      <div className="row-span-12 col-span-2 bg-gray-900">01</div>
      <div className="row-span-12 col-span-10 bg-slate-100">
        <Navbar/>
      </div>
      </div>
    </>
  )
}

export default App
