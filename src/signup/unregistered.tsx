//@ts-ignore
export default function UnregisteredUser({userName, setUserName, setstBool, setBool}){
 // const {address,status} = useAccount()
  //const [web3, setWeb3] = useState(new Web3);
  function onchangeName(){
    
  }
  function contnFunc(){
    //@ts-ignore
    const val= document.querySelector("#name-in-eth").value;
    const wordVerf= val.slice(val.length-9)
    const userMn= val.slice(0,val.length-9)
    if(wordVerf==".base.eth"){
      console.log("typeshit type---script typeshit typescript");
      setUserName(userMn);
      setstBool(true);
      setBool(false);
    }
    else{
      //@ts-ignore
      document.querySelector(".view-only-wrong").style.display="block";
      setTimeout(
        ()=>{
          //@ts-ignore
          document.querySelector(".view-only-wrong").style.display="none";
        }, 5000
      )
    }
  }
  return (
    <div className='unreg-user'>
      <div className='add-user'>
            <div className='sub-sign'>
                <div id='name-text'>Enter name to continue -&gt;</div>
                <div><input id="name-in-eth" type='text' placeholder='e.g. Joe' onChange={onchangeName}/></div>
                <div className="view-only-wrong">Base name only!</div>
                <div id='continue-ton'>
                  <div onClick={contnFunc}>Continue</div>
                </div>
            </div>
          </div>
    </div>
  )
}
