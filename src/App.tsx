import logo from './logo.svg';
import './App.css';

export const App = () => {
  const message = 'Start React project';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
      </header>
    </div>
  );
};
