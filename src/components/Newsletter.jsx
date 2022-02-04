
function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter-div">
                <form className="newsletter-form">
                    <label>
                        <h4 className="newsletter-headline">
                            Sign up now and try it!
                        </h4>
                        <input
                            required
                            type="email"
                            placeholder="E-MAIL ADDRESS"
                            className="newsletter-input"
                            size={12}
                        />
                        <button type="submit" className="newsletter-button cta">
                            Submit
                        </button>
                    </label>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
