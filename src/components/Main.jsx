import { useState } from "react";
import { MainWrap } from "./style";

const Main = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState("0");

  const SelectNum = (num) => {
    if (op === "") {
      setNum1((prevNum1) => (prevNum1 += num));
    } else {
      setNum2((prevNum2) => (prevNum2 += num));
    }
  };
  const SelctFundametal = (op) => {
    setOp(op);
  };

  const Sum = (num1, num2) => {
    // const로 밖에 선언해줬기 때문에 안에 무조건 let으로 선언
    let result = null;
    num1 = Number(num1);
    num2 = Number(num2);

    switch (op) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
    }
    return result;
  };

  const onDel = () => {
    //변수 바꿔 주는게 아닌 함수 빈값해주기
    setNum1("");
    setNum2("");
    setOp("");
    setResult("");
  };

  return (
    <MainWrap>
      <h2>계산기</h2>
      <div className="num">
        <button data-number="1" onClick={() => SelectNum(1)}>
          1
        </button>
        <button data-number="2" onClick={() => SelectNum(2)}>
          2
        </button>
        <button data-number="3" onClick={() => SelectNum(3)}>
          3
        </button>
        <button data-number="4" onClick={() => SelectNum(4)}>
          4
        </button>
        <button data-number="5" onClick={() => SelectNum(5)}>
          5
        </button>
        <button data-number="6" onClick={() => SelectNum(6)}>
          6
        </button>
        <button data-number="7" onClick={() => SelectNum(7)}>
          7
        </button>
        <button data-number="8" onClick={() => SelectNum(8)}>
          8
        </button>
        <button data-number="9" onClick={() => SelectNum(9)}>
          9
        </button>
        <button data-number="0" onClick={() => SelectNum(0)}>
          0
        </button>
      </div>
      <div className="fundametal">
        <button data-op="+" onClick={() => SelctFundametal("+")}>
          +
        </button>
        <button data-op="-" onClick={() => SelctFundametal("-")}>
          -
        </button>
        <button data-op="*" onClick={() => SelctFundametal("*")}>
          *
        </button>
        <button data-op="/" onClick={() => SelctFundametal("/")}>
          /
        </button>
        <button className="equal" onClick={() => Sum(num1, num2)}>
          =
        </button>
        <button className="del" onClick={onDel}>
          DEL
        </button>
      </div>
      <div className="result">
        <button className="num1">{num1}</button>
        <button className="op">{op}</button>
        <button>{num2}</button>
        <button className="con3">=</button>
        <button>{result}</button>
      </div>
    </MainWrap>
  );
};

export default Main;
