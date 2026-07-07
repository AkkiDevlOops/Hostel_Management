import Crypto from "crypto-js";

const sessionId = crypto.randomUUID();
console.log(`session id : ${sessionId}`);