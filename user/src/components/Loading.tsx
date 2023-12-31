import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4338CA80"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loading;
