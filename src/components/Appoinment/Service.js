import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slot} = service;
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-secondary">{name}</h2>
          <p>
              {
                slot.length > 0
                ?<span>{slot[0]}</span> :
                <span className='text-red-500'>No slot available</span>
           }
           </p>
          <p>{slot.length} {slot.length> 1  ? 'spaces':'space'} Available</p>
          <div className="card-actions justify-center">
          <label for="my-modal-6" className="btn modal-button btn-primary text-white uppercase"
          disabled={slot.length === 0}
          onClick={()=>setTreatment(service)}
          >Buy Now</label>
          </div>
        </div>
      </div>
    );
};

export default Service;