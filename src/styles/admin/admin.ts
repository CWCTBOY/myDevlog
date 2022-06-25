import styled from "@emotion/styled";

export const AdminContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgColor.primary};
`;
export const SigninBox = styled("div")`
  width: 500px;
  height: auto;
  margin: auto;
  padding: ${(props) => props.theme.styles.padding};
  border-radius: ${(props) => props.theme.styles.borderRadius.bold};
  box-shadow: ${(props) => props.theme.styles.boxShadow};
`;
export const Title = styled("div")`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    color: ${(props) => props.theme.colors.txtColor.primary};
    font-size: ${(props) => props.theme.styles.fontSize.title};
  }
`;
export const Form = styled("form")`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .inputBox {
    width: 75%;
    .input {
      width: 95%;
      height: 45px;
      font-size: ${(props) => props.theme.styles.fontSize.m};
      background-color: transparent;
      border: ${(props) => props.theme.styles.border};
      border-radius: ${(props) => props.theme.styles.borderRadius.semi};
      margin: 2.5px;
      text-indent: 10px;
      transition: ${(props) => props.theme.styles.transition};
      &:focus {
        outline: none;
        border-color: ${(props) => props.theme.colors.btnColor.primary};
      }
    }
  }
  .submit {
    width: 25%;
    height: 100px;
    border: none;
    border-radius: ${(props) => props.theme.styles.borderRadius.semi};
    background-color: ${(props) => props.theme.colors.btnColor.primary};
    transition: ${(props) => props.theme.styles.transition};
    &:hover {
      background-color: ${(props) => props.theme.colors.btnColor.onHover};
    }
  }
`;
