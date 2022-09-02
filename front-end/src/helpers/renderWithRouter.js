import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <BrowserRouter
        location={ history.location }
        history={ history }
      >
        {component}

      </BrowserRouter>,
    ),
    history,
  });
};
export default renderWithRouter;
