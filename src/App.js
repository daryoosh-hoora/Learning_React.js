
/* This import might be uses for class
import { Component } from 'react' 
*/

import './App.css'
import Hello from './components/hello'

// function App() {
//     return (
//         <div className = 'App'>
//             <h1>Hello, World!</h1>
//         </div>
//     )
// }

// class App extends Component {
//     render() {
//         return (
//             <div className = 'App'>
//                 <h1>Hello, World!</h1>
//             </div>
//         )
//     }
// }

// const App = () => {
//     return (
//         <div className = 'App'>
//             <h1>Hello, World!</h1>
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div className = 'App'>
//             <HelloWorld />
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div className = 'App'>
//             <HelloWorld />
//             <HelloWorld />
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <div className = 'App'>
//             <HelloWorld />
//         </div>
//     )
// }

const App = () => {
    return (
        <div className='App'>
            <Hello name='World' />
            <Hello name='React' />
        </div>
    )
}

export default App
