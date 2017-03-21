const MAPS = 'user-profile/MAPS'

export const search = (value) => ({
  type: MAPS,
  value
})

const initialState = {
  maps: ''
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MAPS:
      return {
        ...state,
        maps: action.value
      }
    default:
      return state
  }
}