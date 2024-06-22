import styled from "styled-components";

export const MainWrap = styled.div`
  margin: 100px;
  width: 100%;

  h2 {
    margin-left: 20%;
    font-size: 30px;
  }

  button {
    border: 1px solid #000;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    text-align: center;
  }

  .num {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 400px;
    height: 150px;

    button {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      cursor: pointer;
    }
  }

  .fundametal {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 400px;
    height: 100px;

    button {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      cursor: pointer;
    }

    .equal {
      background: red;
      color: #fff;
    }
    .del {
      background: red;
      color: #fff;
      text-align: center;
    }
  }

  .result {
    display: flex;

    justify-content: center;
    width: 400px;
    height: 200px;

    button {
      margin-right: 20px;
      background: #000;
      color: #fff;
      width: 70px;
      font-weight: 700;

      &:last-child {
        color: yellow;
      }
    }

    .con3 {
    }
  }
`;
