import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss'

const Home = () => {
    return (
        
        <div className='home'>
            <Sidebar />
            <div className='main'>
                <Navbar />
                Home
                <Footer />
            </div>
        </div>
    )
}

export default Home;