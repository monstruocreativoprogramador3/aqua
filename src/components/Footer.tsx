import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-16">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Link href="/" className="text-white text-4xl font-bold mb-6 block">
              AQUATOPIA
            </Link>
            <p className="text-gray-300 mt-2 mb-2">
              AQUATOPIA International Projects, Inc.
            </p>
            <p className="text-gray-300 mt-2 mb-2">
              PO Box 641 Maywood, CA, 90270, USA Tel: (323) 501-5318
            </p>
            <p className="text-gray-300 mt-2 mb-2">
              Email: aquatopia.usa@gmail.com
            </p>
            <p className="text-gray-400 text-sm mt-16">
              Copyright 2025 Aquatiopia
            </p>
          </div>

          {/* Middle Column - Blog Links */}
          {/* <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-6">
              More on The Blog
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About MNTN
                </Link>
              </li>
              <li>
                <Link
                  href="/contributors"
                  className="text-gray-300 hover:text-white"
                >
                  Contributors & Writers
                </Link>
              </li>
              <li>
                <Link
                  href="/write-for-us"
                  className="text-gray-300 hover:text-white"
                >
                  Write For Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Right Column - Company Links */}
          {/* <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-6">
              More on MNTN
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white">
                  The Team
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-white">
                  Press
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
