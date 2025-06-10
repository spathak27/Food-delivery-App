import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines = [],
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg hover:bg-pink-100 bg-pink-50"
    >
      <img
        className="rounded-lg h-50 w-55"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="text-green-600">{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes</h4>
    </div>
  );
};

// Higher order component (promoted label on restaurants)
// learn this part later

export default RestaurantCard;
