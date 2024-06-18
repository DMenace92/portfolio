import {
  C_P_S,
  C_P_L,
  C_P_E,
  F_P_S,
  F_P_L,
  F_P_E,
  U_P_S,
  U_P_L,
  U_P_E,
  D_P_S,
  D_P_L,
  D_P_E,
} from '../Actions/ProjectAction'

const initState = {
  pro: [],
  proLoading: false,
  proError: false,
}

const ProjectReducers = (state = initState, action) => {
  switch (action.type) {
    case C_P_L:
      return {
        ...state,
        proLoading: true,
      }
    case C_P_S:
      return {
        pro: [...state.pro, action.payload],
      }
    case C_P_E:
      return {
        ...state,
        proError: true,
      }
    case F_P_L:
      return {
        ...state,
        proLoading: true,
      }
    case F_P_S:
      return {
        ...state,
        pro: action.payload,
      }
    case F_P_E:
      return {
        ...state,
        proError: true,
      }
    // case U_P_L:
    //   return {
    //     ...state,
    //     proLoading: true,
    //   }
    // case U_P_S:
    //   return {
    //     ...state,
    //   }
    // case U_P_E:
    //   return {
    //     ...state,
    //     proError: true,
    //   }
    // case D_P_L:
    //   return {
    //     ...state,
    //     proLoading: true,
    //   }
    // case D_P_S:
    //   return {
    //     ...state,
    //   }
    // case D_P_E:
    //   return {
    //     ...state,
    //     proError: true,
    //   }
    default:
      return state
  }
}

export default ProjectReducers
