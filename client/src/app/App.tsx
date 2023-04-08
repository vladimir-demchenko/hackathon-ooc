import { Menu } from 'widgets/Menu';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    return (
        <div className='app'>
            <Menu/>
            <AppRouter/>
        </div>
    );
};

export default App;