import "./Footer.css";

const Footer = () => {
    return (
        <>
            <section className="footer">

                <div className="box-container">

                    <div className="box">
                        <h3>locations</h3>
                        <a href="#">india</a>
                        <a href="#">japan</a>
                        <a href="#">russia</a>
                        <a href="#">USA</a>
                        <a href="#">france</a>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#">home</a>
                        <a href="#">dishes</a>
                        <a href="#">about</a>
                        <a href="#">menu</a>
                        <a href="#">reivew</a>
                        <a href="#">order</a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#">+2348068191078</a>
                        <a href="#">maxbold0007@gmail.com</a>
                        <a href="#">olabold@gmail.com</a>
                        <a href="#">Lagos-Nigeria.</a>
                    </div>

                    <div className="box">
                        <h3>follow us</h3>
                        <a href="#">facebook</a>
                        <a href="#">twitter</a>
                        <a href="#">instagram</a>
                        <a href="#">linkedin</a>
                    </div>

                </div>

                <div className="credit"> copyright @ 2021  </div>

            </section>
        </>
    )
}

export default Footer
