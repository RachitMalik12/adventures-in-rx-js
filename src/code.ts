import {Observable} from "rxjs";

var observable = Observable.create((observer: any) => {
    observer.next("Hey guys!")
});

observable.subscribe((x: String) => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}