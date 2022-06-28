import { Container, Form } from "./styles";

function OtherForm() {
  return (
    <Container>
      <h2>Fomulario</h2>
      <Form>
        <label>Nome:</label>
        <input type="text" name="name" />
        <br />
        <label>Email:</label>
        <input type="text" name="email" />
        <br />
        <label>Aceita os Termos da LGPD:</label>
        <select name="gender">
          <option>-</option>
          <option>SIM</option>
          <option>NÃO</option>
        </select>
        <br />
      </Form>
    </Container>
  );
}
export default OtherForm;
