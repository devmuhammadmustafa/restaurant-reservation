import React from "react";
import { NotificationProps } from "../../types";
import "./Notification.css";

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <div className="notification">{message}</div>;
};

export default Notification;
