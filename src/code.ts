import {Observable} from "rxjs";

var observable = Observable.create((observer: any) => {
    observer.next("Hey guys!")
});
