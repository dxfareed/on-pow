//import React from 'react'
import { useConnect } from 'wagmi'
export default function Welcome() {
  const { connectors, connect} = useConnect()
    function connectClick(){
      //@ts-ignore
        document.querySelector(".connect-Wal").style.display="none";
       //@ts-ignore
        document.querySelector(".cbwal").style.display="block"
        //@ts-ignore
        document.querySelector(".mmwal").style.display="block"
    }
    return (
    <div className="mn-wel">
   <div style={{
    marginBottom:"20px" 
   }}>to add POW </div>
        <div className="connect-Wal" onClick={connectClick}>
            <div
                style={{
                    paddingTop:"7px"
                }}
            >Connect Wallet</div>
        </div>
        <div className="cbwal desgn-wal">
        {
            connectors.map((connector, index) => (
                index === 3 && (
                  <div
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                  >
                    <span>logo </span>
                    Coinbase
                  </div>
                )
              ))
        }
        </div>
        <div className="mmwal desgn-wal">
        {
            connectors.map((connector, index) => (
                index === 3 && (
                  <div
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                  >
                    <span>logo </span>
                    MetaMask
                  </div>
                )
              ))
        }
        </div>

        {/*
          account.status==='connected'&& <div>Hello, connected!</div>
        */}
    </div>
    )
}
