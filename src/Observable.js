
class Observable {

    /**
     * Constructor
     */
    constructor() {
        this.observers = [];
    }

    /**
     * Subscribe
     * @param f
     */
    subscribe(f) {
        this.observers.push(f);
    }

    /**
     * Unsubscribe
     * @param f
     */
    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    /**
     * Notify
     * @param data
     */
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

export default Observable;