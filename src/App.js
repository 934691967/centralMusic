import './components/style/main.scss'
import Navbar from './components/Navbar/Navbar'
import Lessons from './components/Lessons/Lessons'
import Products from './components/Products/Products'
import Popular from './components/Popular/Popular'
import Gear from './components/Gear/Gear'
import Footer from './components/Footer/Footer'
function App() {
    return (
        <div className='App'>
            <Navbar />
            <Lessons />
            <Products />
            <Popular />
            <Gear />
            <Footer />
        </div>
    )
}

export default App
