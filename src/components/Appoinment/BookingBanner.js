import React from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BookingBanner = ({date,setDate}) => {
    
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src='https://api.lorem.space/image/movie?w=260&h=400'
            alt="medical equipment"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=''>
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            />
            <p>You picked : {format(date, 'PP')}.</p>
          </div>
        </div>
      </div>
    );
};

export default BookingBanner;