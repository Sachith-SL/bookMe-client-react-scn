// interface Reservation {
//   id: string,
//   customerName: string,
//   mobile: string,
//   date: string,
//   startTime: string,
//   endTime: string,
//   hours: number,
//   amount: string,
//   status: string
// }

import { useState } from "react";

function ReservationList() {
  const [bgColor, setBgColor] = useState("bg-warning");
  const reservationList = [
    {
      id: '001',
      customerName: 'Sanju',
      mobile: '0785643456',
      date: '7/28/2024',
      startTime: '09:00',
      endTime: '11:00',
      hours: 2,
      amount: '6000',
      status: 'CONFIRMED'
    },
    {
      id: '002',
      customerName: 'Kavindu',
      mobile: '0745643456',
      date: '7/28/2024',
      startTime: '11:00',
      endTime: '12:00',
      hours: 1,
      amount: '3000',
      status: 'PENDING'
    },
    {
      id: '003',
      customerName: 'Sasanka',
      mobile: '6533444',
      date: '8/23/2024',
      startTime: '11:00',
      endTime: '13:00',
      hours: 2,
      amount: '6000',
      status: 'CONFIRMED'
    }
  ];

  return (
    <div className="container">
      <h3> Reservation List</h3>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Date</th>
              <th scope="col">Start time</th>
              <th scope="col">End Time</th>
              <th scope="col">Hours</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservationList.map((reservation, index) => (
              <tr key={index}>
                <th scope="row">{reservation.id}</th>
                <td>{reservation.customerName}</td>
                <td>{reservation.mobile}</td>
                <td>{reservation.date}</td>
                <td>{reservation.startTime}</td>
                <td>{reservation.endTime}</td>
                <td>{reservation.hours} hours</td>
                <td>{reservation.amount} LKR</td>
                <td>
                  <p className={"badge "+ bgColor} >{reservation.status}</p>
                </td>
                <td>
                  <button type="button" style={{ width: '90px' }} className="btn btn-warning" >
                    Update
                  </button>
                </td>
                <td>
                  <button type="button" style={{ width: '90px' }} className="btn btn-danger" >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <button type="button" id="btn" className="btn btn-info">
          Create
        </button>
      </div>
    </div>
  );
}

export default ReservationList;
