//TODO: Form submission to be added
const ContactMeSection = () => {
    return (
        <section className="contact-me-section px-6">
            <h1 className="text-left text-[26px] font-bold tracking-[10px] ">5.ContactMe</h1>
            <hr className="h-px   border-charcoal-gray mt-3 w-2/5" />
            <div className="container mt-10">
                <form action="">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className=" rounded-lg bg-light-gray border border-charcoal-gray p-3" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className=" rounded-lg bg-light-gray border border-charcoal-gray p-3" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" className=" rounded-lg bg-light-gray border border-charcoal-gray p-3 h-36"></textarea>
                        </div>
                        <button className="bg-charcoal-gray text-white px-8 py-[14px] mt-4 rounded-md">Send Message</button>
                    </div>
                </form>
            </div>
        </section>

    );
}

export default ContactMeSection;