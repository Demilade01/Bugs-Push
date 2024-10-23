"use client"

import React, { ReactNode } from 'react';
import { ConnectButton} from 'thirdweb/react';
import { client } from '../client';

const Button = () => {
  
   return(
    <div>
      <ConnectButton
  client={client}
/>;

    </div>
  );
}; 


export default Button; 