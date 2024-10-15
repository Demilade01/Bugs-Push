import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Card from './components/Card'
import ManualConnection from './components/ManualConnection'

const App = () => {
	return (
		<div>
			<Header />
			<Hero />
			<Card />
			<Services />
			<ManualConnection />
		</div>
	)
}

export default App