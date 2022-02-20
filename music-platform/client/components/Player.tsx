import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import React from 'react'
import styles from '../styles/Player.module.scss'
import TrackProgress from './TrackProgress'

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текс', listens: 5, audio: 'http://localhost:5000/audio/6329e693-cff2-46a5-a7d5-85eea812f91e.m4a', comments: [], picture: 'http://localhost:5000/image/bfa83100-4189-4f3f-b575-a30ee44fd4d6.jpeg'}
  const active = false

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>
        {active
          ? <Pause/>
          : <PlayArrow/>
        }
      </IconButton>
      <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
    </div>
  )
}

export default Player