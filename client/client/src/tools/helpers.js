import QRCode from 'qrcode';

export const helpers = {

};

helpers.generateQR = async (text) => {
    try {
    return await QRCode.toDataURL(text)
    } catch (err) {
      console.error(err)
    }
  };

  
helpers.encryptText = async (text) =>{

  return Buffer.from(text).toString('base64');
  }
  
  helpers.decryptText = async (text) =>{
  
  return Buffer.from(text,'base64').toString('ascii');
    }
  
