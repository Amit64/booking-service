import React from "react";
import { format } from "date-fns";

const BookingModal = ({treatment,date,setTreatment}) => {

    const {_id,name,slot} = treatment ;
    const handleBooking = e =>{
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id,name,slot);
        setTreatment(null);
    }
   
  return (
    <div>
       
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
          
        <div class="modal-box">
        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">
            Booking for {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
          <input type="text" value={format(date,'pp')} readOnly  class="input input-bordered w-full max-w-xs" />
          <select name='slot' class="select select-bordered w-full max-w-xs">
                {
                    slot.map(slots=><option>{slots}</option>)
                }
            </select>
          <input type="text" name='name' placeholder="your name" class="input input-bordered w-full max-w-xs" />
          <input type="email" name='email' placeholder="your email" class="input input-bordered w-full max-w-xs" />
          <input type="text" name='phone' placeholder="your phoneNumber" class="input input-bordered w-full max-w-xs" />
          <input type="submit" value="submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
