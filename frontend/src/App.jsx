import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {

  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then(res=>{
      console.log(res.data)
      setJokes(res.data)
    })
  },[])

  return (
    <div className='max-w-7xl w-full mx-auto '>
      <h1 className="text-center text-6xl font-black ">Jokes App</h1>
      <p className='text-xl '>Jokes : [{jokes.length}]</p>

      <div className='flex my-10 flex-row flex-wrap justify-start items-center gap-10'>
        {jokes.map((joke)=>(
          <div className='flex flex-col max-w-[320px] w-full hover:bg-white/30 items-center justify-center gap-3 border-[1px] border-white/30 rounded-2xl  p-4' key={joke.id}>
              <h2 className='text-xl text-white text-center'>{joke.title}</h2>
              <p className='text-base text-white text-center '>{joke.content}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
