
import { roundDown } from '@/helpers';
import React, { useEffect, useState } from 'react'
import { useAccount, useBalance } from 'wagmi'

function useCustomBalance(key = undefined, decimalFixed = 3, nativeTokenAddress = '') {
  const { address = undefined } = useAccount(); 
  const { data: balanceToken } = useBalance({
    address: address,
    ...(
      key !== nativeTokenAddress
      && { token: key }
    ),
    watch: true, 
  })

  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const balance = Math.floor(parseFloat(balanceToken?.formatted || '0') * 10 ** decimalFixed || 0) / 10 ** decimalFixed
    setBalance(balance)
  }, [balanceToken?.formatted])

  const setMaxBalanceValue = () => {
    return roundDown(balance, decimalFixed)
  }

  return {
    balance: balance || 0,
    setMaxBalanceValue
  }
}

export default useCustomBalance