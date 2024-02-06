import "../styles/Draw.css";
import React, { useEffect, useRef, useState } from "react";
import Header from "../component/Header.js";
import Navbar from "../component/Navbar.js";
import Left from "../assets/left.png";
import Right from "../assets/right.png";
import Palette from "../component/Palette.js";
import Canvas from "../component/Canvas.js";
import { useNavigate } from "react-router-dom";

function DrawPage() {
  //추출된 키워드
  const data = ["바다", "가족", "여행", "과일", "강아지"];
  //키워드 인덱스
  const [index, setIndex] = useState(0);
  const [lineWidth, setLineWidth] = useState(3); //선의 두께
  const [color, setColor] = useState("#FFFFFF");
  const [savedImages, setSavedImages] = useState([]);

  //다음 키워드 제시
  const getNextKeyword = () => {
    if (index == data.length - 1) return;
    setIndex((index) => index + 1);
  };
  //이전 키워드 제시
  const getPrevKeyword = () => {
    if (index == 0) return;
    setIndex((index) => index - 1);
  };
  //브러쉬, 지우개 크기 변경
  const changeLineWidth = (e) => {
    setLineWidth(parseInt(e.target.value));
    console.log("lineWidth : ", lineWidth);
  };
  //브러쉬 색 변경
  const selectColor = (selectedColor) => {
    setColor(selectedColor);
    console.log("selectedColor : ", selectedColor);
  };

  const canvasRefs = useRef(data.map(() => React.createRef()));

  const saveImage = async () => {
    const images = await Promise.all(
      canvasRefs.current.map(async (canvasRef) => {
        return await canvasRef.current.toDataURL();
      })
    );

    // 1. toDataURL 실행 후
    // 2. setSavedImages의 값을 업데이트
    setSavedImages(images);
  };

  useEffect(() => {
    // 3. savedImages의 값을 photodiary 페이지에 넘겨주면서 페이지를 불러옴
    if (savedImages.length > 0) {
      console.log("Images saved:", savedImages);
      goPhotodiary();
    }
  }, [savedImages]);

  const navigate = useNavigate();
  const goPhotodiary = () => {
    navigate("/photodiary", { state: { savedImages } });
  };
  return (
    <div
      style={{
        width: "393px",
        height: "852px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header pageName="그림일기" />
      <div id="content">
        {/* 추출한 키워드 제시 */}
        <div id="keyword">
          <img src={Left} height="30" onClick={getPrevKeyword} />
          <p style={{ fontSize: "25px", flexGrow: "1", textAlign: "center" }}>
            {data[index]}
          </p>
          <img src={Right} height="30" onClick={getNextKeyword} />
        </div>
        {/* 컬러 팔레트 */}
        <Palette onColorClick={selectColor} />
        <Palette />
        <Palette />
        {/* 브러쉬 크기 조정 */}
        <div style={{ fontSize: "20px", margin: "10px" }}>
          브러쉬 크기 {lineWidth}
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={lineWidth}
            onChange={changeLineWidth}
          />
        </div>
        {data.map((keyword, i) => (
          <Canvas
            key={i}
            lineWidth={lineWidth}
            color={color}
            isVisible={i == index}
            canvasRef={canvasRefs.current[i]}
          />
        ))}
        {data.length - 1 === index ? (
          <button onClick={saveImage}>종료</button>
        ) : null}
      </div>
      <Navbar />
    </div>
  );
}

export default DrawPage;
