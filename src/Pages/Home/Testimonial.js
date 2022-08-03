import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Crim Harry",
            review: "",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Ema Watson",
            review: "",
            location: "Florida",
            img: people2
        },
        {
            _id: 3,
            name: "Lily Ury",
            review: "",
            location: "Washington DC",
            img: people3
        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div className='ml-10'>
                    <h4 className='text-xl font-bold text-primary' >Testimonials</h4>
                    <h2 className='text-4xl'>What our Patients says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-10'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;