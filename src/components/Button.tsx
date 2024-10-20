import React from 'react';
// import { ConnectButton } from "thirdweb/react";
// import { client } from '../client';
// import { IoWallet } from "react-icons/io5";
// // import { createWallet, inAppWallet } from 'thirdweb/dist/types/exports/wallets.native';

// interface ButtonProps {
//   btnName: string;
//   className?: string;
// }

// // const wallets = [
// //   inAppWallet(),
// //   createWallet("io.metamask")
// //   createWallet("com.coinbase.wallet"),
// //   createWallet("me.rainbow"),
// // ];

// const Button: React.FC<ButtonProps> = ({ btnName, className }) => {
//   return (
//     <div className=' relative bg-blue-800 flex gap-2 rounded-[8px] border-none hover:bg-blue-900 duration-500 py-2 px-4 cursor-pointer'>
//       <IoWallet className='text-xl'/>
//       <ConnectButton 
//         client={client} 
//       />
//     </div>
//   );
// };

// export default Button;

import { ConnectWallet } from '@thirdweb-dev/react'


const Button = () => {
  return (
    <div>
      <ConnectWallet />
    </div>
  )
}

export default Button;