/**
 * @params {string} na
 * @params {string} you
 * @returns {boolean} result
 * 나와 너의 가위바위보 메서드
 * 가위는 주먹에게 지고, 보자기를 이긴다.
 * 바위는 보자기에게 지고, 가위를 이긴다.
 * 보자기는 가위에게 지고, 바위를 이긴다.
 */
let rules: string[] = ["가위", "바위", "보"];
let resultRules: string[] = ["이김", "비김", "졌다"];

function randomGenerator(rules: Array<string>) {
  let tmpRules: string = "";
  tmpRules = rules[Math.floor(Math.random() * rules.length)];
  return tmpRules;
}
// console.log(randomGenerator(rules));

function gamBamBo(na: string, you: string) {
  let a, b, c;
  let ga: string = "가위";
  let ba: string = "바위";
  let bo: string = "보";
  // let resultBoolean: boolean = false;
  let resultWord: string = "";
  let resultObj: object = {};
  resultObj = { na: "", ner: "" };

  switch (na) {
    case ga:
      switch (you) {
        case ga:
          resultWord = "1-1 비겼다";
          break;
        case ba:
          resultWord = "1-2 졌다";
          break;
        case bo:
          resultWord = "1-3 이겼다";
          break;
        default:
          resultWord = "1-4 가위, 바위, 보만 입력 가능합니다.";
      }
      break;
    case ba:
      switch (you) {
        case ga:
          resultWord = "2-1 이겼다";
          break;
        case ba:
          resultWord = "2-2 비겼다";
          break;
        case bo:
          resultWord = "2-3 졌다";
          break;
        default:
          resultWord = "2-4 가위, 바위, 보만 입력 가능합니다.";
      }
      break;
    case bo:
      switch (you) {
        case ga:
          resultWord = "3-1 졌다";
          break;
        case ba:
          resultWord = "3-2 이겼다";
          break;
        case bo:
          resultWord = "3-3 비겼다";
          break;
        default:
          resultWord = "3-4 가위, 바위, 보만 입력 가능합니다.";
      }
      break;
    default:
      resultWord = "0-4 가위, 바위, 보만 입력 가능합니다.";
  }

  return resultWord;
}
let meRan = randomGenerator(rules);
let nerRan = randomGenerator(rules); //*랜덤으로 대체되었따.
console.log(`나 : ${meRan}, 너 : ${nerRan}`);
console.log(gamBamBo(meRan, nerRan));
