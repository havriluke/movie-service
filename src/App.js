import 'swiper/swiper.min.css'
import './App.scss';

import {BrowserRouter} from 'react-router-dom'
import AppRouter from './config/AppRouter';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AppRouter />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
