import { Routes, Route } from 'react-router-dom'
import * as Screen from './components/index.jsx'
import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Screen.Login />} />
    <Route path="/dashboard" element={<Screen.Dashboard />} />
  </Routes>
)

export default App
