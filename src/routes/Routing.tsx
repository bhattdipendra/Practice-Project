import { Routes, Route } from 'react-router-dom'
import Login from 'src/pages/Auth/Login'

const Routing = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default Routing