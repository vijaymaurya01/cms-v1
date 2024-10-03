import './globals.css';

import TestNavbar from '../app/components/Navbar/testnavbar';

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
       <header><TestNavbar/></header>
      <body>
        
        <main>{children}</main>
      </body>
    </html>
  );
}