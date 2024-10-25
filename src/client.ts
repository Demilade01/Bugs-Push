"use client";
import { createThirdwebClient } from "thirdweb";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
// const clientId = import.meta.env.VITE_CLIENT_ID;
const clientId = ' 57aca7e8d4ab7f93077f61ce7b123325';

if (!clientId) {
  throw new Error('No client id provided')
}


export const client = createThirdwebClient({
  clientId: clientId,
    // clientId: '57aca7e8d4ab7f93077f61ce7b123325'
});
