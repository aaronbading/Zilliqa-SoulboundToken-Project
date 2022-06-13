import classNames from 'classnames'
import React, {useContext, useEffect} from 'react'
import { BsWallet } from "react-icons/bs"
import { AiOutlineLogout} from "react-icons/ai"
import { useWalletProvider } from '../providers/walletProvider'
import Button from './Button'


function Navbar() {
    const{connectWallet, walletAddress, setWallet, disConnectWallet}= useWalletProvider()
    useEffect(()=>{
      if(window.zilPay?.wallet?.isConnect){
        setWallet(window.zilPay.wallet.defaultAccount.base16)
      }
    })
    const shortenAddress=(address:String)=>{
      const shortAddress=`${address.slice(0,4)}...${address.slice(-3)}`
      return shortAddress
    }
    
  return (
    <div className='px-5 py-3 bg-slate-900 items-center shadow-lg mx-auto flex justify-between'>
        <a href='/'><h1 className='text-white font-bold text-2xl'>ZILLIQA</h1></a>
        {!walletAddress && <Button onClick={connectWallet}><BsWallet/> Connect</Button>}
        {walletAddress && <div className='flex gap-1'>
          <Button onClick={connectWallet}>
          <h1 className='lowercase'>{shortenAddress(walletAddress)}</h1> 
          </Button> <Button onClick={disConnectWallet}><AiOutlineLogout/></Button>
          </div>}
    </div>
  )
}

export default Navbar