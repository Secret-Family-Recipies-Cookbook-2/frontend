import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {Authorization: token},
    baseURL: "https://secretfamilyrecipes3.herokuapp.com/"
  })
}