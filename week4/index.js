import Sidebar from './components/Sidebar.js';

const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});

/* 
  TODO: Use the render() method of Sidebar to show HTML response on console. Results should be wrapped in <ul></ul>
  
  The final result should look like the following:
  <ul><li>Albert Eggstein</li><li>Attila the Hen</li><li>Attila the Hen</li><li>Dixie Chick</li><li>Gregory Peck</li><li>Mary Poopins</li></ul>
*/
// I'm unsure as to why the error is popping up in line 21, even though the format of this render is similar to others we have written 
render() {
  return `<ul>${this.props.responseHTML}</ul>`;
}
console.log();
