import './index.css'

import HalamanUtama from './components/Layouts/HalamanUtamaLayout/'
import HalamanSignup from './components/Layouts/HalamanSignupLayout'
import HalamanLogin from './components/Layouts/HalamanLoginLayout'
import HalamanAdmin from './components/Layouts/HalamanAdminLayout'
import HalamanTest from './components/Layouts/HalamanTestLayout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { UserProvider } from './components/Layouts/userContext'
import HalamanAbout from './components/Layouts/HalamanAbout'
import HalamanRiwayat from './components/Layouts/HalamanRiwayatLayout'


function App() {

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HalamanUtama />} />
          <Route path="/signup" element={<HalamanSignup />} />
          <Route path="/login" element={<HalamanLogin />} />
          <Route path="/admin" element={<HalamanAdmin />} />
          <Route path="/test" element={<HalamanTest />}/>
          <Route path="/about" element={<HalamanAbout />}/>
          <Route path="/history" element={<HalamanRiwayat />}/>
        </Routes>
      </Router>
    </UserProvider>
    
  )
}

export default App
