import Observable from "./Observable";

const subject = new Observable();

function functionOne(text) {
    console.log(`Function one ${text}`);
}

function functionTwo(text) {
    console.log(`Function two ${text}`);
}

subject.subscribe(functionOne);
subject.subscribe(functionTwo);

subject.notify("Hello World!");

subject.unsubscribe(functionOne);

subject.notify("Jonathan is the best!");