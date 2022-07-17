import { useState } from 'react'
import AllRoutes from './components/AllRoutes'
import { GameStateContext } from "./context/Context";
function App() {
 
  // Here I have taken score as a state 
  var [score, setScore] = useState(0);
  
  // Here I have taken time as a state to count time.
  const [time, setTime] = useState(0);

  // This is by default timer state is true
  const [timerOn, setTimeOn] = useState(true);

  //Here I am calculating all the seconds, minutes and hours.
  const seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
  const minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
  const hours = ('0' + Math.floor((time / 600000) % 60)).slice(-2);
  return (
    <div className="App">

      {/* This is the contextprovider, and I have passed all the data to the 
      provider */}
      <GameStateContext.Provider
        value={{
          score,
          setScore,
          seconds,
          minutes,
          hours,
          time, setTime,
          timerOn, setTimeOn,
        }}
      >

      {/* Here I shown all the routes  */}
      <AllRoutes/>
      </GameStateContext.Provider>
    </div>
  )
}

export default App
