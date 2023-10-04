import { useRecoilValue } from "recoil";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { adminEmailState } from "../store/selectors/adminEmail";

const CreateCourse = () => {
  const email = useRecoilValue(adminEmailState);

  if (!email) {
    window.location.href = "/";
    return null;
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    imageLink: "",
    rating: 0,
    instructor: "",
    duration: 0,
    language: "",
    videoLink: "",
    published: false,
    courseContent: "",
    prerequisite: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/course/createcourse",
        formData,
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (response.status === 201) {
        toast.success("Course created");
        console.log("Course created successfully");
      } else {
        console.error("Failed to create course");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setFormData({
        title: "",
        description: "",
        price: 0,
        imageLink: "",
        rating: 0,
        instructor: "",
        duration: 0,
        language: "",
        videoLink: "",
        published: false,
        courseContent: "",
        prerequisite: "",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-md shadow-xl">
      <center className="text-3xl font-semibold mb-4">Add new course</center>
      <form onSubmit={handleFormSubmit}>
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
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
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
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
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
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
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
              value={formData.imageLink}
              onChange={(e) =>
                setFormData({ ...formData, imageLink: e.target.value })
              }
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
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: e.target.value })
              }
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
              value={formData.instructor}
              onChange={(e) =>
                setFormData({ ...formData, instructor: e.target.value })
              }
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
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
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
              value={formData.language}
              onChange={(e) =>
                setFormData({ ...formData, language: e.target.value })
              }
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
              value={formData.videoLink}
              onChange={(e) =>
                setFormData({ ...formData, videoLink: e.target.value })
              }
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
              value={formData.published}
              onChange={(e) =>
                setFormData({ ...formData, published: e.target.value })
              }
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
              value={formData.courseContent}
              onChange={(e) =>
                setFormData({ ...formData, courseContent: e.target.value })
              }
            />
          </div>
          <div className="w-1/2 pl-2">
            <label htmlFor="prerequisite" className="block font-medium my-3">
              Prerequisite:
            </label>
            <textarea
              type="text"
              id="prerequisite"
              name="prerequisite"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter prerequisite"
              rows="4"
              required
              value={formData.prerequisite}
              onChange={(e) =>
                setFormData({ ...formData, prerequisite: e.target.value })
              }
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
