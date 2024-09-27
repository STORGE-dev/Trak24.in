import React from 'react'

function Ais140() {
    return (
        <>
            <div className="flex flex-col justify-center ">
                <div className='p-10'>
                    <h1 className="text-4xl font-bold">AIS 140</h1>
                </div>
            </div>
            <div className='p-5 px-10 space-y-5'>
                <p>AIS 140 is part of the Intelligent Transportation Systems requirements for public transport vehicles.The start of the new fiscal year will see a new regulation becoming mandatory for the vehicle industry. AIS 140, applicable from April 1, 2018, mandates a vehicle tracking device and one or more emergency button(s) in all existing and new public service vehicles.The AIS 140 or the Intelligent Transportation System (ITS) is a set of requirements that the government has mandated to be put into place in all public transportation systems namely buses and taxis among others. The requirements have put an onus on not just OEMs but also aftermarket players to bring in a system that will improve safety critical parts in the Indian mobility.According to the Automotive Research Association of India (ARAI), ITS is a globally proven system that optimises the utilisation of existing transport infrastructure and transportation systems along with efficiency, quality, comfort and safety.</p>
                <h1 className='text-orange-500 font-bold'>For a device to be AIS 140 certified, it needs to adhere and meet the following standards:</h1>

                <div className="pl-10">
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Support for Global Navigation Satellite System (GNSS), including GAGAN (Indian satellite-based augmentation system).</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>4 digital inputs, 2 analog inputs, and 1 serial communication port for interfacing with external systems (e.g., emergency request button).</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Transmit data to a government-authorized backend control server via GSM/GPRS network, including position, velocity, time, and direction data.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Transmit data to a minimum of two different IP addresses, plus one additional IP address for emergency response systems.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Emergency/panic button that sends alerts to configured IP addresses when pressed.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Internal power backup for at least four hours; operate between 8VDC and 32VDC using vehicle battery voltage input (12/24 volts).</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Support for over-the-air (OTA) software and configuration updates, and basic standard configuration capabilities.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Storage and forwarding mechanism for all data types; unique identifier for the device and data.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Embedded SIM card with multi-slot GPRS and built-in quad-band GPRS module.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Dust, temperature, vibration, and water-splash resistant (IP 65-rated or better) and tamper-proof design.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Support for A-GPS (Assisted GPS) and secured data transmission through a secure channel.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <span className="text-orange-500 font-semibold">•</span>
                            <span>Three-axis accelerometer and three-axis gyroscope for monitoring harsh braking, acceleration, and rash turning.</span>
                        </li>
                    </ul>
                </div>

                <p>Furthermore in terms of an emergency/panic button, passengers or in-vehicle crew present in the vehicle should be able to make an emergency request by pressing the emergency button provided that can only be deactivated by authorised government server.</p>

                <p>In case there is no reception (GSM and GPRS), the alert will be stored in the device and as soon as the network becomes available the device will need to be able to send the information on high priority to the configured addresses.</p>

                <p>These are the major requirements apart from the physical testing conducted by ARAI for certifying the devices to the conformity standards.</p>
            </div>
        </>
    )
}

export default Ais140