import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';


export const metadata ={
    title:'ClosedMill | CNC',
    description:'CNC Milling',
    keywords:'CNC, milling, machining, milling cutter',
}

const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <head>
                <meta charSet="UFT-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:ital,wght@300&display=swap" rel="stylesheet"/>           
 </head>
            <body>
                {/** hero section */}
                <section id="hero">
                     {/** hero container */}
                        <div className="container max-w-6xl mx-auto px-6 py-12">
                            <Navbar/>

                        </div>
                        
                </section>
                
                <main>{children}</main>
            </body>
        </html>
    )
    };

export default MainLayout;
