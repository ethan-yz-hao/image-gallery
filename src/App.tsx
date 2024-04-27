import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage.tsx';
import GlobalStyles from '@/styles/globalStyles';
import AboutPage from "@/pages/AboutPage.tsx";
import Navbar from "@/components/Navbar.tsx";

const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
};

export default App;
