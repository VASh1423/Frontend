import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreator from '../store/action-creators/'

export const useAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(ActionCreator, dispatch)
}