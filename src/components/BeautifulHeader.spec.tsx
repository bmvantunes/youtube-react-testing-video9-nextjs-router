import { BeautifulHeader } from './BeautifulHeader';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMockRouter } from '../test-utils/createMockRouter';
import { RouterContext } from 'next/dist/shared/lib/router-context';

it('renders h1 "Todo ID: 22"', () => {
  render(
    <RouterContext.Provider value={createMockRouter({ query: { id: '22' } })}>
      <BeautifulHeader />;
    </RouterContext.Provider>
  );

  expect(screen.getByText('Todo ID: 22')).toBeInTheDocument();
});

it('has an anchor tag with href="/contacts"', () => {
  render(
    <RouterContext.Provider
      value={createMockRouter({ query: { id: '33' }, pathname: 'bruno' })}
    >
      <BeautifulHeader />;
    </RouterContext.Provider>
  );

  // /contacts/?id=33&from=bruno
  expect(screen.getByText('Contacts Page')).toHaveAttribute(
    'href',
    '/contacts?id=33&from=bruno'
  );
});

describe('when "Some Action" button is clicked', () => {
  it('calls router.push with "/contacts', () => {
    const router = createMockRouter({
      query: { id: '44' },
      pathname: 'joao',
      basePath: 'antunes',
    });

    render(
      <RouterContext.Provider value={router}>
        <BeautifulHeader />;
      </RouterContext.Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Some Action' }));
    expect(router.push).toHaveBeenCalledWith(
      '/contacts?id=44&from=joao&something=antunes'
    );
  });
});
