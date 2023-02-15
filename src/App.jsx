import './App.css';
import ContextProvider from './util/ContextProvider';
import RouterTable from './router/RouterTable';

function App() {
    return (
        <ContextProvider>
            <RouterTable />
        </ContextProvider>
    );
}

export default App;
