import { Routes, Route } from 'react-router-dom'
import './App.css'
import Tweets from './tweets.jsx'
import Login from './login'

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/tweets" element={<Tweets />} />
  </Routes>
)

export default App
