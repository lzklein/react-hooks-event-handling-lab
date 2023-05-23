// Code Keypad Component Here

function Keypad (){
    function passwordSubmit(){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={passwordSubmit}></input>
        </div>
    )
}

export default Keypad;