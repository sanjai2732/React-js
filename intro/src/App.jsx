// import { Header } from "./components/Header";
// import { Footer } from './components/Footer';
// import { Hero } from './components/Hero';
// import { Navbar } from './components/Navbar';
// import './css/app.css'
// import { Student } from './components/student';
// import { ChildCompoent } from './components/ChildCompoent';
// import { Table } from './components/Table';
// import { OneofColor } from './components/OneofColor'

// import { OneOfType } from './components/OneOfType';
import { FunctionSample } from './components/FunctionSample';
import './css/navbar.css'
// import { ArrayOfObject } from './components/ArrayOfObject';

// import {Fragment} from  "react"
function App() {
  const HandingButton=()=>{
    alert("Helloooo!")
  }
  // const items=[
  //   {id:1,name:"iteam 1"},
  //   {id:2,name:"iteam 2"},
  //   {id:3,name:"iteam 3"},
  // ];
  return (
    <>

     {/* <Footer/>
    <Header/>
    <Navbar/>
     <Navbar/>
    <Hero/>
    <Navbar/> 
    <Navbar/> 
    <Navbar/> 
    <Navbar/> 
    <Hero/> */}
    {/* <Table name="Sanjai" age={20} married={false}/>
    <Table name="Ram" age={20} married={true}/>
    <Table name="Guru" age={22} married={true}/> */}
    {/* Table.defaultProps */}
    {/* <Table />
    <ChildCompoent>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat in consequuntur quidem voluptatibus optio cum. Eligendi perferendis praesentium nobis dicta, amet dignissimos, quasi natus similique voluptates, quae in inventore!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat in consequuntur quidem voluptatibus optio cum. Eligendi perferendis praesentium nobis dicta, amet dignissimos, quasi natus similique voluptates, quae in inventore!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat in consequuntur quidem voluptatibus optio cum. Eligendi perferendis praesentium nobis dicta, amet dignissimos, quasi natus similique voluptates, quae in inventore!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat in consequuntur quidem voluptatibus optio cum. Eligendi perferendis praesentium nobis dicta, amet dignissimos, quasi natus similique voluptates, quae in inventore!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat in consequuntur quidem voluptatibus optio cum. Eligendi perferendis praesentium nobis dicta, amet dignissimos, quasi natus similique voluptates, quae in inventore!</p>
    </ChildCompoent> */}
    {/* <ArrayOfObject items={items}/> */}
    {/* color="greenyellow" is wearning */}
    {/* <OneofColor color="green"/> */}
    {/* <OneOfType value="ONE"/>
    <OneOfType value={20}/>
    <OneOfType value={[1+2]}/> */}
    <FunctionSample handleClick={HandingButton} />
    </>

  );
    
}

export default App
