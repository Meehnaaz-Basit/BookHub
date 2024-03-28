const BookHub = () => {
  return (
    <div>
      <div className="text-center bg-gray-100 py-10 rounded-2xl text-3xl font-bold space-y-4">
        <h2>
          Publish Your Book with <span className="text-green-500">BookHub</span>{" "}
        </h2>
        <p className="text-sm font-normal">
          {" "}
          BookHub is your destination for getting your manuscript into readers'
          hands.
        </p>
      </div>
      <div>
        <h2>Submit Your Manuscript</h2>
        {/*  */}
        <div className="my-10">
          <section className="p-6 bg-green-200 text-gray-900">
            <form className="container flex flex-col mx-auto space-y-12">
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-green-100">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Author Information:</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="full_name" className="text-sm">
                      Full Name
                    </label>
                    <input
                      id="full_name"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3">
                    <label for="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3">
                    <label for="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Dhaka"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="number" className="text-sm">
                      Phone Number
                    </label>
                    <input
                      id="number"
                      type="number"
                      placeholder="+880"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-green-100">
                <div className="space-y-2 col-span-full lg:col-span-1">
                  <p className="font-medium">Book Details:</p>
                </div>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="title" className="text-sm">
                      Book Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      placeholder="Book Title"
                      className="w-full rounded-md text-gray-700 p-3 "
                    />
                  </div>

                  <div className="col-span-full sm:col-span-3">
                    <label for="category" className="text-sm">
                      Category
                    </label>
                    <input
                      id="category"
                      type="text"
                      placeholder="Category"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-4">
                    <label for="summary" className="text-sm">
                      Summary
                    </label>
                    <textarea
                      id="summary"
                      type="text"
                      placeholder="Brief Synopsis or Summary of Your Book"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="bookImage" className="text-sm text-black">
                      Book Image
                    </label>
                    <input
                      id="bookImage"
                      type="file"
                      placeholder="Book Image"
                      accept="image/*"
                      className="w-full rounded-md text-gray-700 p-3"
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default BookHub;
