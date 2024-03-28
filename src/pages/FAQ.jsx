import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div className="text-center mt-4 py-3 space-y-6">
        <h1 className="lg:text-4xl text-2xl font-bold">
          Explore Frequently Asked Questions (FAQ)
        </h1>
        <p className="md:max-w-4xl mx-auto">
          Welcome to BookHub's FAQ section! Here, you'll find answers to common
          queries about our publishing services. If you have any further
          questions, don't hesitate to reach out to our team for assistance.
        </p>
      </div>
      <div>
        <section className=" text-gray-800">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border border-green-500 rounded-lg">
                <summary className="px-4 py-6">
                  What genres does BookHub publish?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  BookHub publishes a diverse range of genres including fiction,
                  non-fiction, memoirs, poetry, children books, and more. We
                  strive to showcase a variety of voices and perspectives in
                  literature.
                </p>
              </details>
              <details className="w-full border border-green-500 rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  What publishing options does BookHub offer?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  BookHub offers various publishing options tailored to the
                  needs of different authors. Our services include traditional
                  publishing, self-publishing assistance, and consultation
                  services. We work closely with authors to determine the best
                  approach for their book
                </p>
              </details>
              <details className="w-full border border-green-500  rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  How long does the publishing process take with BookHub?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  The timeline for the publishing process can vary depending on
                  factors such as manuscript complexity, editing requirements,
                  and production schedules. BookHub provides personalized
                  timelines for each accepted manuscript.
                </p>
              </details>
              <details className="w-full border border-green-500 rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  Can I order author copies of my book through BookHub?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  Yes, authors have the option to order author copies of their
                  book at a discounted rate through BookHub. This allows authors
                  to distribute copies for promotional purposes or personal use.
                </p>
              </details>
              <details className="w-full border border-green-500 rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                  How can I contact the support team at BookHub for further
                  assistance?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  If you have any additional questions or need further
                  assistance, please do not hesitate to contact our support
                  team. You can reach us via email at contact@business.com or
                  through our contact form on the website.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="py-6 bg-green-100 mb-6 rounded-2xl">
          <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
            <h1 className="text-3xl font-bold leading-tight text-center lg:text-left">
              To know more about us
            </h1>
            <Link
              to="/about-us"
              className="px-8 py-3 text-lg font-semibold rounded bg-green-500 text-white"
            >
              Visit
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
