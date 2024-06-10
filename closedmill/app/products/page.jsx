'use client';
import img1 from '@/assets/images/img1.jpeg';
import img3 from '@/assets/images/img3.jpeg';
import img4 from '@/assets/images/img4.jpeg';
import img5 from '@/assets/images/img5.jpeg';
import img6 from '@/assets/images/img6.jpeg';
import Image from "next/image";

const page = () => {
  return (
    <section id="creations">
    <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        <div className="flex justify-center small mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                Our Products
            </h2>
            <button className="hidden btn md:block">
                See All
            </button>
        </div>
        <div className="item-container">
            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img1} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img1} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product1
                </h5>
            </div>

            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img6} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img6} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product2
                </h5>
            </div>

            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img3} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img3} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product3
                </h5>
            </div>

        

            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img5} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img5} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product4
                </h5>
            </div>

            
        </div>

        {/** item container 2*/ }
        <div className="item-container mt-10">
            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img3} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img3} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product5
                </h5>
            </div>

            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img4} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img4} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product6
                </h5>
            </div>

            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img5} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img5} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product7
                </h5>
            </div>

        

            <div className="group item">
                 {/** item1 - Desktop */}
                <Image src={img6} className='hidden w-full duration-200 md:block group-hover:scale-110' alt="cnc milling"/>
                 {/** item1 - mobile */}
                <Image src={img6} className='w-full md:hidden' alt="cnc milling"/>
                {/** item1 - gradient */}
                <div className="item-gradient"></div>
                {/** item1 - text */}
                <h5>
                    Product8
                </h5>
            </div>

            
        </div>
        {/** bottom container*/}
        <div className="flex justify-center mt-10:md:hidden">
          <div className="button btn w-full md:hidden">
            See All
          </div>
        </div>
    </div>
</section>
  )
}

export default page
