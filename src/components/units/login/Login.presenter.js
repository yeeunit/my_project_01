import * as A from "./Login.styles";

export default function LoginWriteUI(props) {
  return (
    <>
      <A.Wrapper>
        <A.Title>로그인</A.Title>

        <A.InputWrap>
          <A.Label>이메일</A.Label>{" "}
          <A.InputBox
            id="id"
            type="text"
            placeholder="아이디"
            onChange={props.onChangeEmail}
          />{" "}
        </A.InputWrap>
        <A.Error>{props.emailError}</A.Error>

        <A.InputWrap>
          <A.Label>비밀번호</A.Label>{" "}
          <A.InputBox
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />{" "}
        </A.InputWrap>
        <A.Error>{props.emailError}</A.Error>

        <A.LoginBtn onClick={props.onClickLogin}>로그인</A.LoginBtn>
      </A.Wrapper>
    </>
  );
}
