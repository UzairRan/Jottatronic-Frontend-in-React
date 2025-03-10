// src/layouts/DashboardLayout.jsx

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';

export default function DashboardLayout() {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <main className="dashboard-main">
        <TopNav />
        <div className="content-area">
          <Outlet /> {/* This renders the dashboard content */}
        </div>
      </main>
    </div>
  );
} 