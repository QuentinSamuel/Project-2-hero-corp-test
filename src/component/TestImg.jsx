import { useEffect, useState } from "react";
import axios from "axios";

function TestImg() {
  const [imgTest, setImgTest] = useState();

  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/id/1.json")
      .then((response) => setImgTest(response.data.images));
  }, []);

  function takeAllImgRender() {
    setShowImg(!showImg);
  }
  return (
    <div className="TestImg">
      <h2>Test Image OnClick </h2>
      <button onClick={takeAllImgRender}>test</button>
      {showImg && imgTest && <img src={imgTest.md} />}
    </div>
  );
}

export default TestImg;
