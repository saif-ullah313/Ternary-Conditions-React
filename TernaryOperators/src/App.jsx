import Item from './Questions1'
import Items from './Question2'
import Drink from './Question3'

import './App.css'

function App() {


  return (
    <>
     <section>
      <h2>Question No 1:</h2>
      <h3>Ternary Conditions:(?:)</h3>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
    <section>
      <h2>Question No 2:</h2>
      <h3>Ternary Conditions:(&&)</h3>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Items 
          importance={9} 
          name="Space suit" 
        />
        <Items 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Items 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
    <section>
    <div>
      <h2>Question No 3:</h2>
      <h3>If Statement</h3>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
    </section>
    </>
  )
}

export default App
