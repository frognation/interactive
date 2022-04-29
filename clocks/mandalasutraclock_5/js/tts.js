// text to speach
function speak(text, opt_prop) {
  if (
    typeof SpeechSynthesisUtterance === "undefined" ||
    typeof window.speechSynthesis === "undefined"
  ) {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    return;
  }

 // window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

  const prop = opt_prop || {};

  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = prop.rate || 0.7; // 속도: 0.1 ~ 10
  speechMsg.pitch = prop.pitch || 0.7; // 음높이: 0 ~ 2
  speechMsg.lang = prop.lang || "en-US";
  speechMsg.text = text;

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg);
}

// 이벤트 영역
const selectLang = document.getElementById("select-lang");
const text = document.getElementById("text");
const btnRead = document.getElementById("btn-read");
