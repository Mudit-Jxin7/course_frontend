const ButtonSm = (props: { title: string }) => {
  return (
    <button className="rounded-lg bg-indigo-600 p-2 text-white w-24 font-semibold">
      {props.title}
    </button>
  );
};

export default ButtonSm;
