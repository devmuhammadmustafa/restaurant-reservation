import React, { useState } from "react";
import { RestaurantList, ReservationForm, Notification } from "./components";
import { Restaurant, ReservationDetail } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const [notification, setNotification] = useState<string | null>(null);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleReservationSubmit = (reservationDetails: ReservationDetail) => {
    setNotification(
      `Rezervasiya uğurla qəbul edildi: ${selectedRestaurant?.title}, Tarix: ${reservationDetails.date}, Saat: ${reservationDetails.time}, Şəxs sayı: ${reservationDetails.numberOfPeople}`
    );

    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div className="app-container">
      <h1>Restoran Rezervasiya Sistemi</h1>
      <div className="content-container">
        <RestaurantList onRestaurantSelect={handleRestaurantSelect} />
        {selectedRestaurant && (
          <ReservationForm
            restaurantName={selectedRestaurant.title}
            onReservationSubmit={handleReservationSubmit}
          />
        )}
      </div>
      {notification && <Notification message={notification} />}
    </div>
  );
};

export default App;
