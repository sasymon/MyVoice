import { DISPLAY_CATEGORIES } from '../actions'

const initialState = []

export default function categories (state = initialState, action) {
  switch (action.type) {
    case DISPLAY_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
