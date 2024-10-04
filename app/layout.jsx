import './globals.css';
import TestNavbar from '../app/components/Navbar/testnavbar';
import Footer from '../app/components/Footer/footer'; // Make sure to import Footer if it's a separate component

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* <!-- Header content here --> */}
          <TestNavbar />
        </header>
        <main>
          {/* <!-- Main content here --> */}
          {children}
        </main>
        <footer>
          {/* <!-- Footer content here --> */}
          <Footer />
        </footer>
      </body>
    </html>
  );
}
