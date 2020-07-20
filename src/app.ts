import React from 'react';
import './app.scss';

interface AppProps {
  children: React.ReactElement;
}
const App: React.FC<AppProps> = ({ children }) => children;

export default App;
