import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;