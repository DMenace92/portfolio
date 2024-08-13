export const C_P_S = 'C_P_S'
const createPorjectSuccess = (pro) => ({ type: C_P_S, payload: pro })

export const C_P_L = 'C_P_L'
const createProjectLoading = () => ({ type: C_P_L })

export const C_P_E = 'C_P_E'
const createProjectError = () => ({ type: C_P_E })

export const C_I_S = 'C_I_S'
const createImageSuccess = (pro) => ({ type: C_I_S, payload: pro })

export const C_I_L = 'C_I_L'
const createImageLoading = () => ({ type: C_I_L })

export const C_I_E = 'C_I_E'
const createImageError = () => ({ type: C_I_E })

export const F_P_S = 'F_P_S'
const fetchPorjectSuccess = (pro) => ({ type: F_P_S, payload: pro })

export const F_P_L = 'F_P_L'
const fetchProjectLoading = () => ({ type: F_P_L })

export const F_P_E = 'F_P_E'
const fetchProjectError = () => ({ type: F_P_E })

export const U_P_S = 'U_P_S'
const updatePorjectSuccess = (proID, pro) => ({
  type: U_P_S,
  payload: { proID, pro },
})

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

export const createImage = (pro) => (dispatch) => {
  dispatch(createImageLoading())
  fetch('http://localhost:9000/create_image', {
    method: 'POST',
    body: pro,
    headers: {
      'Contnet-Type': 'application/json',
      //   "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res.json())
    .then((pro) => {
      dispatch(createImageSuccess(pro))
    })
    .catch((err) => {
      dispatch(createImageError(err))
    })
}

//create function
export const createProject = (pro) => (dispatch) => {
  dispatch(createProjectLoading())
  fetch(`https://portfolio-api1-8287cc1ebf3b.herokuapp.com/create_project`, {
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
  fetch('https://portfolio-api1-8287cc1ebf3b.herokuapp.com/get_projects', {
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

export const updateProject = (proID, pro) => (dispatch) => {
  dispatch(updateProjectLoading())
  fetch(`http://localhost:9000/update_project/${proID}`, {
    method: 'PATCH',
    body: JSON.stringify(pro),
    headers: {
      'Content-Type': 'application/json',
    },
  })
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
