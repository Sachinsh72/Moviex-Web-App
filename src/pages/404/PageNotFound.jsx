import './pageNotFound.scss'
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

function PageNotFound(){
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
}

export default PageNotFound;