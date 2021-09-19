/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "🤖 *Public Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🚀 *Public Bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🤖 *Public Bot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
