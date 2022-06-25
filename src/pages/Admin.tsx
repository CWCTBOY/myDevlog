import { AdminContainer, Form, SigninBox, Title } from "../styles/admin/admin";

export default function Admin() {
  return (
    <AdminContainer>
      <SigninBox>
        <Title>
          <h1 className="title">Admin Pass</h1>
        </Title>
        <Form>
          <div className="inputBox">
            <input
              type="text"
              className="input"
              placeholder="example@example.com"
            />
            <input type="password" className="input" />
          </div>
          <button className="submit">Go</button>
        </Form>
      </SigninBox>
    </AdminContainer>
  );
}
