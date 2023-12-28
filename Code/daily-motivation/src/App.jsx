import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [advise, setAdvise] = React.useState('');
	React.useEffect(() => {
		fetchAdvice();
	}, []);

	const fetchAdvice = async () => {
		try {
			const data = await axios.get('https://api.adviceslip.com/advice');
			console.log(data);
			setAdvise(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<div className='app'>
				<div className='card'>
					<h1 className='heading'>Daily Quotes</h1>
					<h2 className='heading'>
						{advise ? advise.data.slip.advice : ''}
					</h2>
					<button onClick={fetchAdvice}>New One Please</button>
				</div>
			</div>
		</>
	);
}

export default App;
