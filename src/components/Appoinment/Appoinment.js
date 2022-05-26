import React, { useState } from "react";
import AvailableAppoinment from "./AvailableAppoinment";
import BookingBanner from "./BookingBanner";

const Appoinment = () => {
    const [date,setDate] = useState(new Date());
  return (
   <div>
       <BookingBanner date={date} setDate={setDate}/>
       <AvailableAppoinment date={date} setDate={setDate} />
   </div>
  );
};

export default Appoinment;
