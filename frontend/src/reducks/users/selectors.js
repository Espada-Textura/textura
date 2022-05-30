import { createSelector } from 'reselect'

const usersSelector = (state) => state.users

export const getIsSignedIn = createSelector(
    [usersSelector],
    (state) => state.isSignedIn
)

export const getCurrentUser = createSelector([usersSelector], (state) => state)
