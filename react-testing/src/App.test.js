import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug()
  });

  test('renders learn react link1', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryAllByText(/hello2/i)
    // expect(helloWorldElem).teBeNull()
    const helloWorldElem = await screen.findByText(/data/i)
    expect(helloWorldElem).toBeInTheDocument()
    expect(helloWorldElem).toHaveStyle({color: 'red'})
  });

  test('CLICK EVENT', () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  })

  test('INPUT EVENT', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    //Искуственное событие
    // fireEvent.input(input, {
    //   target: {value: '1234'}
    // })
    // Близко к пользователю, обрабатываются события нажатия итд
    userEvent.type(input, '1234')
    expect(screen.queryByTestId('value-elem')).toContainHTML('1234')
  })
})