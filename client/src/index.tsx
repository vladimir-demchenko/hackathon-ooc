import App from 'app/App';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import './font.css'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme='light'>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
);