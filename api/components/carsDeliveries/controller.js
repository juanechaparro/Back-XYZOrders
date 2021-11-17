const {nanoid} = require('nanoid');


const TABLA = 'deliveries'; 

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        console.error("No se paso el store correctamente");;
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }
    function deleteDelivery(id){
        return store.deleteDelivery(TABLA, id);
    }

    async function upsert(body) {
        const order = {
            brand: body.brand,
            date: body.date,
            quantity: body.quantity,
        }

        if (body.id) {
            order.id = body.id;
        } else {
            order.id = nanoid();    
        }

       

        return store.upsert(TABLA, order);
    }
    async function update(body) {
        const order = {
            brand: body.brand,
            date: body.date,
            quantity: body.quantity,
        }

        

       

        return store.update(TABLA, order);
    }
    

    

    return {
        list,
        get,
        upsert,
        update,
        deleteDelivery,
        
    };
}