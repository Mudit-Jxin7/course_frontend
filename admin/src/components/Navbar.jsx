import ButtonSm from "./Button/ButtonSm";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around mt-4 shadow-xl h-16">
      <h1 className="text-indigo-600 text-4xl font-bold">AcademeX</h1>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-purple-500 rounded-2xl p-2 w-64 mb-6"
      />
      <div className="flex flex-row space-x-3 mb-6">
        <ButtonSm title="Login in" />
        <ButtonSm title="Sign in" />
      </div>
    </div>
  );
};

export default Navbar;
