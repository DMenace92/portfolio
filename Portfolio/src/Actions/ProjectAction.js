export const C_P_S = 'C_P_S'
const createPorjectSuccess = (pro) => ({ type: C_P_S, payload: pro })

export const C_P_L = 'C_P_L'
const createProjectLoading = () => ({ type: C_P_L })

export const C_P_E = 'C_P_E'
const createProjectError = () => ({ type: C_P_E })

export const F_P_S = 'F_P_S'
const fetchPorjectSuccess = (pro) => ({ type: F_P_S, payload: pro })

export const F_P_L = 'F_P_L'
const fetchProjectLoading = () => ({ type: F_P_L })

export const F_P_E = 'F_P_E'
const fetchProjectError = () => ({ type: F_P_E })

export const U_P_S = 'U_P_S'
const updatePorjectSuccess = (pro) => ({ type: U_P_S, payload: pro })

export const U_P_L = 'U_P_L'
const updateProjectLoading = () => ({ type: U_P_L })

export const U_P_E = 'U_P_E'
const updateProjectError = () => ({ type: U_P_E })

export const D_P_S = 'D_P_S'
const deletePorjectSuccess = (pro) => ({ type: D_P_S, payload: pro })

export const D_P_L = 'D_P_L'
const deleteProjectLoading = () => ({ type: D_P_L })

export const D_P_E = 'D_P_E'
const deleteProjectError = () => ({ type: D_P_E })

//thunk

//create function
export const createProject = (pro) => (dispatch) => {
  dispatch(createProjectLoading())
  fetch(`http://localhost:9000/create_project`, {
    method: 'POST',
    body: JSON.stringify(pro),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((pro) => {
      dispatch(createPorjectSuccess(pro))
    })
    .catch((err) => {
      dispatch(createProjectError(err))
    })
}
//fetch
export const fetchProject = (pro) => (dispatch) => {
  dispatch(fetchProjectLoading())
  fetch('http://localhost:9000/get_projects', {
    method: 'GET',
    body: JSON.stringify(pro),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((pro) => {
      dispatch(fetchPorjectSuccess(pro))
    })
    .catch((err) => {
      dispatch(fetchProjectError(err))
    })
}

export const updateProject = () => (dispatch) => {
  dispatch(updateProjectLoading())
    .then((res) => res.json())
    .then((pro) => {
      dispatch(updatePorjectSuccess(pro))
    })
    .catch((err) => {
      dispatch(updateProjectError(err))
    })
}

export const deleteProject = () => (dispatch) => {
  dispatch(deleteProjectLoading())
    .then((res) => res.json())
    .then((pro) => {
      dispatch(deletePorjectSuccess(pro))
    })
    .catch((err) => {
      dispatch(deleteProjectError(err))
    })
}
