import axios from "axios";
import cal1 from "../assets/cal1.png";
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";
import { useEffect, useState } from "react";
interface Slot {
  date: string;
  startTime: string;
  endTime: string;
  slotIndex: number;
  unitPrice: number;
  available: boolean;
}
function Reservation() {

  const username = "user";
  const password = "a8cb812b-4961-45c2-9276-9b25e81c8c37";
  const token = btoa(`${username}:${password}`);

  const [data, setData] = useState<Slot[]>([]);
  const [givenDateStr, setGivenDateStr] = useState("2024-09-10");
  const [givenDate, setGivenDate] = useState(new Date(givenDateStr));
  const [monthName, setMonthName] = useState(
    givenDate.toLocaleString("default", { month: "long" })
  );
  const [dayName, setDayName] = useState(
    givenDate.toLocaleString("default", { weekday: "long" })
  );
  const [dateNumber, setDateNumber] = useState(givenDate.getDate());

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(e.target.value);
    setGivenDateStr((prevState) => {
      console.log("Previous value: ", prevState);
      return newValue;
    });
    console.log(givenDateStr);
    setGivenDate(new Date(e.target.value));
    console.log(givenDate);
    // setMonthName(givenDate.toLocaleString("default", { month: "long" }));
    // setDayName(givenDate.toLocaleString("default", { weekday: "long" }));
    // setDateNumber(givenDate.getDate());
    console.log(monthName);
    console.log(dayName);
    console.log(dateNumber);
  };
  useEffect(() => {
    // This will run whenever givenDateStr changes and log the updated value
    console.log("Updated value: ", givenDate);
    setMonthName(givenDate.toLocaleString("default", { month: "long" }));
    setDayName(givenDate.toLocaleString("default", { weekday: "long" }));
    setDateNumber(givenDate.getDate());
  }, [givenDateStr]);
  // Create an Axios instance if needed, or use axios directly.
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/slots", // replace with your API base URL
  });

  useEffect(() => {
    axiosInstance
      .get(`available?date=${givenDateStr}`,{
        headers: {
          Authorization: `Basic ${token}`,
        }
      }) // replace with your endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There is an error!", error);
      });
  }, [givenDateStr, givenDate]);

  return (
    <div className="opacity-75">
      <br className="br"></br>
      <div className="row">
        <div className="col-3">
          <div className="card text-center" style={{ width: "18rem" }}>
            <div className="card-header bg-danger fw-bold">{monthName}</div>
            <h1
              className="card-title text-danger"
              style={{ fontSize: "120px" }}
            >
              {dateNumber}
            </h1>
            <div className="card-footer bg-danger fw-bold">{dayName}</div>
            <div className="card-body">
              <form>
                <div className="form-group mt-3">
                  <label></label>
                  <input
                    type="date"
                    name="mobile"
                    value={givenDateStr}
                    onChange={handleDate}
                    required
                    className="form-control"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-9 py-3 px-5">
          <div className="row">
            <div className="col-4 d-grid gap-2">
              {data.map((slot: Slot) =>
                slot.slotIndex >= 6 && slot.slotIndex < 12 ? (
                  <button key={slot.slotIndex} className="btn btn-secondary">
                    {slot.available === true ? (
                      <span className="text-white">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    ) : (
                      <span className="text-white">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    )}
                  </button>
                ) : null
              )}
            </div>
            <div className="col-4 d-grid gap-2">
              {data.map((slot: Slot) =>
                slot.slotIndex >= 12 && slot.slotIndex < 18 ? (
                  <button key={slot.slotIndex} className="btn btn-secondary">
                    {slot.available === true ? (
                      <span className="text-white">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    ) : (
                      <span className="text-white">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    )}
                  </button>
                ) : null
              )}
            </div>
            <div className="col-4 d-grid gap-2">
              {data.map((slot: Slot) =>
                slot.slotIndex >= 18 && slot.slotIndex < 24 ? (
                  <button key={slot.slotIndex} className="btn btn-secondary">
                    {slot.available === true ? (
                      <span className="text-white">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    ) : (
                      <span className="text-white">
                        {slot.startTime} - {slot.endTime}
                      </span>
                    )}
                  </button>
                ) : null
              )}
            </div>
          </div>
          <div className="row">
            <p />
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Reservation;
