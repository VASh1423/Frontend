import React, {useReducer} from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { REMOVE_NOTE, SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        const res = await axios.get(`${url}/notes.json`)
    } 

    const addNote = async title => {
        const note = {
            title, data: new Date().toJSON()
        }

        const res = await axios.post(`${url}/note.json`, note)
    }

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return(
        <FirebaseContext.Provider value={{
            showLoader, fetchNotes, addNote, removeNote,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}