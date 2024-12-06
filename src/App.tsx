import { Logo } from './components/Logo'
import { Reminders } from './components/Reminders'
import { Footer } from './components/Footer'

import './App.css'

function App() {
	return (
		<>
			<section>
				<Logo />
				<Reminders />
			</section>

			<Footer />
		</>
	)
}

export default App
