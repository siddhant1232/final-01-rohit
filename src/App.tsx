import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';

const Layout: React.FC = () => {
    return (
        <div className="bg-background font-fira-code text-gray-text relative">
            <Header />
            <SocialSidebar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<AllProjects />} />
            </Route>
        </Routes>
    );
}

export default App;
