import { Logo } from './elements/Logo'
import { Reminders } from './containers/Reminders'
import { Footer } from './components/Footer'

import './assets/scss/webfont.scss'
import './assets/scss/main.scss'

function App() {
	return (
		<>
			<section>
				<div className="rocketui-todo">
					<div className="rocketui-todo__header">
						<Logo />
					</div>

					<Reminders />
				</div>
			</section>

			<Footer />
		</>
	)
}

export default App
