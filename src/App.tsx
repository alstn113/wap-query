import { Observer, Subject } from "./observer";

const App = () => {
  const subject = new Subject();

  const observer1 = new Observer("Observer1");
  const observer2 = new Observer("Observer2");
  const observer3 = new Observer("Observer3");

  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.addObserver(observer3);

  subject.setState("Hello World");

  subject.removeObserver(observer2);

  subject.setState("Hello World 2");

  return <div>App</div>;
};

export default App;
