import QRCode from 'qrcode';

export const helpers = {

};

helpers.generateQR = async (text) => {
    try {
    return await QRCode.toDataURL(text)
    // console.log('la url', url);
    } catch (err) {
      console.error(err)
    }
  };
