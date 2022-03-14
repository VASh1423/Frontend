import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UserDetailsPage from '../pages/UserDetailsPage';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';
import Users from './Users';

jest.mock('axios')

describe('USERS TEST', () => {
  let response
  beforeEach(() => {
    response = {
      data:[
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ]
    }
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('renders learn react link', async () => {
    axios.get.mockReturnValue(response)
    render(<Users/>)
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(2)
    expect(axios.get).toBeCalledTimes(1)
    screen.debug()
  })

  test('rest redirect to details page', async () => {
    axios.get.mockReturnValue(response)
    render(renderWithRouter(<Users/>))
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(2)
    userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument()
  })
})