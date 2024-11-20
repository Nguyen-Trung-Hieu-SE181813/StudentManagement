import axios from "axios"

const apiUrl = "https://673dbb950118dbfe860887ab.mockapi.io/api/studentManagement"

export const getAllStudents = async () => {
    try {
        const response = await axios.get(apiUrl)
        return response.data;
    } catch (e) {
        console.log(e.toString())
    }
}

export const getStudentById = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`)
        return response.data;
    } catch (e) {
        console.log(e.toString())
    }
}

export const createStudent = async (student) => {
    try {
        const response = await axios.post(`${apiUrl}`, student)
        return response.data;
    } catch (e) {
        console.log(e.toString())
    }
}

export const updateStudent = async (id, student) => {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, student)
        return response.data;
    } catch (e) {
        console.log(e.toString())
    }
}

export const deleteStudent = async (id) => {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`)
        return response.data;
    } catch (e) {
        console.log(e.toString())
    }
}