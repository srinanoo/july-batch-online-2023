import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import FuncComponent from './components/FuncComp'
// import { FuncComponent1 } from './components/FuncComp'
import FuncComponent, { FuncComponent1, FuncComponent2 } from './components/FuncComp' 
import PropsComponent, { ExamComponent, MenuComponent } from './components/PropsComp'
import { MarksComponent } from './components/StatesComp'
import { CountComponent } from './components/countComp'
import APIComponent from './components/APIComp'
import FormComponent from './components/FormComp'
import EffectComponent from './components/EffectComp'
import FormAPIComponent from './components/FormAPIComp'
// import './styles.css'
// import colors from './colors.module.css'

// import HeaderComponent from './components/HeaderComp'
// import ProjectComponent from './components/ProjectComp'
// import AboutComponent from './components/AboutComp'
// import FooterComponent from './components/FooterComp'

// function App() {
// //   const [count, setCount] = useState(0);

//     // Rendering your variables within JSX Fragement
//     let i = 10; // number
//     let name = "Dinesh"; // string
//     let active = true; // boolean (to display inside HTML element, we will have to convert it to a string)
//     let arr = [1, "Dinesh", 30]; // array
//     let obj = {
//         id: 1,
//         name: "Dinesh",
//         active: true,
//         age: 30,
//     }; // object

//     // Render by looping
//     let menu = ["Home", "About", "Contact", "Blog", "Services"];

//     let output = menu.map((v, i) => {
//         return (
//             <li key={i}>{v}</li>
//         )
//     });
//     console.log(output);

//     // Conditional Rendering...
//     let show = false;
//     let showMenu = false;

//   return (
//     <>

//         <HeaderComponent />
//         <ProjectComponent />
//         <AboutComponent />
//         <FooterComponent />

//         {/* {
//             show
//                 ?
//                 <div>
//                     <p>Value of "i" variable is : {i}</p>
//                     <p>My Name is : {name}</p>
//                     <p>My Status is : {active.toString()}</p>
//                     <p>My Data is : {arr.join(" | ")}</p>
//                     <p>My Obj Data is : {obj.id}, {obj.name}, {obj.active.toString()}, {obj.age}</p>
//                 </div>
//                 :
//                 <div>You are not authorised to view this content</div>
//         }
        
//         <br /><br />
//         {
//             showMenu
//                 &&
//                 <nav>
//                     <ul>
//                         {
//                             menu.map((v, i) => {
//                                 return (
//                                     <li key={i}>{v}</li>
//                                 )
//                             })
//                         }
//                     </ul>
//                 </nav>
//         }
        
//         <br /><br />
//         <nav>
//             <ul>
//                 {output}
//             </ul>
//         </nav> */}
//     </>
//   )
// }

// function App() {
//     return (
//         <>
//             <FuncComponent />
//             <FuncComponent1 />
//             <FuncComponent2 />
//         </>
//     )
// }

// function App() {
//     let userData = {
//         "name": "Dinesh",
//         "age": 33,
//         "active": true,
//     };
//     let menuData = ["Home", "About", "Contact"];

//     let subject = "ReactJs";
//     let mark = 100;

//     const handleUser = () => {
//         console.log("User button is clicked");
//         console.log("Before Change: ", userData);
//         userData = {
//             "name": "New Name",
//             "age": 22,
//             "active": false,
//         }
//         console.log("After Change: ", userData);
//     }

//     const [count, setCount] = useState(0);
//     let count1 = 0; // initialising
//     const handleCount = () => {
//         console.log("Count button is clicked");
//         setCount(1); // fallback / callback / setter function
//         // count = 1;
//         count1 = 1; // reassigning
//         console.log(count1);
//     }

//     const [studentName, setStudentName] = useState("Dinesh");
//     const handleName = () => {
//         console.log("Name change button is clicked");
//         setStudentName("New Student Name");
//     }

//     const [logged, setLogged] = useState(false);
//     const handleLogged = () => {
//         console.log("Logged button is clicked");
//         setLogged(true);
//     }
//     const handleLogin = () => {
//         setLogged(true);
//     }
//     const handleLogout = () => {
//         setLogged(false);
//     }

//     const [nameList, setNameList] = useState(["a", "b", "c", "d", "e", "f"]);
//     const handleNameList = () => {
//         console.log("Name list button is clicked");
//         setNameList(["aaaa", "bbbb", "cccc", "dddd", "eeee"]);
//     }

//     const [userObj, setUserObj] = useState({
//         "id": 1,
//         "name": "Dinesh",
//         "age": 30,
//         "active": true,
//     });
//     const handleUserObj = () => {
//         console.log("User data object button is clicked");
//         // setUserObj({
//         //     "id": 1,
//         //     "name": "Dinesh",
//         //     "age": 30,
//         //     "active": false,
//         // });
//         // setUserObj((prevValues) => ({...prevValues, active: false}));

//         setUserObj((prev) => {
//             return {...prev, active: false};
//         });
//     }

//     console.log("Parent Component");
//     return (
//         <>
//             <h2>Props Component</h2>

//             <p>User Object Data</p>
//             <p>ID: {userObj.id}</p>
//             <p>Name: {userObj.name}</p>
//             <p>Age: {userObj.age}</p>
//             <p>Status: {userObj.active.toString()}</p>
//             <p><button onClick={handleUserObj}>Change User Data</button></p>

//             <hr />

//             <p>Names List</p>
//             <p>
//                 {nameList.join(" | ")}
//             </p>
//             <ol>
//             {
//                 nameList.map((v, i) => {
//                     return (
//                         <li key={i}>{v}</li>
//                     )
//                 })
//             }
//             </ol>
//             <p><button onClick={handleNameList}>Change Name List</button></p>

//             <hr />

//             <p>Logged: {logged.toString()}</p>
//             {/* <p><button onClick={handleLogged}>Change Logged</button></p> */}
//             {
//                 logged
//                     ?
//                     <p><button onClick={handleLogout}>Logout</button></p>
//                     :
//                     <p><button onClick={handleLogin}>Login</button></p>
//             }

//             <hr />

//             <p>Count: {count}</p>
//             <p>Count1: {count1}</p>
//             <p><button onClick={handleCount}>Change Count</button></p>

//             <hr />

//             <p>Name: {studentName}</p>
//             <p><button onClick={handleName}>Change Name</button></p>

//             <hr />

//             <h3>User Data</h3>
//             <p>My Name is: {userData.name}</p>
//             <p>My Age is: {userData.age}</p>
//             <p>My Status is: {userData.active.toString()}</p>
//             <p><button onClick={handleUser}>Change User</button></p>

//             <hr />

//             <h3>Menu</h3>
//             <nav>
//                 <ul>
//                     {
//                         menuData.map((v, i) => {
//                             return (
//                                 <li key={i}>{v}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </nav>
//             <p><button>Change Menu</button></p>

//             <hr />

//             <h2>Marks</h2>
//             <p>Subject: {subject}</p>
//             <p>Mark: {mark}</p>
//             <p><button>Change Mark</button></p>

//             <hr />

//             {/* <PropsComponent users={userData} />
//             <MenuComponent menu={menuData} />
//             <ExamComponent mark={100} subject="ReactJs" /> */}
//         </>
//     )
// }


function App() {
    let subject = "ReactJs";
    let mark = 100;

    // install a project dependency library
        // npm i <package/library name> => new way/syntax
        // npm install <package/library name> => old way/syntax

    // install a local / developer dependency library
        // npm i -D <package/library name> => new way/syntax
        // npm i --save-dev <package/library name> => old way/syntax
    
    // install a global (for all users in your laptop/system) dependency library
        // npm i -g <package/library name> => new way/syntax
        // npm i --global <package/library name> => old way/syntax

    console.log("Parent Component");
    return (
        <>
            {/* <h1>Parent Component</h1> */}

            {/* <MarksComponent subject={subject} mark={mark} /> */}
            {/* <CountComponent /> */}

            {/* <APIComponent /> */}

            {/* <FormComponent /> */}

            {/* <EffectComponent /> */}

            <FormAPIComponent />
        </>
    )
}

export default App;
