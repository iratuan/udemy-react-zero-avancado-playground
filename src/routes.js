import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Detalhe from './Pages/Detalhe'
import Pagina404 from './Pages/404'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/detalhe/:id" element={<Detalhe />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas