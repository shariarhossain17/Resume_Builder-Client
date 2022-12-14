import React from 'react';
import './Jump.css'
import Image1 from '../../assets/illestatror/illustration-image1.png'
import Image2 from '../../assets/illestatror/illustration-image2.png'
import Image3 from '../../assets/illestatror/illustration-image3.png'
import Image4 from '../../assets/illestatror/illustration-image4.png'
import Image5 from '../../assets/illestatror/illustration-image5.png'
import Image6 from '../../assets/illestatror/illustration-image6.png'
import Image7 from '../../assets/illestatror/illustration-image7.png'
import Image8 from '../../assets/illestatror/illustration-image8.png'
import { GoArrowSmallRight } from "react-icons/go"
import { Link } from 'react-router-dom';
 
const BuildResume = () => {
 
    return (
        <div>
            <div className='build-resume inline-block align-baseline p-36'>
                <div className='build-resume-text w-4/5 mx-auto text-center'>
                    <h1 className='text-3xl font-bold poppins-b'>Ready to Jump-start Your Career</h1>
                    <h1 className='bg-blue-800 w-24 h-2 mx-auto mt-2 mb-4 rounded-lg'></h1>
                    <div>
                        <Link 
                        to="/resume-builder/how-to-start" 
                        className='inline-flex items-center px-8 py-3 bg-primary border border-primary rounded-lg hover:bg-transparent active:text-blue-800 focus:outline-none focus:ring transition ease-in-out delay-150  text-white hover:text-black
                        '> 
                        <span className="text-sm font-medium"> Build My Resume </span>
                        <GoArrowSmallRight className='text-2xl'></GoArrowSmallRight></Link>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
                <div className='flex justify-between'>
                    <div className='pt-20'>
                        <img className='w-4/5' src={Image7} alt='' />
                    </div>
                    <div className='pt-4 pr-20'>
                        <img className='w-4/5' src={Image6} alt='' />
                    </div>
                    <div className='pt-2 pr-20'>
                        <img className='w-4/5' src={Image8} alt='' />
                    </div>
                </div>
                <div className='flex justify-between mx-auto mt-5'>
                    <div>
                        <img className='w-4/5' src={Image1} alt='' />
                    </div>
                    <div>
                        <img className='w-4/5' src={Image2} alt='' />
                    </div>
                    <div>
                        <img className='w-4/5' src={Image3} alt='' />
                    </div>
                    <div>
                        <img className='w-4/5' src={Image4} alt='' />
                    </div>
                    <div>
                        <img className='w-4/5' src={Image5} alt='' />
                    </div>
                </div>
            </div>
            <div className='build-resume-2'>
            </div>
        </div>
    );
};
 
export default BuildResume;
