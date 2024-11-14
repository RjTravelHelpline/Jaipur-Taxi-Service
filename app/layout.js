import NavBar from '@/components/NavBar';
import './globals.scss';
import '../styles/components.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/Footer';
export const metadata = {
  title: 'Jaipur Taxi Service',
  description: 'Jaipur Taxi Service | Book From Here',
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
