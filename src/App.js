
import './App.css';
import {Profile} from './profile/Profile'

function App() {
  return (
    <div className="App">
    <Profile FullName="yasser" Bio="this is my bio" Profission="student"> 
    <img src = "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg" alt ="profile pic"> </img>
    </Profile>
    </div>
  );
}




export default App;
