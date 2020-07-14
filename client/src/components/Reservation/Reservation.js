import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../Logo";

function Reservation() {
  return (
    <>
      <Logo />

      <p>
        PLEASE NOTE: With the rapidly changing nature of events related to
        COVID-19, we can not anticipate how long our patio and dining room will
        remain closed. WE ARE CURRENTLY NOT ACCEPTING RESERVATIONS.
      </p>
      <p>
        We are a small restaurant with limited seating. Click the red “Book Now
        RESY” button below to make a reservation.
      </p>
      <ul>
        Here’s the inside scoop:
        <li>
          Dinner and Brunch reservations are highly recommended! Come early or
          late for the best chance to snag a walk-in table.{" "}
        </li>
        <li>
          For lunch, we only take reservations for parties of 5 or more. Table
          turnover is fairly quick; we’ll do our best to get you in and out!
        </li>
        <li>Bar is first come, first served. </li>
      </ul>
      <ul>
        A few more notes:
        <li>
          There are several other independent Hobnob restaurants throughout
          North America; please make sure you are making a reservation in
          Richmond, Virginia, using the <strong>Resy</strong> app - click the
          button below. We do not use OpenTable.
        </li>
        <li>
          Making a reservation for a special event? Call in advance about
          ordering a homemade pie or cake for your celebration;{" "}
          <strong>
            Parties bringing in outside desserts will be charged a $15 plating
            fee.
          </strong>
        </li>
        <li>
          If you have trouble making a reservation, give us a call at
          804-264-7400 during normal business hours.
        </li>
      </ul>
      <ul>
        Parking
        <li>
          Ample parking is available in our lot (including next to the dumpsters
          and on either side of the building) or along Kenwood Avenue.{" "}
          <strong>
            Parking across the street at Hermitage Grocery is prohibited;
            vehicles will be towed at the owner’s expense.
          </strong>
        </li>
      </ul>
      <button>Book Now RESY</button>
    </>
  );
}

export default Reservation;
