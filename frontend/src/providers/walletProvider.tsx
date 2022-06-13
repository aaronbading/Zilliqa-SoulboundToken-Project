import React, {createContext, useContext, useState} from 'react'

const walletProvider=createContext({})
interface Props {
    children?: React.ReactNode
}

//wallet address
const [walletAddress, setWallet]=useState()


function WalletProvider({children}:Props) {
  return (
    <walletProvider.Provider value={{walletAddress}}>
        {children}
    </walletProvider.Provider>
  )
}

export default WalletProvider