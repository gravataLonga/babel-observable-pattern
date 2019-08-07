
class Memento {

    hydrante () {
        let memento = JSON.stringify(this);
        return memento;
    }

    dehydrate (memento) {
        let properties = JSON.parse(memento);
        for(let key in properties) {
            this[key] = properties[key];
        }
    }
}

export default Memento;