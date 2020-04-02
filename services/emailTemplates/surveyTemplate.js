// Template taken from https://beefree.io
const keys = require("../../config/keys");

module.exports = survey => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width" name="viewport"/>
  <!--[if !mso]><!-->
  <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
  <!--<![endif]-->
  <title></title>
  <!--[if !mso]><!-->
  <!--<![endif]-->
  <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors=true] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
  <style id="media-query" type="text/css">
      @media (max-width: 770px) {

        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col>div {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num8 {
          width: 66% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #fafafa;">
  <!--[if IE]><div class="ie-browser"><![endif]-->
  <table bgcolor="#fafafa" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fafafa; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td style="word-break: break-word; vertical-align: top;" valign="top">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#fafafa"><![endif]-->
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:transparent;width:750px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <div class="mobile_hide">
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="20" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 20px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="20" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #e37536;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#e37536;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:#e37536"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:#e37536;width:750px; border-top: 0px solid #FFFFFF; border-left: 0px solid #FFFFFF; border-bottom: 0px solid #FFFFFF; border-right: 0px solid #FFFFFF;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid #FFFFFF; border-left:0px solid #FFFFFF; border-bottom:0px solid #FFFFFF; border-right:0px solid #FFFFFF; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: sans-serif"><![endif]-->
  <div style="color:#555555;font-family:Raleway, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <div style="font-size: 14px; line-height: 1.2; color: #555555; font-family: Raleway, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 17px;">
  <p style="font-size: 72px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 86px; margin: 0;"><span style="font-size: 72px;">Emaily</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #e37536;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#e37536;background-image:url("https://lh3.googleusercontent.com/proxy/LmHhOONAzkCBaoTFbRmea46IU87FRTnLmTb7cJiggxstDx98-zCRjKmZ8EoW5aT8d0AtIoRTiTeW3DiKJScuwSYBIY8RPMfkFMx5jpIrcj-gCyo");background-position:top left;background-repeat:no-repeat">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:#e37536"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:#e37536;width:750px; border-top: 0px solid #FFFFFF; border-left: 0px solid #FFFFFF; border-bottom: 0px solid #FFFFFF; border-right: 0px solid #FFFFFF;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:10px; padding-bottom:10px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid #FFFFFF; border-left:0px solid #FFFFFF; border-bottom:0px solid #FFFFFF; border-right:0px solid #FFFFFF; padding-top:10px; padding-bottom:10px; padding-right: 10px; padding-left: 10px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 0px; font-family: sans-serif"><![endif]-->
  <div style="color:#ffffff;font-family:Raleway, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
  <div style="font-size: 14px; line-height: 1.2; font-family: Raleway, Trebuchet MS, Helvetica, sans-serif; color: #ffffff; mso-line-height-alt: 17px;">
  <p style="font-size: 58px; line-height: 1.2; word-break: break-word; text-align: center; font-family: inherit; mso-line-height-alt: 70px; margin: 0;"><span style="font-size: 58px;"><strong>I'd like your input</strong></span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px; font-family: sans-serif"><![endif]-->
  <div style="color:#ffffff;font-family:Raleway, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <div style="font-size: 14px; line-height: 1.2; color: #ffffff; font-family: Raleway, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 17px;">
  <p style="font-size: 34px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 41px; margin: 0;"><span style="font-size: 34px;">Please answer the following question</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #e37536;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#e37536;background-image:url("https://lh3.googleusercontent.com/proxy/LmHhOONAzkCBaoTFbRmea46IU87FRTnLmTb7cJiggxstDx98-zCRjKmZ8EoW5aT8d0AtIoRTiTeW3DiKJScuwSYBIY8RPMfkFMx5jpIrcj-gCyo");background-position:center top;background-repeat:no-repeat">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:#e37536"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:#e37536;width:750px; border-top: 0px solid #FFFFFF; border-left: 0px solid #FFFFFF; border-bottom: 0px solid #FFFFFF; border-right: 0px solid #FFFFFF;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid #FFFFFF; border-left:0px solid #FFFFFF; border-bottom:0px solid #FFFFFF; border-right:0px solid #FFFFFF; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Image" border="0" class="center autowidth" src="https://www.zeppy.my/image/zeppy/image/data/all_product_images/product-1088/TERMINUS_URBAN_TODD_Backpack-Style_Diaper_Bag_for_Parents_Travelling_with_Toddlers_%28Black%29_3.jpg" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 655px; display: block;" title="Image" width="655"/>
  <!--[if mso]></td></tr></table><![endif]-->
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #4a5a89;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#4a5a89;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:#4a5a89"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:#4a5a89;width:750px; border-top: 0px solid #FFFFFF; border-left: 0px solid #FFFFFF; border-bottom: 0px solid #FFFFFF; border-right: 0px solid #FFFFFF;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid #FFFFFF; border-left:0px solid #FFFFFF; border-bottom:0px solid #FFFFFF; border-right:0px solid #FFFFFF; padding-top:0px; padding-bottom:0px; padding-right: 15px; padding-left: 15px;">
  <!--<![endif]-->
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 25px; padding-left: 20px; padding-top: 10px; padding-bottom: 10px; font-family: sans-serif"><![endif]-->
  <div style="color:#ffffff;font-family:Raleway, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:20px;">
  <div style="line-height: 1.2; font-size: 12px; color: #ffffff; font-family: Raleway, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 14px;">
  <p style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 22px; mso-line-height-alt: 26px; margin: 0;"><span style="font-size: 22px;">${
    survey.body
  }</span></p>
  </div>
  </div>
  <!--[if mso]></td></tr></table><![endif]-->
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #4a5a89;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:#4a5a89;background-image:url("https://t4.ftcdn.net/jpg/02/93/91/35/240_F_293913556_2ntcSDzOWuu1OuJQ89ergkw01R6YraHk.jpg");background-position:top center;background-repeat:no-repeat">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:#4a5a89"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:#4a5a89;width:750px; border-top: 0px solid #FFFFFF; border-left: 0px solid #FFFFFF; border-bottom: 0px solid #FFFFFF; border-right: 0px solid #FFFFFF;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:10px; padding-bottom:60px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid #FFFFFF; border-left:0px solid #FFFFFF; border-bottom:0px solid #FFFFFF; border-right:0px solid #FFFFFF; padding-top:10px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${
    keys.redirectDomain
  }/api/surveys/${
    survey.id
  }/yes" style="height:43.5pt; width:147pt; v-text-anchor:middle;" arcsize="87%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#4a5a89; font-family:sans-serif; font-size:24px"><![endif]--><a href="${
    keys.redirectDomain
  }/api/surveys/${
    survey.id
  }/yes" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #4a5a89; background-color: #ffffff; border-radius: 50px; -webkit-border-radius: 50px; -moz-border-radius: 50px; width: auto; width: auto; border-top: 1px solid #ffffff; border-right: 1px solid #ffffff; border-bottom: 1px solid #ffffff; border-left: 1px solid #ffffff; padding-top: 5px; padding-bottom: 5px; font-family: Raleway, Trebuchet MS, Helvetica, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:40px;padding-right:40px;font-size:24px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 24px; line-height: 48px;" style="font-size: 24px; line-height: 48px;"><strong>Yes</strong></span></span></span></a>
  <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
  </div>
  <div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${
    keys.redirectDomain
  }/api/surveys/${
    survey.id
  }/no" style="height:43.5pt; width:141.75pt; v-text-anchor:middle;" arcsize="87%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#4a5a89; font-family:sans-serif; font-size:24px"><![endif]--><a href="${
    keys.redirectDomain
  }/api/surveys/${
    survey.id
  }/no" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #4a5a89; background-color: #ffffff; border-radius: 50px; -webkit-border-radius: 50px; -moz-border-radius: 50px; width: auto; width: auto; border-top: 1px solid #ffffff; border-right: 1px solid #ffffff; border-bottom: 1px solid #ffffff; border-left: 1px solid #ffffff; padding-top: 5px; padding-bottom: 5px; font-family: Raleway, Trebuchet MS, Helvetica, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:40px;padding-right:40px;font-size:24px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 24px; line-height: 48px;" style="font-size: 24px; line-height: 48px;"><strong>No</strong></span></span></span></a>
  <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
  </div>
  <div class="mobile_hide">
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="30" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 30px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="30" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:transparent;width:750px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="0" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <div style="background-color:transparent;">
  <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 750px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
  <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:750px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
  <!--[if (mso)|(IE)]><td align="center" width="750" style="background-color:transparent;width:750px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
  <div class="col num12" style="min-width: 320px; max-width: 750px; display: table-cell; vertical-align: top; width: 750px;">
  <div style="width:100% !important;">
  <!--[if (!mso)&(!IE)]><!-->
  <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
  <!--<![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px;" valign="top">
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" height="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;" valign="top" width="100%">
  <tbody>
  <tr style="vertical-align: top;" valign="top">
  <td height="0" style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (!mso)&(!IE)]><!-->
  </div>
  <!--<![endif]-->
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
  </div>
  </div>
  </div>
  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  </td>
  </tr>
  </tbody>
  </table>
  <!--[if (IE)]></div><![endif]-->
  </body>
  </html>

  `;
};
