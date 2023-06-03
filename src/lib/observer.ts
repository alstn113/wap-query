class Subject {
  private observers: Observer[];
  private state: any = null;

  constructor() {
    this.observers = [];
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(
      (item: Observer) => item !== observer,
    );
  }

  private notifyObservers(): void {
    this.observers.forEach((observer: Observer) => {
      observer.update(this.state);
    });
  }

  public setState(state: any): void {
    this.state = state;
    this.notifyObservers();
  }
}

class Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public update(newState: any): void {
    console.log(`Observer ${this.name}'s new state is ${newState}`);
  }
}

// example

// const subject = new Subject();

// const observer1 = new Observer('Observer1');
// const observer2 = new Observer('Observer2');
// const observer3 = new Observer('Observer3');

// subject.addObserver(observer1);
// subject.addObserver(observer2);
// subject.addObserver(observer3);

// subject.setState('Hello World');

// subject.removeObserver(observer2);

// subject.setState('Hello World 2');

export { Subject, Observer };
