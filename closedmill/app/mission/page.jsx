import cnc from '@/assets/images/cnc.jpeg';
import Image from "next/image";
const MissionPage = () => {
    return (
        <section id="feature">
            <div className="relative container flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
            <Image src={cnc} style={{ width: '500px', height: '500px' } } className='inline pr-2 text-3xl' alt="cnc milling"/>
            
            <div className="top-48 pr-0  md:absolute md:right-0 md:py-20 pd:pl-20">
                <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                    The Leader in Precision
                </h2>
                <p className="max-wd text-center md:text-left">
                    Founded in ..., ClosedMill has been producing....
                </p>
            </div>
            </div>
        </section>
    )
    }

export default MissionPage
