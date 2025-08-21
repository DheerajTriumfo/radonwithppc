import Ppcheader from '../../components/navigationppc.js';
import Footerppc from '../../components/footerppc.js';
export const metadata = {
  title: "PPC Trade Show Booth Rentals Quotation",
  description: "Landing page for PPC campaign",
};

export default function LandingLayout({ children }) {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Ppcheader/>
    {children}
    <Footerppc/>
    </>
  );
}
