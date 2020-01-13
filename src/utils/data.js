import vue from '../main.js'

// get('/1.1/classes/Product?limit=10&&order=-updatedAt&&')
export default {
    queryTH() {
        return vue.$axios.get('/lot/th/')
    },

    uploadTH(temperature, humidity) {
        return vue.$axios.get(`/lot/th/add/${temperature}/${humidity}`)
    },
}