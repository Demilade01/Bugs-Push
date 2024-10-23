import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Card from './components/Card'
import ManualConnection from './components/ManualConnection'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Manual from './pages/Manual'
import Home from './pages/Home'


const App = () => {
	return (
		<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/manual" element={<Manual />} />
				</Routes>
		</BrowserRouter>

	)
}

	  

export default App