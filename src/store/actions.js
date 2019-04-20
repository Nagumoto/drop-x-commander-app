
//action types

export const NAME_ARMY = 'NAME_ARMY'
export const SET_GAMESIZE = 'SET_GAMESIZE'
export const ASSIGN_COMMANDERS = 'ASSIGN_COMMANDERS'
export const CHANGE_BATTLEGROUP = 'CHANGE_BATTLEGROUPS'
export const CHANGE_UNITS = 'CHANGE_UNITS'
export const ASSIGN_TRANSPORTS = 'ASSIGN TRANSPORTS'

//other constants

//action creators

export function changeBattlegroup(type, num) {
    return { type: CHANGE_BATTLEGROUP, type, num }
}

