import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FaEnvelope, FaLock} from "react-icons/fa";

export function LoginForm() {
  return (
    <div className="form-container">
      <Form className="form-login">
        <Row>
          <Col xs="12" md={{ size: 12, offset: 0 }} sm="12">
            {/*
             <Row className="logo-aux">
              <Col xs="12" className="flex justify-center items-center mt-8">
                <img src="" alt="" />
              </Col>
            </Row>
            
            */}

            <Col xs="12">
              <p className="title-text text-center">Login</p>
            </Col>
            <Col xs="12">
              <p className="description text-center text-gray-600 text-sm">
                Inicia sesión en tu cuenta
              </p>
            </Col>

            <InputGroup className="custom-input input-border my-4">
              <div className="input-group-append" addonType="prepend">
                <InputGroupText className="custom-input">
                  <FaEnvelope className="custom-login-icon" />
                </InputGroupText>
              </div>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="custom-input"
              />
            </InputGroup>

            <InputGroup className="custom-input input-border my-4">
              <div className="input-group-append" addonType="prepend">
                <InputGroupText className="custom-input">
                  <FaLock className="custom-login-icon" />
                  
                </InputGroupText>
              </div>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="custom-input"
              />
            </InputGroup>

            <Col
              xs="12"
              className="align-items-center d-flex justify-content-end my-5"
            >
              <Button className="button-login">
                Iniciar sesión
              </Button>
            </Col>
          </Col>
        </Row>
      </Form>
      {/* <div className="footer">
            <div className="register">
              <p className="text-xs text-gray-600"> ¿No tienes una cuenta? </p>
              <Button className="ml-1.5" color="primary" outline size="sm" href="/auth/register">
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 11V4h8v8m0 0l-8 8" />
                    <path d="M22 20V4h-8m8 0l-8 8" />
                  </svg>
                </span>
                Registrate
              </Button>
            </div>
          </div> */}
    </div>
  );
}
