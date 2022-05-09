import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Corpo from './Corpo';
import Fundomobile from './Fundomobile';

 
function App() {
    return (
        <div>
            <Navbar />
            <Corpo />    
            <Fundomobile />
        </div>
    )
}

ReactDOM.render(App(), document.querySelector('.root'));