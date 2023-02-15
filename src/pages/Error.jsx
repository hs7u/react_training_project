import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/');
    };
    return (
        <div>
            <h1>Hello, 404!</h1>
            <button onClick={onClick} type="button">
                back to index
            </button>
        </div>
    );
}

export default Error;
