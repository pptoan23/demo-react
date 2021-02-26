import React, { useState, useEffect } from 'react';

const App = () => {
  const [myState, setMyState] = useState(null)
  const [myStatex, setMyStatex] = useState(null)
  const [myStates, setMyStates] = useState(null)

  useEffect(() => {
    setMyState("XXXXX")
    setMyStatex("YYYYY");
  }, [])

  
  return (
    <div >
      {myState}
      {
        myStatex ? <div data-testid="demo">Here is the exception 1</div> : null
      }
     <div data-testid="demox">{myStates}</div>
    </div>
  );
}

export default App;
