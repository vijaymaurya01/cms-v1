
import './globals.css';
import TestNavbar from '../app/components/Navbar/testnavbar';
import Footer from '../app/components/Footer/footer'; // Ensure this path is correct
import { AuthProvider } from './context/AuthContext'; // Import your AuthProvider

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider> {/* Wrap your application in AuthProvider */}
          <header>
            <TestNavbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
