// 引入AES源码js
import CryptoJS from 'crypto-js';

// 默认的KEY与IV如果没有给
// 秘钥：pdtfmcsfe1a8sctn
// 偏移量：dpftcmfs1e8acsnt
const key = 'pdtfmcsfe1a8sctn'; // 十六位十六进制数作为密钥
const iv = 'dpftcmfs1e8acsnt'; // 十六位十六进制数作为密钥偏移量

// 解密方法
export function Decrypt(word) {
  // 传入的key和iv需要和加密时候传入的key一致
  // 统一将传入的字符串转成UTF8编码
  const keyHex = CryptoJS.enc.Utf8.parse(key); // 秘钥
  const ivHex = CryptoJS.enc.Utf8.parse(iv); // 偏移量
  const decrypt = CryptoJS.AES.decrypt(word, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

// 加密方法
export function Encrypt(word) {
  if (typeof word === 'object') {
    // 如果传入的data是json对象，先转义为json字符串
    try {
      word = JSON.stringify(word);
    } catch (error) {
      console.log('error:', error);
    }
  }
  // 统一将传入的字符串转成UTF8编码
  const dataHex = CryptoJS.enc.Utf8.parse(word); // 需要加密的数据
  const keyHex = CryptoJS.enc.Utf8.parse(key); // 秘钥
  const ivHex = CryptoJS.enc.Utf8.parse(iv); // 偏移量
  const encrypted = CryptoJS.AES.encrypt(dataHex, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC, // 加密模式
    padding: CryptoJS.pad.Pkcs7
  });
  const encryptedVal = encrypted.ciphertext;
  return CryptoJS.enc.Base64.stringify(encryptedVal); //  返回加密后的值
}
