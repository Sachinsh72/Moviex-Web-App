import HeroBanner from './HeroBanner/HeroBanner';
import './home.scss'
import Trending from './trending/Trending';

function Home(){
    return(
        <div className='home'>
            <HeroBanner/>
            <Trending/>
        </div>
    )
}

export default Home;