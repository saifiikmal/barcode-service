import { success, notFound, error } from '../services/response'
import barcode from 'barcode'

export const generate = async (req, res) => {
  try {
    if (!req.body.text) {
      throw new Error('Missing text')
    }

    let type = req.body.type || 'code39'
    let width = req.body.width || 400
    let height = req.body.height || 100

    var code = barcode(type, {
      data: req.body.text,
      width,
      height,
    });

    code.getBase64(function (err, imgsrc) { 
      console.log({
        imgsrc,
        err
      })
      // if (err) {
      //   console.log(err)
      //   throw err
      // }
      console.log({imgsrc})
      success(res, {
        message: 'Barcode successfully generated',
        barcode: imgsrc
      })
    })
   
  } catch (err) {
    console.log(err)
    error(res, err)
  }
}