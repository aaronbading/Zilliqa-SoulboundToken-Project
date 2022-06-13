import React, {createContext, useContext, useState} from 'react'
const walletProvider=createContext({})
interface Props {
    children?: React.ReactNode
}
declare global {
  interface Window{
    zilPay?: any
  }
}

const zilPay=window.zilPay

function WalletProvider({children}:Props) {
    //wallet address
    const [walletAddress, setWallet]=useState('')

  const connectWallet=async()=>{
    if(window.zilPay){
       const wallet=await zilPay.wallet.connect()
       setWallet(zilPay.wallet.defaultAccount.base16)
    }else{
      alert('Install ZillPay Wallet')
    }
  }
  const disConnectWallet=async()=>{
    if(window.zilPay){
       const wallet=await zilPay.wallet.disconnect()
       setWallet('')
    }
  }

  return (
    <walletProvider.Provider value={{walletAddress, setWallet, connectWallet, disConnectWallet}}>
        {children}
    </walletProvider.Provider>
  )
}

export default WalletProvider
export const useWalletProvider=():any=>useContext(walletProvider)