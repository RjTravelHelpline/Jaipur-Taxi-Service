import NavBar from '@/components/NavBar';
import './globals.scss';
import '../styles/components.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Car Hire Jaipur Sightseeing Taxi | Jaipur Taxi Service',
  description:
    'Our Experience Jaipur sightseeing taxi, car hire Jaipur Car Rental service. Enjoy the city comfortably with Jaipur Taxi Service, which offers safe alternatives.',
  keywords: [
    'Jaipur Sightseeing Taxi',
    'Car Hire Jaipur',
    'Jaipur Car Rental',
    'Taxi in Jaipur',
    'Taxi for Jaipur City Tour',
    'Luxury Car Rental Service Jaipur',
    'Cheapest Taxi Service in Jaipur',
    'Sanitized Taxi in Jaipur',
    'Wedding Car Rental Service Jaipur',
    'Tourist Taxi Service Jaipur',
    'Best Taxi Service in Jaipur',
    'Private Cab Service in Jaipur',
  ],
  alternates: {
    canonical: '',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jaipurtaxiservice',
    title: 'Car Hire Jaipur Sightseeing Taxi | Jaipur Taxi Service',
    description:
      'Our Experience Jaipur sightseeing taxi, car hire Jaipur Car Rental service. Enjoy the city comfortably with Jaipur Taxi Service, which offers safe alternatives.',
    image: '',
  },
  openGraph: {
    title: 'Car Hire Jaipur Sightseeing Taxi | Jaipur Taxi Service',
    description:
      'Our Experience Jaipur sightseeing taxi, car hire Jaipur Car Rental service. Enjoy the city comfortably with Jaipur Taxi Service, which offers safe alternatives.',
    url: '',
    sitename: 'Jaipur Taxi Service',
    images: [
      {
        url: '',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
       
        <Footer />

      </body>
    </html>
  );
}
