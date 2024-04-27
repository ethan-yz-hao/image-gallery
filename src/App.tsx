import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage.tsx';
import GlobalStyles from '@/styles/globalStyles';

const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;
