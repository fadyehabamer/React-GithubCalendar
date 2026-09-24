import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// The real component fetches from github-contributions-api.jogruber.de;
// replace it with a stub that just shows which username it received.
vi.mock('react-github-calendar', () => ({
  GitHubCalendar: ({ username }) => <div data-testid="calendar">calendar for {username}</div>,
}));

const search = (value) => {
  fireEvent.change(screen.getByLabelText('GitHub username'), { target: { value } });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));
};

test('shows the default user calendar', () => {
  render(<App />);
  expect(screen.getByTestId('calendar')).toHaveTextContent('calendar for fadyehabamer');
});

test('searching switches the calendar to the entered user', () => {
  render(<App />);
  search('  @octocat ');
  expect(screen.getByTestId('calendar')).toHaveTextContent('calendar for octocat');
  expect(screen.getByText(/@ octocat Github Contributions/)).toBeInTheDocument();
});

test('blank searches keep the current user', () => {
  render(<App />);
  search('   ');
  expect(screen.getByTestId('calendar')).toHaveTextContent('calendar for fadyehabamer');
});
