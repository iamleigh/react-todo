import { Logo } from './elements/Logo'
import { Reminders } from './containers/Reminders'
import { Footer } from './components/Footer'

import './assets/scss/main.scss'

function App() {
	return (
		<>
			<section>
				<div className="rocketui-todo">
					<div className="rocketui-todo__header">
						<Logo />
					</div>
					<div className="rocketui-todo__body">
						<Reminders />
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default App
