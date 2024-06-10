'use client';
import cnc from '@/assets/images/cnc.jpeg';
import img1 from '@/assets/images/img1.jpeg';
import img3 from '@/assets/images/img3.jpeg';
import img4 from '@/assets/images/img4.jpeg';
import img5 from '@/assets/images/img5.jpeg';
import img6 from '@/assets/images/img6.jpeg';
import Image from "next/image";
import Link from 'next/link';
import c_transparent from '@/assets/images/ClosedMill_transparent.png';
import facebook from '@/assets/images/icon-facebook.svg';
import instagram from '@/assets/images/icon-instagram.svg';
import twitter from '@/assets/images/icon-twitter.svg';
import { useRouter } from "next/navigation";
import ImageCarousel from '@/components/ImageCaroussel';

    const HomePage = () => {
    const router = useRouter();

    return (
        <div>
        <section id="feature">
            <div className="relative container flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
            <Image src={cnc} style={{ width: '500px', height: '500px' } } className='inline pr-2 text-3xl' alt="cnc milling"/>
            
            <div className="top-48 pr-0 md:absolute md:right-0 md:py-20 pd:pl-20 bg-white">
                <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
                    The Leader in Precision
                </h2>
                <p className="max-wd text-center md:text-left">
                    Founded in ..., ClosedMill has been producing....
                </p>
            </div>
            </div>
        </section>
        
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
            <div className="flex justify-center mt-10 md:hidden">
            <div className="button btn w-full md:hidden">
                See All
            </div>
        </div>
            </div>
        </section>

        <section id="services">
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
                <div className="flex justify-center small mb-20 md:justify-between">
                    <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
                        Services
                    </h2>
                    </div>
            <ImageCarousel />
               
                </div>

        </section>
            


        <footer className="bg-black">
               {/** container*/}
            <div className="container max-w-6xl py-10 mx-auto">
                 {/** footer flex container*/}
                 <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    {/** menu and logo container*/}
                        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                            <div className="h-8 mb-24">
                                <Image src={c_transparent} alt="logo" className="w-44 md:ml-3 " />
                                 {/** logo*/}

                            </div>
                             {/** menu container*/}
                             <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3 ">
                                     {/** item 1*/}
                                <div className="h-10 group">
                                <Link href="#feature"> Mission</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
                                </div>      
                                </div>

                                    {/** item 2*/}
                                    <div className="h-10 group">
                                <Link href="#creations"> Products</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
                                </div>      
                                </div>


                                 {/** item 3*/}
                                <div className="h-10 group">
                                <Link href="#services"> Services</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
                                </div>      
                                </div>

                                  {/** item 4*/}
                                  <div className="h-10 group">
                                <Link href="#quality_policy"> Quality Policy</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
                                </div>      
                                </div>

                                   {/** item 5*/}
                                   <div className="h-10 group">
                                <Link href="#careers"> Careers</Link>
                                <div className="mx-2 group-hover:border-b group-hover:border-blue-50">
                                </div>      
                                </div>

                             </div>
                        </div>
                    {/** social and copy container*/}

                    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                        {/** icons container*/}
                        <div className="flex items-center mx-auto md:mx-0 justify-center space-x-4 md:justify-end">
                            {/** icon 1 */}
                            <div className="h-8 group">
                            <Link href="#"> 
                            <Image src={facebook} alt='closedmill_facebook'/> 
                            </Link>
                            </div>

                             {/** icon 2 */}
                             <div className="h-8 group">
                            <Link href="#"> 
                            <Image src={instagram} alt='closedmill_instagram'/> 
                            </Link>
                            </div>

                             {/** icon 3 */}
                             <div className="h-8 group">
                            <Link href="#"> 
                            <Image src={twitter} alt='closedmill_twitter'/> 
                            </Link>
                            </div>
                        </div>
                           {/** Copyright */}
                           <div className="font-bold">
                            &copy; 2024 ClosedMill.
                           </div>
                    </div>
                 </div>
            </div>
        </footer>
        </div>
    )
    }

export default HomePage

