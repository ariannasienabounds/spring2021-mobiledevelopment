import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';
    //Although I'm not sure if this is correct, the only thing I could think of to include all of the objects within the array with the <li></li> tags was to write it identifying each object by it's positon
    this.props.menu.forEach( (item) => {
      `<li>${this.props.menu[0]}</li>
      <li>${this.props.menu[1]}</li>
      <li>${this.props.menu[2]}</li>
      <li>${this.props.menu[3]}</li>
      <li>${this.props.menu[4]}</li>
      <li>${this.props.menu[5]}</li>`
      
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;
