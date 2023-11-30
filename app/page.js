"use client";
// components/UserInterface.js
import React from "react";
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

  const convertToIST = (datePST, timePST) => {
    //console.log(datePST);
    //console.log(timePST);
    const dateTimePST = `${datePST} ${timePST}-08:00`;
    const dateTimePSTFormatted = dayjs(dateTimePST);
    if (dateTimePSTFormatted.isValid()) {
      return dateTimePSTFormatted
        .tz("Asia/Kolkata")
        .format("YYYY-MM-DD HH:mm:ss");
    } else {
      return "Invalid Date (PST)";
    }
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInterface;
