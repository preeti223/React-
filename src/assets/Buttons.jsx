

function Buttons(){

// Event
    const handleClick = (e) => e.target.textContent = "OUCH!";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>);

// condition
    // let count = 0;
     
    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log('${name} you clicked me ${count} time/s');
    //     }
    //     else{
    //         console.log('${name} stop clicking me!');
    //     }
    //     };

    //     return(<button onClick={() => handleClick ("Preeti")}>Click me</button>);
    // }

 // Parameters
    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log('${name} stop clicking me');

    // return(
    //     <buttons onClick={() => handleClick2("Preeti")}>Click me</buttons>);
    
}


export default Buttons