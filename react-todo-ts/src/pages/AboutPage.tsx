import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Информация</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus exercitationem autem maiores id ratione nulla nobis eveniet iusto libero minima ipsam corrupti molestias velit veniam omnis quos, repellat porro?</p>
      <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}