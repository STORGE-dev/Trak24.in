import React from 'react'
import { Card } from 'antd';
import Image from 'next/image';

function Businesssolutions() {
    return (
        <>
        <div className="flex flex-col justify-center ">
            <div className='p-10'>
                <h1 className="text-4xl font-bold">Business Solutions</h1>
            </div>
        </div>
        <div className="p-3 lg:p-10 flex flex-wrap justify-center gap-8">
                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Fleet Management" src="/trak24-ERP-Solution.webp" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">ERP Solution</h1>
                            <p className="text-center max-w-xs">
                            GPS provides accurately information on remote components or employees to help managers make timely decisions or monitor work being carried out in the field. ERP GPS integration would improve the ease with which data is collected and analyze the day to day operations of vehicles, devices and individuals and forecast the expected behavior of the components involved to help in proper planning </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Asset Tracking" src="/trak24-Attendance-System.webp" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Attendance System</h1>
                            <p className="text-center max-w-xs">
                            Fast and extremely reliable technology saves both time and money. With GPS, you can alternatively record employee shift and break times using the using RF Tags and I-Button. This module offers the additional benefit of labour cost control.</p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Vehicle Tracking" src="/trak24-Attendance-System.webp" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Personal Tracking</h1>
                            <p className="text-center max-w-xs">
                            Standard tracking real-time and live display and monitoring on high-end digital maps, with reporting of history, kilometers, speed, email alert, work time and other user options Avoid unauthorized usage of your vehicle and facilities.</p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Fleet Management" src="/trak24-Inventory-and-Billing.webp" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Inventory & Billing</h1>
                            <p className="text-center max-w-xs">
                            Provide visibility and control over field operations by monitoring utilization across your fleet and verifying billing with onsite reports. Helps you save time, labour and fuel costs. GPS-based systems help to proactively manage equipment maintenance via engine hour tracking.</p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Asset Tracking" src="/trak24-School-Management-Solutions.webp" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">School Management Solutions</h1>
                            <p className="text-center max-w-xs">
                            Provide accountability, safety and security for students bus travel needs. Using the latest GPS and software technology, we provide real-time information on the location of school bus at all times. It confirms the precaution and in time monitoring of vehicles for sharp operation.</p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Vehicle Tracking" src="/trak24-Facilities-Management-Using-Gps-Technology.webp" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Facilities Management Using GPS Technology</h1>
                            <p className="text-center max-w-xs">
                            Monitor, Measure & Manage Your Facility Maintenance Management with GPS based Tracking technology. Auto- generated planned preventive maintenance schedules for Day-to-Day Operations. Weekly, monthly, quarterly, half yearly technical schedules to avoid shut-down of the production activities and to achieve production targets in your maintenance department.
                            </p>
                        </div>
                    </Card>
                </div>
        </>
    )
}

export default Businesssolutions