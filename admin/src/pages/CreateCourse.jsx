const CreateCourse = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-md shadow-xl">
      <center className="text-3xl font-semibold mb-4">Add new course</center>
      <form>
        <div className="mb-4 flex flex-wrap">
          <div className="w-1/2 pr-2">
            <label htmlFor="title" className="block font-medium my-3">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="description" className="block font-medium my-3">
              Description:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter description"
              required
            />
          </div>
          <div className="w-1/2 pr-2">
            <label htmlFor="price" className="block font-medium my-3">
              Price:
            </label>
            <input
              type="number"
              min="0"
              id="price"
              name="price"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter price"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="imageLink" className="block font-medium my-3">
              imageLink:
            </label>
            <input
              type="url"
              id="imageLink"
              name="imageLink"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter image"
              required
            />
          </div>
          <div className="w-1/2 pr-2">
            <label htmlFor="rating" className="block font-medium my-3">
              Rating:
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              id="rating"
              name="rating"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter rating"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="instructor" className="block font-medium my-3">
              Instructor:
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Instructor"
              required
            />
          </div>
          <div className="w-1/2 pr-2">
            <label htmlFor="duration" className="block font-medium my-3">
              Duration(in hrs):
            </label>
            <input
              type="number"
              min="0"
              step="0.5"
              id="duration"
              name="duration"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter duration"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="language" className="block font-medium my-3">
              Language:
            </label>
            <input
              type="text"
              id="language"
              name="language"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter language"
              required
            />
          </div>
          <div className="w-1/2 pr-2">
            <label htmlFor="videoLink" className="block font-medium my-3">
              VideoLink:
            </label>
            <input
              type="url"
              id="videoLink"
              name="videoLink"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter video link"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="published" className="block font-medium my-3">
              Published:
            </label>
            <input
              type="text"
              id="published"
              name="published"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="true"
              required
            />
          </div>
          <div className="w-1/2 pr-2">
            <label htmlFor="courseContent" className="block font-medium my-3">
              CourseContent:
            </label>
            <textarea
              type="url"
              id="courseContent"
              name="courseContent"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter Course Content"
              rows="4"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="prerequisite" className="block font-medium my-3">
              Prerequisites:
            </label>
            <textarea
              type="text"
              id="prerequisite"
              name="prerequisite"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter prerequisites"
              rows="4"
              required
            />
          </div>
        </div>

        <center className="mb-4">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 p-2 text-white w-32 font-semibold hover:bg-blue-600 transition duration-300"
          >
            Create
          </button>
        </center>
      </form>
    </div>
  );
};

export default CreateCourse;
