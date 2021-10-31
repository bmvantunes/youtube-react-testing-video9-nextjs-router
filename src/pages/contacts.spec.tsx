import { render, screen } from '@testing-library/react';
import Contacts from './contacts.youtube';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../test-utils/createMockRouter';

it('renders contacts', () => {
  render(
    <RouterContext.Provider value={createMockRouter({ query: { id: '22' } })}>
      <Contacts />
    </RouterContext.Provider>
  );

  expect(screen.getByText(/This is the contacts page/)).toBeInTheDocument();
});
