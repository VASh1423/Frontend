import { Button, Grid, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const TrackPage = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текс', listens: 5, audio: 'http://localhost:5000/audio/6329e693-cff2-46a5-a7d5-85eea812f91e.m4a', comments: [], picture: 'http://localhost:5000/image/bfa83100-4189-4f3f-b575-a30ee44fd4d6.jpeg'}
  const router = useRouter()

  return (
    <MainLayout>
      <Button
        variant={'outline'}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks')}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={track.picture} width={200} height={200}/>
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
          lable='Ваше имя'
          fullWidth
        />
        <TextField
          lable='Комментарий'
          fullWidth
          multiline
          rows={4}
        />
        <Button>Отправить</Button>
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