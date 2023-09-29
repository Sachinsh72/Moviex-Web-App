import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./Cast/Cast";
import DetailsBanner from "./DetailsBanner/DetailsBanner";

// import VideosSection from "./videosSection/VideosSection";
// import Similar from "./carousels/Similar";
// import Recommendation from "./carousels/Recommendation";

function Detail({ video, crew }){
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );
    
    return(
        <div>
            <DetailsBanner crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            {/* <VideosSection data={data} loading={loading} /> */}
            {/* <Similar mediaType={mediaType} id={id} /> */}
            {/* <Recommendation mediaType={mediaType} id={id} /> */}
        </div>
    )
}

export default Detail;