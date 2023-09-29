import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Cast from "./Cast/Cast";
import DetailsBanner from "./DetailsBanner/DetailsBanner";
import Similar from "./Carousels/Similar";

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
            <Similar mediaType={mediaType} id={id} />
        </div>
    )
}

export default Detail;