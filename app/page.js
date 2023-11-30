"use client";
// components/UserInterface.js
import React, { useEffect, useState } from "react";
import { useTasks } from "./components/TaskContext";
import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
//console.log(dayjs.tz.guess())

const UserInterface = () => {
  const { tasks } = useTasks();
  const [dateTimeIST, setDateTimeIST] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // Function to calculate time left and update state
  const calculateTimeLeft = () => {
    const now = dayjs(); // Current time
    const targetTime = dayjs("2023-12-24 12:20:45+00:00"); // Replace with your dateTimeIST

    const difference = targetTime.diff(now); // Difference between target and current time

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000); // Update every second
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const convertToIST = (datePST, timePST) => {
    
    const dateTimePST = `${datePST} ${timePST}-08:00`;
    const dateTimePSTFormatted = dayjs(dateTimePST);
    const dateTimeIST = dateTimePSTFormatted.tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
    //setDateTimeIST(dateTimeIST);
    return dateTimeIST;    
  };

  return (
    <div>
      <Link href="/admin">Go to Admin Page</Link>
      <h1>User Interface</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>Event:</strong> {task.task}
            <br />
            <strong>Date Time:</strong> {convertToIST(task.date, task.time)}
            <div>
              <h2>Countdown</h2>
              <p>Days: {timeLeft.days}</p>
              <p>Hours: {timeLeft.hours}</p>
              <p>Minutes: {timeLeft.minutes}</p>
              <p>Seconds: {timeLeft.seconds}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInterface;
