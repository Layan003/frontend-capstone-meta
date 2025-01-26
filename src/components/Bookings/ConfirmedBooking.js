import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import './css/ConfirmedBooking.css'
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
    const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="container confirmed-booking">
        <h2>You have successfully reserved a table at the Little Lemon restaurant!!</h2>
        <button className="button-primary" onClick={() => navigate('/')}>Close</button>
      </div>
      <Footer />
    </>
  );
}
