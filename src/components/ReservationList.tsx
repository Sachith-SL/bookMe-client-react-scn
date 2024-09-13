import { faCircleCheck, faClock } from "@fortawesome/free-regular-svg-icons";
import { faBan, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect } from "react";

interface Slot {
  id: number;
  date: string;
  slotIndex: number;
  startTime: string;
  endTime: string;
  unitPrice: number;
  available: boolean;
}

interface Transaction {
  id: number | null; // Assuming null values are valid
  date: string | null;
  paymentMethod: string | null;
  amount: number | null;
  status: string | null;
}

interface Reservation {
  transaction: Transaction;
  userId: number;
  slots: Slot[];
  date: string;
  amount: number;
  status: string;
}

function ReservationList() {

  const username = "user";
  const password = "a8cb812b-4961-45c2-9276-9b25e81c8c37";
  const token = btoa(`${username}:${password}`);
  
  const status = "Confirmed";
  const status2 = "Pending";
  const status3 = "Canceled";

  const [data, setData] = React.useState([]);
  const [id, setId] = React.useState(1);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/reservations", // replace with your API base URL
  });

  useEffect(() => {
    axiosInstance
      .get(`/user/${id}`,{
        headers: {
          Authorization: `Basic ${token}`,
        }
      }) // replace with your endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="container">
      <table className="table table-bordered bg-secondary text-white opacity-75">
        <tbody>
          {data.map((reservation: Reservation, index: number) => (
            <tr>
              <td className="m-4">{reservation.date}</td>
              <td>
                {reservation.slots.length}
                {reservation.slots.length > 1 ? (
                  <span> hours</span>
                ) : (
                  <span> hour</span>
                )}
              </td>
              <td>
                {reservation.slots.map((slot: Slot, slotIndex: number) => (
                  <div key={slot.id}>
                    {slot.startTime} - {slot.endTime}
                  </div>
                ))}
              </td>
              <td>{reservation.amount} LKR</td>
              <td className={`status ${reservation.status.toLowerCase()}`}>
                {reservation.status}{" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "white" }}
                  size="1x"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationList;
