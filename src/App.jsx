import Header from './assets/Header.jsx';
import Footer from './assets/Footer.jsx';
import Food   from './assets/Food.jsx';
import Card from './assets/card.jsx';
import Button from './assets/Button.jsx';
import Student from './assets/Student.jsx';
import UserGreeting from './assets/UserGreeting.jsx';
import List from './assets/List.jsx';
import Buttons from './assets/Buttons.jsx';
import MyComponent from './assets/MyComponent.jsx';
import Counter from './assets/Counter.jsx';



function App() {

      return(
        <>
            <Header/>  
            <Footer/>
            <Food/>
            <Card/>
            <Button/>
            <Student name="Spongebob" age="32" isStudent={true}/>
            <Student name="Patrick" age={42} isStudent={false}/>
            <Student name="Squidward" age={50} is Student={false}/>
            <Student name="Sandy" age={27} is Student={true}/>
            <Student />
            <UserGreeting isLoggedIn={false} username="Preeti"/> 
            <List/>
            <Buttons/>
            <MyComponent/>
            <Counter/>
            
     
         </>

      );
}

export default App
