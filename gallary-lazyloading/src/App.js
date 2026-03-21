import "./App.css";
import img1 from "./images/img1.jpg";
import LazyLoadImage from "./LazyLoadImage";

function App() {
  return (
    <div className="Container">
      <LazyLoadImage src={img1} alt="image1" className="image-style" />
      <LazyLoadImage src={img1} alt="image2" className="image-style" />
      <LazyLoadImage src={img1} alt="image3" className="image-style" />
      <LazyLoadImage src={img1} alt="image4" className="image-style" />
    </div>
  );
}

export default App;
