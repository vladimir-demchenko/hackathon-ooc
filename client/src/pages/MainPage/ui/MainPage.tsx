import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Link } from 'shared/ui/Link/Link';

export const MainPage = () => {
    return (
        <div className='main'>
            MAIN PAGE
            <Button>huy</Button>
            <Link href='#'>pizda</Link>
            <Input placeholder='huyhuy'/>
        </div>
    );
};