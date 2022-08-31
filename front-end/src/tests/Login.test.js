import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Verificar se a tela de Login está correta', () => {
  it('deve testar se caminho da pagina de login está correta', async () => {
    const { history } = renderWithRouter(<App />);
    history.push('/login');
    const { pathname } = history.location;
    expect(pathname).toBe('/login');
  });

  it('deve testar se componentes existem na pagina de login', () => {
    renderWithRouter(<Login />);
    const buttomLogin = screen.getByRole('button', { name: /LOGIN/i });
    const buttomRegister = screen.getByRole('button', { name: /Ainda não tenho conta/i });
    const InputEmail = screen.getByTestId('common_login__input-email');
    const InputPassword = screen.getByTestId('common_login__input-password');
    expect(buttomLogin).toBeInTheDocument();
    expect(buttomRegister).toBeInTheDocument();
    expect(InputEmail).toBeInTheDocument();
    expect(InputPassword).toBeInTheDocument();
  });
  it('deve testar se componentes são validos na pagina de login', async () => {
    renderWithRouter(<App />);
    const buttomLogin = screen.getByRole('button', { name: /LOGIN/i });
    const InputEmail = screen.getByTestId('common_login__input-email');
    const InputPassword = screen.getByTestId('common_login__input-password');
    fireEvent.change(InputEmail, { target: { value: 'airamlobato1235' } });
    fireEvent.change(InputPassword, { target: { value: 'batatinha1235' } });
    expect(buttomLogin).toHaveAttribute('disabled');
    fireEvent.change(InputEmail, { target: { value: 'zebirita@email.com' } });
    fireEvent.change(InputPassword, { target: { value: '$#zebirita#$' } });
    expect(buttomLogin).toBeEnabled();
  });
});
