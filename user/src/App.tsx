
import './App.css'
import ComplaintForm from './component/Form'

function App() {

  return (
    <div className=" h-screen p-5">
      <div className="title text-center text-3xl text-[rgb(113,113,122)] font-bold my-5">
        Register Your <span className='text-[rgb(22,173,204)]'>Complaint</span>
      </div>
      <ComplaintForm/>
    </div>
  )
}

export default App
