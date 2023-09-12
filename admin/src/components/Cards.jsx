import CourseCard from "./CourseCard";

const Cards = () => {
  return (
    <>
      <center className="text-4xl font-medium">Courses</center>
      <div className="grid grid-cols-4 gap-2 mx-12">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </>
  );
};

export default Cards;
