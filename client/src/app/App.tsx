import { Menu } from 'widgets/Menu';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Header } from 'widgets/Header';

const App = () => {
    return (
        <div className='app'>
            <div className='app_main'>
                <Menu/>
                <div className='app_main__content'>
                    <Header/>
                    <AppRouter/>
                </div>
            </div>
        </div>
    );
};

export default App;