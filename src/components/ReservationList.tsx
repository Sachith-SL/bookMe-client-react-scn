import { faCircleCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { faBan, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ReservationList() {
  const status = "Confirmed";
  const status2 = "Pending";
  const status3 = "Canceled";

  // fa-regular fa-calendar-check
  return (
    <div className="container">
    <table className="table table-bordered bg-secondary opacity-75">
      <tbody>
        <tr>
          <td>2024-09-09</td>
          <td>05:00 pm - 07:00 pm</td>
          <td>5000 LKR</td>
          <td className={`text-end status ${status.toLowerCase()}`}>{status}  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} size="1x"/></td>
        </tr>
        <tr>
          <td>2024-09-10</td>
          <td>07:00 pm - 09:00 pm</td>
          <td>6000 LKR</td>
          <td className={`text-end status ${status2.toLowerCase()}`}>{status2} <FontAwesomeIcon icon={faClock} style={{ color: "#ffc107" }} size="1x"/></td>
        </tr>
        <tr>
          <td>2024-09-11</td>
          <td>06:00 am - 08:00 am</td>
          <td>4000 LKR</td>
          <td className={`text-end status ${status3.toLowerCase()}`}>{status3}  <FontAwesomeIcon icon={faBan} style={{ color: "#f6071f" }} size="1x"/></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default ReservationList;
