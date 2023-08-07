import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Parent from './components/parentChild/Parent';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Test examples</h1>
				{/* <img src={logo} className='App-logo' alt='logo' /> */}
				<a className='App-link' href='https://www.youtube.com/watch?v=bTGil8qPmXo&t=524s' target='_blank' rel='noopener noreferrer'>
				</a>
				<div>{<Counter />}</div>
				<div style={{ marginBottom: 50 }}>{<Parent />}</div>
			</header>
		</div>
	);
}

export default App;
