import './App.css';
import Props from './component/Props'
import Person from './component/Person'
import PersonList from './component/PersonList'
import Status from './component/Status'
import Heading from './component/Heading';
import Leonado from './component/Leonado'
import Button from './component/Button'
import InputEvent from './component/InputEvent';



function App() {
  const personName = {
    first: 'Joe',
    last: 'John'
   }
   const personLists = [
    {
      first: 'Aderanti',
      last: "Olajimoh"  
    },
    {
      first: 'Aderonu',
      last: "Okikiola"  
    },
    {
      first: 'Adekola',
      last: "Omipidan"  
    }
]
   
  return (
    <div className="App">
       
      <Props name={"Aderanti"}  isLoggedIn={true}/>
      <Person nameT={personName}/>
      <PersonList name={personLists}/>
      <Status status={'error'}/>
      <Button handleClick={(event, id) => console.log("button clicked",event, id)}/>
      <Heading>
        <Leonado/>
      </Heading>
      <InputEvent value ='' handleOnChange={(event)=> (console.log("cool",event))} />
    </div>
  );
}

export default App;
