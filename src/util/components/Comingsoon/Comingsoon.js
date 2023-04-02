import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


import "./Comingsoon.css";

function Comingsoon() {
  let [days, setDays] = useState("-");
  let [hours, setHours] = useState("-");
  let [minutes, setMinutes] = useState("-");
  let [seconds, setSeconds] = useState("-");
  let [loading, setLoading] = useState(false);

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total / 1000 / 60 / 60 / 24) % 30);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setLoading(false);
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next

    // setTimer("00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date("2023-03-30");

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    setLoading(true);
    clearTimer(getDeadTime());
  }, []);

  return (<>
   
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center">
          <h1>Launching Soon</h1>
          <h2>
            We're working hard to be ready with our services and we'll ready to
            launch our Website after
          </h2>
          { loading ? <LoadingSpinner asOverlay /> :  <div className="countdown d-flex justify-content-center">
            <div className="card">
            <h3>{days}</h3>
              <h4>Days</h4>
            </div>
            <div className="card">
            <h3>{hours}</h3>
              <h4>Hours</h4>
            </div>
            <div className="card">
            <h3>{minutes}</h3>
              <h4>Minutes</h4>
            </div>
            <div className="card">
            <h3>{seconds}</h3>
              <h4>Seconds</h4>
            </div>
          </div>}
        
          

          <div className="subscribe">
            <h4>Subscribe now to get Findonic early access!</h4>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe_EEQr7tn3GY9gN2l9M1_Ehj0pgR2N1k3nM74z_MFnNR93sQ/viewform"
              className="btn btn-danger m-1"
            >
              Subscribe <FontAwesomeIcon icon={faArrowRightToBracket} className="icon" />
            </a>
          </div>
        </div>
      </header>
     
    </>
  );
}

export default Comingsoon;
