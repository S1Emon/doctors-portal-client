import React from 'react';

const Review = ({ review }) => {
    const { name, img, location } = review
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl px-4">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint facilis error ipsum eius blanditiis praesentium rerum, accusantium architecto at?</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                            <img src={img} alt="Profile" />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;