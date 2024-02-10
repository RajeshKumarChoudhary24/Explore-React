import {CDN_URL} from "../utils/constant"

const ResturantCard =(props)=>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        areaName,
        costForTwo,
        avgRating,
        sla
    } = resData?.info;
    return(
        <div className="resturant-card"> 
        <img alt="resturant-logo" className="resturant-logo" src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{areaName}</h5>
            <h5>{costForTwo}</h5>
            <h5>Ratings {avgRating}</h5>
            <h5>{sla?.slaString}</h5>
        </div>
    )
};
export default ResturantCard;