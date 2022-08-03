import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Form = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className="pb-16">
            <div className='text-center my-16 pt-10'>
                <h4 className='text-xl text-primary font-bold'>Contact Us</h4>
                <h2 className='text-4xl text-white'>Stay Connected with Us</h2>
            </div>
            <form>
                <div className="grid grid-cols-1 gap-5 justify-items-center p-3">
                    <input type="text" placeholder="Email Address" className="input w-full max-w-md" />
                    <input type="text" placeholder="Subject" className="input  w-full max-w-md" />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>
                    <button className='btn max-w-md w-full btn-primary text-white bg-gradient-to-r from-secondary to-primary'>Leave a message</button>
                </div>
            </form>
        </section>
    );
};

export default Form;