import { BehaviorSubject, Observable } from 'rxjs';
export class Store<T> {
    state$: Observable<T>;
    behaviourState$: BehaviorSubject<T>;

    constructor(initialState: T) {
        this.behaviourState$ =  new BehaviorSubject(initialState);
        this.state$ = this.behaviourState$.asObservable();
    }

    get state(): T {
        return this.behaviourState$.getValue();
    }

    setState(nextState: T) {
        this.behaviourState$.next(nextState);
    }
}