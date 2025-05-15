import logo from '../assets/sports-logo.png'

const Footer = () => {
    return (
        <div className="bg-base-200 border-t-2 border-red-500 dark:bg-gray-700 dark:text-white">
            <footer className="footer mx-auto w-11/12 bg-base-200 text-base-content p-10 dark:bg-gray-700 dark:text-white">
                <aside>
                    <img src={logo} alt="Sports Logo" />
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;