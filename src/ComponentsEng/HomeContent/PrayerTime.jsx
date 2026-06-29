import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import namazBanner from "../../assets/media/common/namaz.png";

const currentDay = moment().format("dddd");
const currentDate = moment().format("DD MMMM YYYY");
const currentNamaz = moment().format("YYYY-MM-DD");

let FajrHours = "";
let FajrMin = "";
let DhuhrHours = "";
let DhuhrMin = "";
let AsrHours = "";
let AsrMin = "";
let MaghribHours = "";
let MaghribMin = "";
let IshaHours = "";
let IshaMin = "";

export default function PrayerTime() {
  const [namaz, setNamaz] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.emythmakers.com/namazapi/date/${currentNamaz}`, {
        headers: { Accesstoken: "62497a616353e" },
      })
      .then(({ data }) => {
        setNamaz(data.prayertimes);

        FajrHours = data.prayertimes.Fajr.split(":")[0] % 12 || 12;
        FajrMin = data.prayertimes.Fajr.split(":")[1];

        DhuhrHours = data.prayertimes.Dhuhr.split(":")[0] % 12 || 12;
        DhuhrMin = data.prayertimes.Dhuhr.split(":")[1];

        AsrHours = data.prayertimes.Asr.split(":")[0] % 12 || 12;
        AsrMin = data.prayertimes.Asr.split(":")[1];

        MaghribHours = data.prayertimes.Maghrib.split(":")[0] % 12 || 12;
        MaghribMin = data.prayertimes.Maghrib.split(":")[1];

        IshaHours = data.prayertimes.Isha.split(":")[0] % 12 || 12;
        IshaMin = data.prayertimes.Isha.split(":")[1];
      });
  }, []);

  return (
    <>
      <div className="DPrayersBanner">
        <Link to="/">
          <img
            className="img-fluid img100"
            src={namazBanner}
            width={304}
            height={59}
            alt="Prayer Times"
            title="Prayer Times"
          />
        </Link>
      </div>

      <div className="DPrayersTime table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>Fajr</td>
              <td>{`${FajrHours}:${FajrMin} AM`}</td>
            </tr>

            <tr>
              <td>Dhuhr</td>
              <td>{`${DhuhrHours}:${DhuhrMin} PM`}</td>
            </tr>

            <tr>
              <td>Asr</td>
              <td>{`${AsrHours}:${AsrMin} PM`}</td>
            </tr>

            <tr>
              <td>Maghrib</td>
              <td>{`${MaghribHours}:${MaghribMin} PM`}</td>
            </tr>

            <tr>
              <td>Isha</td>
              <td>{`${IshaHours}:${IshaMin} PM`}</td>
            </tr>
          </tbody>
        </table>

        <p>
          Dhaka, {currentDay}, {currentDate}
        </p>
      </div>
    </>
  );
}