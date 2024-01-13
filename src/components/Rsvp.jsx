import React, { useState } from "react";
import Modal from "./Modal";
import Swal from "sweetalert2";

const Rsvp = ({ handleClose }) => {
  const [value, setValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = value;
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/leonellcruz7/google_sheets/pGfJeReQzVQAeeef?tabId=Sheet1",
        {
          method: "POST",
          redirect: "follow",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify([[name]]),
        }
      );
      await response.json();
      console.log(response);
      setValue("");
      Swal.fire(
        "Great!",
        "Your inquiry have been sent! We will reach out to you soon.",
        "success"
      );
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal handleClose={handleClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <p className="text-blue">RSVP Form</p>
        <input
          className="input"
          type="text"
          placeholder="Please enter your name"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="button ml-auto" disabled={!value}>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default Rsvp;
