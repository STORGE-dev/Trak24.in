import React from 'react';

const News = () => {
    return (
        <div className="flex flex-col justify-center mb-10">
            <div className='p-10'>
                <h1 className="text-4xl font-bold mb-8">News Room</h1>
            </div>


            <div className='items-center flex flex-col'>

                <div className="flex flex-col items-center space-y-4 p-5">
                    <img
                        src='/image-001.webp'
                        alt="GPS Vehicle Tracker"
                        className="w-full sm:max-w-xs md:max-w-4xl lg:max-w-5xl rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default News;
