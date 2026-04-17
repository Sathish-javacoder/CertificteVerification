import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/certificates'

// create 
export function createCertificate(data) {
  return axios.post(BASE_URL, data)
}

// get certificate by id
export function getCertificateById(id) {
  return axios.get(BASE_URL + '/' + id)
}

// get all 
export function getAllCertificates() {
  return axios.get(BASE_URL)
}
