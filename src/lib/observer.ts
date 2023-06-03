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
      (item: Observer) => item !== observer
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

export { Subject, Observer };
