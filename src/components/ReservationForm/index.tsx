import React, { useState } from "react";
import { ReservationFormProps } from "../../types";
import "./ReservationForm.css";

const ReservationForm: React.FC<ReservationFormProps> = ({
  restaurantName,
  onReservationSubmit,
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onReservationSubmit({ date, time, numberOfPeople });
  };

  return (
    <div className="reservation-form">
      <h2>{restaurantName} üçün Rezervasiya Formu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tarix:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Saat:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <label>
          Şəxs Sayı:
          <input
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            min={1}
            required
          />
        </label>
        <button type="submit">Rezervasiya Et</button>
      </form>
    </div>
  );
};

export default ReservationForm;
