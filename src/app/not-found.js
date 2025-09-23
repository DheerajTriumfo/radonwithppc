import styles from '../styles/404.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  alternates: {
    canonical: 'https://radonexhibition.com/404/',
  },
};

export default function NotFound() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="formbg">
              <div className="formtitle text-center">
                <span style={{ color: '#DF672A' }}>404!</span> Oops! Page Not Found
              </div>
              <p className="text-center">{"The page you're looking for doesn't exist or may have been moved."}</p>
              <div className="text-center mt-4">
              	<Link href="/" className="button">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
