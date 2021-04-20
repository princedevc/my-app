import React, { Component } from 'react';
import randomcolor from 'random-color';
import logo from './logo.svg';
import './App.css';
// import MainContent from './components/MainContent';
// import Header from './components/Header';
// import Footer from './components/Footer';
import TodoItem from './components/TodoItem';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './jokesData';
import Product from './components/Product';
import products from './vschoolProducts';
import todosData from './todosData';
import Conditional from './components/Conditional';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos:todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo =>{
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  render(){
    const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
          {TodoItems}
      </div>
  )
  }
}

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       loading: false,
//       character: {}
//     }
//   }
//   componentDidMount() {
//     this.setState({loading:true})

//     fetch("https://swapi.dev/api/people/1/")
//     .then(response => response.json())
//     .then(data =>{
//       this.setState({
//         loading: false,
//         character: data
//       })
//     })
//   }
//   render(){
//     const text = this.state.loading ? "loading..." : this.state.character.name
//     return(
//       <div>
//         <p>{text}</p>
//       </div>
//     )
//   }
// }



// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       count: 0,
//       color: ""
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//     componentDidUpdate(prevProps, prevState){
//       if(prevState.count !== this.state.count){
//         const newColor = randomcolor()
//         this.setState({color: newColor})
//       }

//     }
//   render(){

//     return (
//       <div>
//         <h1 style={{color: this.state.color}}> {this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>

//         </div>
//     )

//   }
// }

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading : true
//     }
//   }
//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({
//         isLoading : false
//       })
//     }, 5000)
//   }
//   render() {
//     return (
//       <div>
//         { this.state.isLoading ? <h1> Loading... </h1> : <Conditional />}
//       </div>
//   )
//   }
// }

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       unreadMessages : ["a", "b"]
//     }
//   }
//   render(){
//     return(
//         <div>
//           {
//             this.state.unreadMessages.length > 0 && <h2>you have {this.state.unreadMessages.length} unread messages!</h2>
//           }
//         </div>
//       )
//   }
  
// }

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {
//       isLoggedIn : false 
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   componentDidMount(){

//   }
//   handleClick(){
//     this.setState(prevState => {
//       return {
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     } )
//   }
//   render(){
//     let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//     let displayText = this.state.isLoggedIn ? "Logged In " :"Log out"
//     return(
//     <div>
//       <button onClick={this.handleClick}>{buttonText}</button>
//       <h1>{displayText}</h1>
//     </div>
//   )
//   }
  
// }
export default App;

