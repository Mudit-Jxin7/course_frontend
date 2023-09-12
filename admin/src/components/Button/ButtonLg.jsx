const Button = (props) => {
  return (
    <button className="rounded-lg bg-indigo-600 p-2 text-white w-32 font-semibold">
      {props.title}
    </button>
  );
};

export default Button;
