// /**
//  * @param {string[]} emails
//  * @return {number}
//  */

var numUniqueEmails = function (emails) {
  let uniq = new Set(emails.map(email => {
    return `${email.split('@')[0].split('+')[0].split('.').join('')}` + `${email.split('@')[1]}`
  }))

  return uniq.size
};