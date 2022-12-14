import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center font-bold text-xl text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)}
                        disabled={slots.length === 0} for="booking-modal" className="btn btn-secondary btn-wide btn-sm text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;