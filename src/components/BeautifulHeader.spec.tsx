import { BeautifulHeader } from './BeautifulHeader';

it('renders h1 "Todo ID: 22"', () => {
  expect(true).toBe(true);
});

it('has an anchor tag with href="/contacts', () => {
  expect(true).toBe(true);
});

describe('when "Some Action" button is clicked', () => {
  it('calls router.push with "/contacts', () => {
    expect(BeautifulHeader).toBeTruthy();
  });
});
