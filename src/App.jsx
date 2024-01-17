import './index.css'

import HalamanUtama from './components/Layouts/HalamanUtamaLayout/'
import HalamanSignup from './components/Layouts/HalamanSignupLayout'
import HalamanLogin from './components/Layouts/HalamanLoginLayout'
import HalamanAdmin from './components/Layouts/HalamanAdminLayout'
import HalamanTest from './components/Layouts/HalamanTestLayout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { UserProvider } from './components/Layouts/userContext'
import { useUser } from './components/Layouts/userContext'


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
        </Routes>
      </Router>
    </UserProvider>
    
  )
}

export default App
