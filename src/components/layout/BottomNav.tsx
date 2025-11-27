import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DashboardIcon, TasksIcon, NotificationIcon, SettingsIcon } from '../common/Icons';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
    { path: '/tasks', label: 'Tasks', icon: TasksIcon },
    { path: '/notifications', label: 'Notifications', icon: NotificationIcon },
    { path: '/settings', label: 'Settings', icon: SettingsIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-gray shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                active 
                  ? 'text-primary-navy' 
                  : 'text-neutral-dark hover:text-primary-navy'
              }`}
            >
              <Icon size={24} className={active ? 'text-primary-navy' : ''} />
              <span className={`text-xs mt-1 font-medium ${active ? 'text-primary-navy' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
