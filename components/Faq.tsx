const Faq = () => {
    const faqsList = [
        {
            q: "What exactly is RippleMatch?",
            a: "RippleMatch is a way to directly contact a company recruiter for a job opening and get jobs that best fit your skills and experience.",
        },
        {
            q: "How does RippleMatch work?",
            a: "Tell us who you are and what you’re looking for and we’ll match you with companies you’ll love so you don’t have to spend hours searching yourself.",
        },
        {
            q: "How long does it take to get matched?",
            a: "It takes about 5 minutes to make a profile and we’ll get you matched instantly.",
        },
        {
            q: "How much does it cost?",
            a: "RippleMatch is free for job seekers. We get paid by companies to help them find the best candidates.",
        },
        {
            q: "Is RippleMatch safe?",
            a: "Yes. We take your privacy very seriously. We will never share your information with anyone without your permission.",
        },
        {
            q: "How long does it take to get connected with a recruiter?",
            a: "Recruiters will respond to you within the same week of applying. They want to hear from you! and will respond as soon as possible.",
        },
    ]

    return (
        <section id="Faq" className="bg-gray-900 py-20 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <section className="leading-relaxed max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="space-y-3 text-center">
                        <h1 className="text-3xl text-white font-semibold">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-400 max-w-lg mx-auto text-lg">
                            Need Help? Feel free to contact us
                        </p>
                    </div>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                        {
                            faqsList.map((item, idx) => (
                                <div
                                    className="space-y-3 mt-5"
                                    key={idx}
                                >
                                    <h4 className="text-xl text-gray-300 font-medium">
                                        {item.q}
                                    </h4>
                                    <p className="text-gray-400">
                                        {item.a}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </section>
                {/* Center redirect button */}
                <div className="flex justify-center mt-10">
                <a href='https://ripplematch.com/index?r=RjM6MT' target="_blank" rel="noopener noreferrer">
                        <span className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            Get Started
                        </span>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Faq;