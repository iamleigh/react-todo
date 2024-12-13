import { Logo } from './elements/Logo'
import { Reminders } from './containers/Reminders'
import { Footer } from './components/Footer'

import './App.css'

function App() {
	return (
		<>
			<section>
				<div className="lq-box">
					<Logo />
					<Reminders />
				</div>
			</section>

			<Footer />
		</>
	)
}

export default App
