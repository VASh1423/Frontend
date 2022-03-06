import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const TrackPage = ({serverTrack}) => {
  const [track, setTrack] = useState<ITrack>(serverTrack)
  const router = useRouter()
  const username = useInput('')
  const text = useInput('')

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
      username: username.value,
      text: text.value,
      trackId: track._id
      })
      setTrack({...track, comments: [...track.comments, response.data]})
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <MainLayout title={'Список треков - ' + track.name + ' - ' + track.artist} keywords={track.artist}>
      <Button
        variant={'outline'}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={'http://localhost:5000/' + track.picture} width={200} height={200}/>
        <div >
          <h1>Название - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова трека</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField
          {...username}
          lable='Ваше имя'
          fullWidth
        />
        <TextField
          {...text}
          lable='Комментарий'
          fullWidth
          multiline
          rows={4}
        />
        <Button onClick={addComment}>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment, id) => 
          <div key={id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  )
}

export default TrackPage

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id)

  return {
    props: {
      serverTrack: response.data
    }
  }
}