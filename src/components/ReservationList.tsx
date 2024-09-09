import React from "react";

function ReservationList() {
  const status = "Confirmed";
  const status2 = "Pending";
  const status3 = "Canceled";
  return (
    <div className="container">
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>2024-09-09</td>
          <td>5</td>
          <td>$300</td>
          <td className={`status ${status.toLowerCase()}`}>{status}</td>
        </tr>
        <tr>
          <td>2024-09-09</td>
          <td>5</td>
          <td>$300</td>
          <td className={`status ${status2.toLowerCase()}`}>{status2}</td>
        </tr>
        <tr>
          <td>2024-09-09</td>
          <td>5</td>
          <td>$300</td>
          <td className={`status ${status3.toLowerCase()}`}>{status3}</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default ReservationList;
