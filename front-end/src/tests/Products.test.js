import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
// import Products from '../pages/CustomerProducts';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Verificar se a tela de Login está correta', () => {
  beforeEach(() => {
    renderWithRouter(<Login />);
    const buttomLogin = screen.getByRole('button', { name: /LOGIN/i });
    const InputEmail = screen.getByTestId('common_login__input-email');
    const InputPassword = screen.getByTestId('common_login__input-password');
    userEvent.type(InputEmail, 'zebirita@email.com');
    userEvent.type(InputPassword, '$#zebirita#$');
    userEvent.click(buttomLogin);
  });
  it('deve testar se caminho da pagina de login está correta', async () => {
  });
});
