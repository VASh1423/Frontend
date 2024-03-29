import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { Grid, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/track'
import TrackProgress from './TrackProgress'

let audio;

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Текс', listens: 5, audio: 'http://localhost:5000/audio/6329e693-cff2-46a5-a7d5-85eea812f91e.m4a', comments: [], picture: 'http://localhost:5000/image/bfa83100-4189-4f3f-b575-a30ee44fd4d6.jpeg'}
  const {active, currentTime, duration, pause, volume} = useTypedSelector(state => state.player)
  const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration} = useActions()

  useEffect(() => {
    if(!audio){
      audio = new Audio()
    }else{
      setAudio()
      play()
    }
  }, [active])

  const setAudio = () => {
    if(active){
      audio.src = 'http://localhost:5000/' + active.audio
      audio.volume = volume / 100
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration))
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime))
      }
    }
  }

  const play = () => {
    if(pause){
      playTrack()
      audio.play()
    }else{
      pauseTrack()
      audio.pause()
    }
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100
    setVolume(Number(e.target.value))
  }

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value)
    setCurrentTime(Number(e.target.value))
  }

  if(!active){
    return null
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {!pause
          ? <Pause/>
          : <PlayArrow/>
        }
      </IconButton>
      <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
        <div>{active?.name}</div>
        <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={volume} right={100} onChange={changeVolume}/>
    </div>
  )
}

export default Player