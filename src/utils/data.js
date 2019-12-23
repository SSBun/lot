import vue from '../main.js'

// get('/1.1/classes/Product?limit=10&&order=-updatedAt&&')
export default {
    /**
     * 
     * @param {string} name The class name you want to query.
     * @param {int} limit Query count.
     */
    queryData(name, limit) {
        return vue.$axios.get('/1.1/classes/'+name,{limit:limit, order:'-updatedAt'})
    },

    insertData(name, object) {
        return vue.$axios.post('/1.1/classes/'+name, object)
    },

}