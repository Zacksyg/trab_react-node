import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e8f5fe;
`;

const SignupBox = styled.div`
  width: 400px;
  padding: 40px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert('As senhas não coincidem!');
          return;
      }

      try {
          const response = await axios.post('http://localhost:5000/api/auth/signup', { name, email, password });
          alert('Cadastro bem-sucedido!');
          console.log(response.data);
      } catch (error) {
          if (error.response && error.response.data) {
              alert('Erro no cadastro: ' + error.response.data.error);
          } else {
              alert('Erro ao conectar ao servidor.');
          }
          console.error(error);
      }
  };

  return (
      <Container>
          <SignupBox>
              <Title>Cadastro</Title>
              <form onSubmit={handleSubmit}>
                  <Input
                      type="text"
                      placeholder="Nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                  />
                  <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
                  <Input
                      type="password"
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
                  <Input
                      type="password"
                      placeholder="Confirme sua senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                  />
                  <Button type="submit">Cadastrar</Button>
              </form>
              <StyledLink to="/login">Já tem uma conta? Faça login</StyledLink>
          </SignupBox>
      </Container>
  );
}

export default Signup;