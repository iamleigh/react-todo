import { Logo } from './components/Logo'
import { Reminders } from './containers/Reminders'
// import { MousePosition } from './exercises/MousePosition'
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
