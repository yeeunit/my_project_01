import styled from "@emotion/styled";

export const DetailWrapper = styled.div`
  width: 100%;
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  padding-top: 70px;
`;

export const HeaderLeftBox = styled.div`
  width: 40%;
  div.default-img {
    width: 100%;
    height: 100%;
    background-color: #c4c4c4;
  }
`;

export const HeaderRightBox = styled.div`
  width: 50%;
  height: 480px;
  padding-left: 70px;
`;

export const HeaderRightTitle = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 24px;
  font-weight: bold;

  span {
    font-size: 24px;
    color: #bdbdbd;
    padding-left: 20px;
    cursor: pointer;
  }
`;

export const HeaderRightPrice = styled.div`
  padding-top: 50px;
  font-size: 40px;
  font-weight: bold;
  span {
    font-size: 20px;
    font-weight: normal;
    padding-left: 10px;
  }
`;

export const HeaderRightContents = styled.div`
  padding: 25px;
  border-top: 3px solid #555555;
  border-bottom: 1px solid #c0c0c0;
  p {
    font-size: 20px;
    padding-bottom: 30px;
  }
  div.tag {
    display: inline-block;
    background-color: gold;
    padding: 5px 20px;
    margin-right: 15px;
    border-radius: 20px;
  }
`;

export const HeaderRightBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  button {
    width: 100%;
    height: 100px;
    font-size: 30px;
    cursor: pointer;
    color: #ffffff;
    border: none;
    margin: 0 10px;
  }
  button.bucket {
    background-color: #a0a0a0;
  }
  button.purchase {
    background-color: #000000;
  }
`;

export const BtnPick = styled.button`
  width: 100%;
  height: 100px;
  font-size: 30px;
  cursor: pointer;
  color: #ffffff;
  border: none;
  margin: 0 10px;
  background-color: ${(props) =>
    props.pickCount === 1 ? "#000000" : "#c9c9c9"};
  span {
    color: ${(props) => (props.pickCount === 1 ? "gold" : "#ffffff")};
  }
`;

export const DetailBody = styled.div`
  display: flex;
  padding-bottom: 150px;
`;

export const BodyLeft = styled.div`
  width: 70%;
  margin-top: 100px;
  border-right: 1px solid #555555;
  padding-right: 20px;
  h1 {
    font-size: 32px;
    font-weight: bold;
    border-bottom: 3px solid #555555;
    padding-bottom: 30px;
  }
`;

export const BodyLeftContentsBox = styled.div`
  padding-top: 30px;
  font-size: 20px;
`;

export const BodyLeftMapBox = styled.div`
  padding-top: 40px;
  div.title {
    padding-bottom: 30px;
    span {
      &:first-of-type {
        color: #bdbdbd;
        margin-right: 10px;
      }
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const BodyRight = styled.div`
  width: 30%;
  margin-top: 100px;
  padding-left: 20px;
  h1 {
    font-size: 32px;
    font-weight: bold;
    border-bottom: 3px solid #555555;
    padding-bottom: 30px;
  }
`;

export const BodyRightProfile = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #555555;
  padding: 20px 0;
  div.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #c4c4c4;
    margin: 0 20px;
  }
  p {
    font-size: 24px;
  }
`;

export const BodyRightCommentBox = styled.div`
  margin-top: 50px;
  h1 {
    font-size: 32px;
    font-weight: bold;
    border-bottom: 3px solid #555555;
    padding-bottom: 30px;
  }
`;

export const BodyRightCommentWriteBox = styled.div`
  padding-top: 30px;
`;

export const BodyRightCommentWrite = styled.textarea`
  width: 100%;
  height: 100px;
`;

export const BodyRightBtnWrap = styled.div`
  margin-top: 20px;
  text-align: right;
`;

export const BodyRightBtn = styled.button`
  width: 110px;
  height: 40px;
  background-color: gold;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const BodyRightCommentListBox = styled.div`
  margin-top: 50px;
`;
