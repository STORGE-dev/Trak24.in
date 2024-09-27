import React from 'react'
import { Card } from 'antd';

function Products() {
    return (
        <>
        <div className="flex flex-col justify-center ">
            <div className='p-10'>
                <h1 className="text-4xl font-bold">Products</h1>
            </div>
        </div>
        <div className="p-3 lg:p-10 flex flex-wrap justify-center gap-8">
                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<img alt="Fleet Management" src="/AIS140-GPS-Tracker-Image-01.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">AIS140 Tracker</h1>
                            {/* <p className="text-center max-w-xs">
                                When managing a fleet of vehicles, knowing the real-time location of all drivers allows management to meet customer needs more efficiently.
                            </p> */}
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<img alt="Asset Tracking" src="/T1E-Mainstream-GPS-Vehicle-Tracker-Img-01.jpg.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Trak24 AK1</h1>
                            {/* <p className="text-center max-w-xs">
                                Companies needing to track valuable assets for insurance or other monitoring purposes can now plot the real-time asset location on a map.
                            </p> */}
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<img alt="Vehicle Tracking" src="/Trak24-OBD-–-Mainstream-GPS-Vehicle-Tracker-Img-01.png" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Trak24 OBD</h1>
                            {/* <p className="text-center max-w-xs">
                                Vehicle telematics define connected vehicles interchanging electronic data for purposes such as managing road usage and collecting road tolls.
                            </p> */}
                        </div>
                    </Card>

                    
                </div>
        </>
    )
}

export default Products