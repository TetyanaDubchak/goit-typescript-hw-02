/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentElement {
  title: string;
}

class Component<T extends ComponentElement> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentElement> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};