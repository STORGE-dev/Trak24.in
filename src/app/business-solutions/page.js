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
                        cover={<Image width={150} height={150} alt="Fleet Management" src="/ERP-Solution-Image-01.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Fleet Management</h1>
                            <p className="text-center max-w-xs">
                                When managing a fleet of vehicles, knowing the real-time location of all drivers allows management to meet customer needs more efficiently.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Asset Tracking" src="/Attendance-System-Img-01.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Asset Tracking</h1>
                            <p className="text-center max-w-xs">
                                Companies needing to track valuable assets for insurance or other monitoring purposes can now plot the real-time asset location on a map.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Vehicle Tracking" src="/Attendance-System-Img-01.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Vehicle Tracking</h1>
                            <p className="text-center max-w-xs">
                                Vehicle telematics define connected vehicles interchanging electronic data for purposes such as managing road usage and collecting road tolls.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Fleet Management" src="/Inventory-and-Billing-Image-01.jpg" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Fleet Management</h1>
                            <p className="text-center max-w-xs">
                                When managing a fleet of vehicles, knowing the real-time location of all drivers allows management to meet customer needs more efficiently.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Asset Tracking" src="/School-Management-Solutions-Image-01.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Asset Tracking</h1>
                            <p className="text-center max-w-xs">
                                Companies needing to track valuable assets for insurance or other monitoring purposes can now plot the real-time asset location on a map.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={150} height={150} alt="Vehicle Tracking" src="/Facilities-Management-Using-Gps-Technology-Img-01.jpg" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Vehicle Tracking</h1>
                            <p className="text-center max-w-xs">
                                Vehicle telematics define connected vehicles interchanging electronic data for purposes such as managing road usage and collecting road tolls.
                            </p>
                        </div>
                    </Card>
                </div>
        </>
    )
}

export default Businesssolutions