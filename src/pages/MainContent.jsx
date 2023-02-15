import { Outlet } from 'react-router-dom';
import SideBar from '../components/DashboardSidebar';
import Header from '../components/DashboardHeader';
import '../css/AdminDashBoard.css';

export default function MainContent() {
    return (
        <>
            {/* css 控制sidebar 顯示用 */}
            <input type="checkbox" id="nav-toggle" />          
            <SideBar />
            <div className="main-content">
                <Header />
                <main>
                    <Outlet/>                   
                </main>
            </div>            
        </>
    );
};