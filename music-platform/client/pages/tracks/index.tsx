import { Button, Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import TrackList from '../../components/TrackList'
import MainLayout from '../../layouts/MainLayout'
import { ITrack } from '../../types/track'

const Index = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текс', listens: 5, audio: 'http://localhost:5000/audio/6329e693-cff2-46a5-a7d5-85eea812f91e.m4a', comments: [{_id: '1', username: 'Имя', text: 'Комментарий'}], picture: 'http://localhost:5000/image/bfa83100-4189-4f3f-b575-a30ee44fd4d6.jpeg'},
    {_id: '2', name: 'Трек 2', artist: 'Исполнитель 1', text: 'Текс', listens: 2, audio: 'Аудио', comments: [{_id: '2', username: 'Имя 2', text: 'Комментарий 2'}], picture: 'картинка'},
  ]

  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: '900px'}}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Index