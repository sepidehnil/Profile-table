//1chidren prop holds all the content that you are passing between opening and closing tag of your custom component
const Wrapper = (props) => {
  return props.children;
};
export default Wrapper;
 
//2 or we can use fragment <></> <fragment></fragment>