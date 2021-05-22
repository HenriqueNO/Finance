function stringToArrayBuffer (str: string) {
  const buff = new ArrayBuffer(str?.length*2);
  const buffView = new Uint16Array(buff);
  for (let i = 0, strLen = str?.length; i < strLen; i++) {
    buffView[i] = str.charCodeAt(i);
  }
  return buffView
}

function arrayBufferToString (buff: ArrayBuffer) {
  return String.fromCharCode.apply(null, new Uint16Array(buff));
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode( bytes[ i ])
  }
  return window.btoa( binary )
}

function arrayBufferToHex(buffer: ArrayBuffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

export async function generateKey (stringToEncrypt: string) {

  const key = await crypto.subtle.generateKey({
    name: 'RSA-OAEP',
    modulusLength: 4096,
    publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
    hash: {name: 'SHA-512'},
  }, true,
  ['encrypt', 'decrypt'])

  const encryptedUri = await crypto.subtle.encrypt({
    name: 'RSA-OAEP',
  }, key.publicKey, stringToArrayBuffer(stringToEncrypt))

  const msg = await crypto.subtle.decrypt({
    name: 'RSA-OAEP',
  }, key.privateKey, encryptedUri)

  console.log('The encrypted string is', arrayBufferToHex(encryptedUri))
  console.log(`Derypted Uri is ${arrayBufferToString(msg)}`)
}