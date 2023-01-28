import Layout from '../Components/Layout';
import { useAccount } from 'wagmi'
import { Spinner } from '@chakra-ui/react';
import { useWeb3AuthHook } from '../utils/web3AuthContext';
import { use, useEffect } from 'react';

const Homepage = () => {

  //hook to access wallet connect user address
  const { address, isConnecting, isDisconnected } = useAccount()
  
  //hook to access web3auth user address
  const { w3aAddress, w3aUserInfo, w3aAuthenticatedUser  } = useWeb3AuthHook()

  useEffect(() => {

  },[w3aAddress])

  if (isConnecting) {
    return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
  }

  if (address || w3aAddress) {
    return <Layout>Hola {address || w3aAddress} !</Layout>  
  }
  
  if (isDisconnected) {
    return <Layout>Connect or create a wallet to get started</Layout>    
  }

};

export default Homepage;
