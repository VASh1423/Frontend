import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepos } from '../action/repos'
import './main.less'
import Repo from './repo/Repo'

export default function Main() {
  const dispatch = useDispatch()
  const repos = useSelector(state => state.repos.items)

  useEffect(() => {
    dispatch(getRepos())
  }, [])

  return (
    <div>
      {repos.map(repo => 
        <Repo repo={repo}/>
      )}
    </div>
  )
}
