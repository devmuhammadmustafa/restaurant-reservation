import React, { useState } from "react";
import "./RestaurantList.css";
import { restaurantList } from "../../constants";
import { Restaurant, RestaurantListProps } from "../../types";

const RestaurantList: React.FC<RestaurantListProps> = ({
  onRestaurantSelect,
}) => {
  const [filter, setFilter] = useState("");
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(
    restaurantList
  );
  const filteredRestaurants = restaurants?.filter((restaurant) =>
    restaurant.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="restaurant-list">
      <h2>Restoranlar</h2>
      <input
        type="text"
        placeholder="Restoran axtar"
        value={filter}
        onChange={handleInputChange}
      />
      <ul>
        {filteredRestaurants?.map((restaurant: Restaurant, index) => (
          <li key={index} onClick={() => onRestaurantSelect(restaurant)}>
            {restaurant.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
