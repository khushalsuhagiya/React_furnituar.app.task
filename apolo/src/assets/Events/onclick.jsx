export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
  
    return (
      <button className=" bg-red-500 font-bold py-3.5 mx-96 " onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }