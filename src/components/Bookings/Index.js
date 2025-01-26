import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { fetchAPI, submitAPI } from "../../api";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { useReducer } from "react";


const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

export default function Index() {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate('/confirm-booking');
  };

  return (
    <>
      <Header />
      <div className="bookings">
        <h2>Please Fill in your information to reserve a table!</h2>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      </div>
      <Footer />
    </>
  );
}
