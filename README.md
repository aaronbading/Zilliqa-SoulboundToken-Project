# Zilliqa-Soulbound-Project
The Zil Soul-bound token project is one that realizes a non-transferable token that represents ones credentials and identity on chain. This project is a WIP and currently allows for Minting , Burning , and Viewing Profiles . The smart contracts are written in Zilliqa's smartcontract language Scilla.
This project was built for the [Zilliqa | ZILHive] Open Track Challenge for the Grants Round 14 Hackathon in June 2022.

<p align="center">•
  <a href="#setup">Setup</a> •
  <a href="#demo">Demo</a> •
  <a href="#features">Features</a> •
</p>

## Demo
Everyone is encouraged to install Zilpay Chrome extension, grab some testnet Zil from the faucet and mint an SBT profile on the Live Website: https://zilsbt.netlify.app/

This demo is still a Work in progress and does not realize the true potential of the SBT idea but it was an amazing learning experience. 
## Setup

### Prerequisites
Install node >= 14 and npm

Create `.env` file from `.env.example` and fill in the values of all variables with an Api Key from Web3Storage. Easily create an account here: https://web3.storage/login/.

## Local development server

After installing node.js and npm and creating your .env file, run these commands:

```bash
$ cd frontend
$ npm install
$ npm start
```

## Features

- Sample SBT Profile smart contract written in Scilla
- Frontend uses React and Typescript 
- Tailwindcss was used for styling

