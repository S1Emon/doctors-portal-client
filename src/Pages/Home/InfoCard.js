import React from 'react';

const InfoCard = ({ img, cardTitle, bgClassName }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClassName}`}>
            <figure className='lg:pl-5'><img src={img} alt="Album" className='sm:pt-28 md:pt-28 lg:p-0' /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;