# Soulbound Tokens

## Introduction

### What are NFTs and SBTs?
Non-Fungible Tokens(NFT) has its own ID and metadata, this means that every NFT is unique and the data that it contains cannot be falsified (image, gif etc.). However, regular NFTs can be sold on secondary market or transferred to another wallet. Soulbound Tokens(SBT), initially proposed by Ethereum's Vitalk Buterin, are essentially NFTs that are permanent and non-transferable. In essence, SBTs are non-transferable identity and reputation tokens. They allow individuals to verify all of their information — their education, work history, credit score, medical history, professional certifications, etc. — using blockchain technologies. 

### How do SBTs work?
Anyone can claim that they're from Cambridge or Havard. But with SBTs, the institute's "Soul" (their private wallet) would have to grant your "Soul" (your private wallet) a SBT certification to be able to effectively make that claim. 

Memberships to a group or an institution can also make use of SBTs as a proof of affiliation. Since they are non-transferrable and cannot be tampered with, they will make it next to impossible for people to claim false credentials.

In an attempt to bring the concept of SBTs into the Zilliqa eco-system, we have created an SBT smart contract in Scilla that will allow for creation of a profile that is tied to your crypto wallet. 

## SBT_Profile.scilla
With reference from Zilliqa's own NFT standard ZRC6, the key functions (transitions) Mint and Burn, are functions that will allow for minting(creation) and burning(destruction) of SBT. We have allowed anyone to mint from our contract, but only owner of SBTs can burn their own SBT.

To match the use case of our project, we have mapped token_uris to a Uint256 that is mapped to string so that contract caller can input their ProfilePictureURI and ProfileDataURI.

In our use case we will want to give SBT owners the ability to edit their own SBT data such as changing their profile picture, changing their data and even earning an achievement.

Contract can be paused and unpaused.









