import HeroBanner from './HeroBanner/HeroBanner';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';
import './home.scss'
import Trending from './trending/Trending';

function Home(){
    return(
        <div className='home'>
            <HeroBanner/>
            <Trending/>
            <Popular/>
            <TopRated/>
        </div>
    )
}

export default Home;