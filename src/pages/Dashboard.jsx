import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="dash-root">
      {/* Ambient orbs */}
      <div className="dash-orb dash-orb--1" />
      <div className="dash-orb dash-orb--2" />
      <div className="dash-orb dash-orb--3" />

      {/* Top bar */}
      <header className="dash-header">
        <div className="dash-logo">
          <div className="dash-logo-icon">
            <span /><span /><span /><span />
          </div>
          <span className="dash-logo-text">KRIYANTRA</span>
        </div>
        <div className="dash-header-right">
          <button className="dash-nav-btn" onClick={() => navigate('/home')}>
            ← Main Site
          </button>
          <button className="dash-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="dash-main">
        {/* Welcome card */}
        <div className="dash-welcome-card">
          <div className="dash-avatar">
            {currentUser?.photoURL ? (
              <img src={currentUser.photoURL} alt="avatar" />
            ) : (
              <span>{currentUser?.displayName?.[0] ?? '?'}</span>
            )}
          </div>
          <div className="dash-welcome-text">
            <h1 className="dash-welcome-heading">
              Welcome back, <span>{currentUser?.displayName?.split(' ')[0]}</span> 👋
            </h1>
            <p className="dash-welcome-email">{currentUser?.email}</p>
          </div>
        </div>

        {/* Stats row */}
        <div className="dash-stats">
          {[
            { label: 'Projects', value: '12', icon: '🚀' },
            { label: 'Tasks', value: '34', icon: '✅' },
            { label: 'Messages', value: '7', icon: '💬' },
            { label: 'Reports', value: '5', icon: '📊' },
          ].map((s) => (
            <div className="dash-stat-card" key={s.label}>
              <span className="dash-stat-icon">{s.icon}</span>
              <span className="dash-stat-value">{s.value}</span>
              <span className="dash-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Info card */}
        <div className="dash-info-card">
          <h2>🔐 Account Info</h2>
          <div className="dash-info-grid">
            <div className="dash-info-item">
              <span className="dash-info-label">Email</span>
              <span className="dash-info-value">{currentUser?.email}</span>
            </div>
            <div className="dash-info-item">
              <span className="dash-info-label">Name</span>
              <span className="dash-info-value">{currentUser?.displayName}</span>
            </div>
            <div className="dash-info-item">
              <span className="dash-info-label">Provider</span>
              <span className="dash-info-value">Google</span>
            </div>
            <div className="dash-info-item">
              <span className="dash-info-label">User ID</span>
              <span className="dash-info-value dash-uid">{currentUser?.uid}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
