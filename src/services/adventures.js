import axios from 'axios'

const rootPath = '/adventures'

const create = advObj => {
  return axios.post(rootPath, advObj)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

export const adventureService = {
  create
}