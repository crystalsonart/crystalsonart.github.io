import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';

import './sass/style.scss';

function App() {
	return (
		<>
			<Header />
			<Main />
		</>
	);
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);