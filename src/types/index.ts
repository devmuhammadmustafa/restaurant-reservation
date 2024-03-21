export interface NotificationProps {
  message: string;
}

export interface ReservationFormProps {
  restaurantName: string;
  onReservationSubmit: (reservationDetails: {
    date: string;
    time: string;
    numberOfPeople: number;
  }) => void;
}

export interface Restaurant {
  id: string;
  title: string;
  available?: boolean;
}
export interface ReservationDetail {
  date: string;
  time: string;
  numberOfPeople: number;
}

export interface RestaurantListProps {
  onRestaurantSelect: (restaurant: Restaurant) => void;
}
