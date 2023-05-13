import React from 'react';
import { Route, Routes } from 'react-router-dom';
import appRoutes from './routes';
import Header from '../layouts/Header';
import Home from './home';
import SettingLayout from './profile/settings/SettingLayout';
import ProfileSettings from './profile/settings/profileSettings';
import Communications from './profile/settings/communications';
import Security from './profile/settings/security';
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          key='home'
          path='/'
          element = {<Home />}
        />
        {Object.entries(appRoutes).map(([key, { path, title, description, requireLogin, Page }]) => (
          <Route
            key={key}
            path={path}
            element = {<Page />}
          />
        ))}
        <Route path="profile/settings" element={<SettingLayout />}>
          <Route index element={<ProfileSettings />} />
          <Route path="settings" element={<ProfileSettings />} />
          <Route path="communications" element={<Communications />} />
          <Route path="security" element={<Security />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;