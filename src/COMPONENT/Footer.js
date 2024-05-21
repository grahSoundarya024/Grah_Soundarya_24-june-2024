import './Footer.css'
const Footer = () => {
    return <>
    <footer className="footer mt-5">
            <div className="container h-50 ">
                <div className="row w-100 m-4">
                    <div className="footer-col bg-dark">
                        <h4 className='heading'>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col bg-dark">
                        <h4 className='heading'>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">order status</a></li>   
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                  
                    <div className="footer-col bg-dark">
                        <h4 className='heading'>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
export default Footer