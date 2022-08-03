import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${bg})` }} className='flex justify-center items-center mt-28'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="Doctor" className='mt-[-160px]' />
            </div>
            <div className='flex-1 whitespace-normal px-5'>
                <h3 className='text-primary font-bold text-xl'>Appointment</h3>
                <h4 className='text-white text-4xl'>Make an appointment Today</h4>
                <p className='text-white my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;