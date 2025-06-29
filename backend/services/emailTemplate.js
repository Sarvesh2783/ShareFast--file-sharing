module.exports = ({ emailFrom, downloadLink, size, expires }) => {
    return `
        <!doctype html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>Simple Transactional Email</title>
            <style>
                @media only screen and (max-width: 620px) {
                    table[class=body] h1 {
                        font-size: 28px !important;
                        margin-bottom: 10px !important;
                    }
                    table[class=body] p,
                    table[class=body] ul,
                    table[class=body] ol,
                    table[class=body] td,
                    table[class=body] span,
                    table[class=body] a {
                        font-size: 16px !important;
                    }
                    table[class=body] .wrapper,
                    table[class=body] .article {
                        padding: 10px !important;
                    }
                    table[class=body] .content {
                        padding: 0 !important;
                    }
                    table[class=body] .container {
                        padding: 0 !important;
                        width: 100% !important;
                    }
                    table[class=body] .main {
                        border-left-width: 0 !important;
                        border-radius: 0 !important;
                        border-right-width: 0 !important;
                    }
                    table[class=body] .btn table {
                        width: 100% !important;
                    }
                    table[class=body] .btn a {
                        width: 100% !important;
                    }
                    table[class=body] .img-responsive {
                        height: auto !important;
                        max-width: 100% !important;
                        width: auto !important;
                    }
                }

                @media all {
                    .ExternalClass {
                        width: 100%;
                    }
                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                        line-height: 100%;
                    }
                    .apple-link a {
                        color: inherit !important;
                        font-family: inherit !important;
                        font-size: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                        text-decoration: none !important;
                    }
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
                    .btn-primary table td:hover {
                        background-color: #34495e !important;
                    }
                    .btn-primary a:hover {
                        background-color: #34495e !important;
                        border-color: #34495e !important;
                    }
                }
            </style>
        </head>
        <body style="background-color: #f6f6f6; font-family: sans-serif; font-size: 14px; line-height: 1.4; margin: 0; padding: 0;">
            <table class="body" style="width: 100%; background-color: #f6f6f6;">
                <tr>
                    <td>&nbsp;</td>
                    <td class="container" style="display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;">
                        <div class="content" style="max-width: 580px; padding: 10px; margin: 0 auto;">
                            <span class="preheader" style="display: none; visibility: hidden;">This is preheader text. Some clients will show this text as a preview.</span>
                            <table class="main" style="width: 100%; background: #ffffff; border-radius: 3px;">
                                <tr>
                                    <td class="wrapper" style="padding: 20px;">
                                        <table style="width: 100%;">
                                            <tr>
                                                <td>
                                                    <p>Hi there,</p>
                                                    <p><b>${emailFrom}</b> has shared a file with you.</p>
                                                    <p>${size} in total ・ Expires in ${expires}</p>
                                                    <table class="btn btn-primary" style="width: 100%;">
                                                        <tr>
                                                            <td align="left" style="padding-bottom: 15px;">
                                                                <table style="width: auto;">
                                                                    <tr>
                                                                        <td style="background-color: #3498db; border-radius: 5px; text-align: center;">
                                                                            <a href="${downloadLink}" target="_blank" style="display: inline-block; background-color: #3498db; color: #ffffff; border: solid 1px #3498db; border-radius: 5px; padding: 12px 25px; font-size: 14px; font-weight: bold; text-decoration: none;">Download file</a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <p>Thank you for using ShareFast service.</p>
                                                    <p>Good luck! Hope it works.</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- START FOOTER -->
                            <div class="footer" style="text-align: center; width: 100%; margin-top: 10px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td class="content-block" style="padding: 10px 0; font-size: 12px; color: #999999; text-align: center;">
                                            Want to share a file? <a href="http://localhost:3000" style="text-decoration: underline; color: #999999;">ShareFast</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block powered-by" style="padding: 10px 0; font-size: 12px; color: #999999; text-align: center;">
                                            Powered by <a href="#" style="color: #999999; text-decoration: none;">Sarvesh Charpe</a>.
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <!-- END FOOTER -->
                        </div>
                    </td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </body>
        </html>
    `;
}
