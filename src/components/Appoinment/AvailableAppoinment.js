
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({date}) => {
    const [services,setServices] = useState([])
    const [treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div>
            <h2 className=' text-center text-primary'>Available appoinment on  {format(date, 'PP')},</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-14 gap-10 py-5'>
                {
                    services.map(service=> <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            { treatment && <BookingModal 
                treatment={treatment} 
                date={date} 
                setTreatment={setTreatment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;