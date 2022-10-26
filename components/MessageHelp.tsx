const MessageHelp = () => {
  return (
    <section id="Help" className="bg-gray-900 py-20 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Now is the time to send your message.
            </h2>
            <p className="mt-2 text-lg text-gray-300">
                Many recruiters would like to recieve a message from applicants, stand out by sending your best response
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            <li className="rounded-2xl border border-gray-200 p-8">
              <h3 className="mt-6 text-xl font-semibold text-gray-200">
                Be Clear and Focused
              </h3>
              <p className="mt-2 text-gray-300">
              Include what is it about this role and company that stood out to you and talk about the company culture and how it fits you
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <h3 className="mt-6 text-xl font-semibold text-gray-200">
                Build a Bridge
              </h3>
              <p className="mt-2 text-gray-300">
                Build a bridge between your skills and the job description, show how you fit in the role and how you can help the company
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <h3 className="mt-6 text-xl font-semibold text-gray-200">
                Research
              </h3>
              <p className="mt-2 text-gray-300">
                Companies want to know that you are interested in the role, and the company, show that you have done your research
              </p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <h3 className="mt-2 text-xl font-semibold text-gray-200">
                Casual Example
              </h3>
              <p className="mt-2 text-gray-300 text-base">
                I am interested in this role because of _____ and my experience in _____. I have looked into _____company_____ and I think I would be a good fit for the company culture. I am looking forward to hearing from you.
              </p>
            </li>
            <li className="rounded-2xl text-xl border border-gray-200 p-8">
              <h3 className="mt-2 font-semibold text-gray-200">
                Real Example
              </h3>
              <p className="mt-2 text-gray-300 text-base">
              I like what eBay does as a company, and I believe with my academic and project experience, I will be a good fit for this role. This role seems like a great way to apply myself in a company to bring value, especially with starting projects that have impact.
              </p>
              <p className="text-sm text-amber-200 pt-2">(Real Example, got first-round interview to Ebay)</p>
            </li>
            <li className="rounded-2xl border border-gray-200 p-8">
              <h3 className="mt-2 text-xl font-semibold text-gray-200">
                Formal Example
              </h3>
              <p className="mt-2 text-gray-300 text-base">
              My name is NameHere. I&apos;m a student at UCLA, I primarily work with databases and networking. I noticed this position is similar to my work, and academic experience. The company culuture appeals to me and I believe I will be a good fit for this role.
              </p>
            </li>
          </ul>
          <h1 className="text-white flex justify-center pt-10 text-xl hover:text-primary hover:cursor-pointer"><a href='https://ripplematch.com/index?r=RjM6MT' target="_blank" rel="noopener noreferrer">Feel Ready to Apply?</a></h1>
        </div>
      </div>
    </section>
  );
};

export default MessageHelp;
