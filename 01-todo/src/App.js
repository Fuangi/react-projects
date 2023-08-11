// we import all those dependencies from package andother componenets to use them in this file like below 
import Todo from './components/todo';
/* import Modal from './components/Modal';
import Backdrop from './components/backdrop'; */
// ps: file ext (.js) can be ommitted
function App() {
  //a function with react componenet that is used as an html element. it allows for returning jsx all in all, a function
  return (
    // in here, write the code you want to be rendered in the browser
    <div>
      <h1>My Todos</h1>
      {/* to then use another component in a file, write the component (function) name as an open html element */}
      
        <Todo text='Learn React'/> 
        {/*like so and must start with UC*/}
        <Todo text = 'Master react'/>
        {/* Passing data in a component as passing arguments to a function .. use text attr and match in component*/}
        <Todo text = 'Explore the full React Course'/>
       {/* to allow for readability and modules, we can use other components in other .js files and import too */}

       {/* <Modal />
       <Backdrop /> they'll take effect fron the delethandler func*/}

       {/* to change content on a loaded page, we change its state by... check todo component*/}
    </div>
  );
}

export default App;
//it is exported to make it available out of the file