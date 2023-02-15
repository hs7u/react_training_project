import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Index() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/${user}`);
    };
    return (
        <div className="App">
            <h1>Hello, world!</h1>
            <h1>Hello, {user}!</h1>
            <input
                type="text"
                onChange={(event) => setUser(event.target.value)}
            />
            <button onClick={onClick} type="button">
                GOOOOOOOOOO
            </button>
        </div>
    );
}

export default Index;
