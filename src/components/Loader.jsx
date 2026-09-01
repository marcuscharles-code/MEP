import "../assets/css/loading.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="animated-background">
        <p className="loader-text">
          MEP Engineering website is loading, please wait.
        </p>
      </div>

      <div className="loader-wave">
        <span>MEP</span>
      </div>
    </div>
  );
};

export default Loader;