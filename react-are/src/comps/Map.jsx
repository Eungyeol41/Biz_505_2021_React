// 아마도 새로운 jsx 파일에서 적용한 듯
import React, { useEffect } from "react";

function TMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `         
		function initTmap(){
			// map 생성
			// Tmapv2.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
			var map = new Tmapv2.Map("map_div", { // 지도가 생성될 div
				width : "100%", // 지도의 넓이
				height : "400px" // 지도의 높이
			});
		}
		        
        initTmap();
      `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="TMapApp"
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
    />
  );
}

export default TMap;
