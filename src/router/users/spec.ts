/**
 * GET /users/
 * @tags Users
 * @summary Returns all users existing in kuaaa.net user DB
 * @return {object} 200 - Returns json containing all users
 * @return {object} 401 - Returns error message for unauthorized request
 * @return {object} 403 - Returns error message for forbidden request of given users
 * @return {object} 500 - Returns error message for internal server error
 * @example response - 200 - List of users
 * [
 *  {
 *      "uid": "5ef69f7b-a27e-4b8c-b7f4-c865cd79c35a",
 *      "id": "wkkjdkkwk778",
 *      "password": "sha512:h7IpzeEKm/9Tm1UmXwQrdw==:123456:512:iR8v2BQ/G4qWykMFmb1YSpAs5y7f0+C4SZ0g40HP+gZ905xH2SmAr68Gh6rH659Jm8hvzuYqBXmPhzNJwcPUeytSOvDJUlg1t7NN6AIdjKp0CiCjQKsnpXDWBktdlyFyur/yvXQ9xO9qpuUua89iQaaH290ql5jr0Ve/eNaubuh5QLcc7fAxXeupkJTpmz+IYVRoB33WsivBnGVQ5phgPFTESPWmYHBpFyl7DcUsWYRGg4co4rHPwALl7xCrjp7A3AuSCWIvrSHozB1c5cdh/ySSH1KQrq5j6ez5GeOuf4DJvYOFhsLQBkkKUwWwV77GXtSasJloMQSOP+T0rMac7UrMuk4DsBL2F4M7sN0qYKrMpR4CmpM0Iy1qChrwb85IQ3tXf7ImJNXW2iZSFew9BDZyaIIhBzExjzGvsehsV6wgiv1dkL6PHSDmcJcJuNJMiqo2T4NF7c2kfLcERipjJMKMEwbjJsRY7LctsqB6MVVPVy97mtMJ/wGGumt0J6SDC+EZa+mESD4nC7pAE236MLnVRuqMftPBQyXE9OlivrU+b1icrudWYCilD8WMpvHU6uxCBBpr6PY+3C5m6kiWypXXUsSXF/gkNstkvNY50VK/H+WKonatS4XLvxkhAD3CxK+frBoncaAAMATpeObumO5waCysKfDcboByaC1YMFI=",
 *      "name": "BlackCow",
 *      "sid": "2018320201",
 *      "belong": "Computer Science & Engineering",
 *      "email": "wkkjdkkwk778@korea.ac.kr",
 *      "isActive": true,
 *      "createdAt": "2021-07-25T09:10:51.000Z",
 *      "updatedAt": "2021-07-25T09:10:51.000Z"
 *  },
 *  {
 *      "uid": "8f84a27a-23f0-42b2-a192-71837e967e70",
 *      "id": "sskdibmkm5547",
 *      "password": "sha512:EbWfB/3Kov79OoxV+6NLCQ==:123456:512:r2NeBL8Meev6jsyXcofp5bYM7UMUVs1j2Daqr2+6v+ed5/IIrlfXmnznq2plnI4CdZd03ONNykDeR6Io4CNXF0MFHkbs5ycmnAHJAb5H1B9tPSJo0+ZO72qur8tq0LPQNhkTcF6v2uZF71tFzXUQpd7XsuqWk+HEod6aaKmeVng0u4yYzQEKyqC1ZJAOJGTvlTTQyZSpF5H9HLcCsEwfe9mZEqFtHXXVw8GqAvq8vOE25raBSnVLnqlue7jvAw1HXfsdgDlgqZTid2RcvsfiKdWY3bgeVRBf1USM67UblVvoT9Xzl9AGGFvkbOAJSgRevfMYwz5FdjqtUPXxolCrm1TlgaGLPKuW0FZTp5YZq22sOcVrgWZEj1X1GbIqJSYPN35ozXXqz7F77aIQ522gCgOsTjcoVz3ZkTsByYbGAnlsieJZK0OZnICfz0IFvq8Xso5GdTbNvc8ZOLgjniZA/sYIrv4eTZDeH2zKPohICv4RbzlTqHk4KdFVhxdyU5wKc8E8L9dwNj167sEiPyP7N5p5SYlRWzqJ1Y1ME4NvywB5+73zmWwuBYI8FaeT/v/7mc7hZGoIXAAIuK/JohnVOLP1TCLd92mYFDYmLp9MlvwDubPom0ZVt/ftl9JzxH493HmzIPylhrFLvHyu3Eb0F250AnrKJjf6uDalBm3lVoE=",
 *      "name": "WhiteCow",
 *      "sid": "2018320111",
 *      "belong": "Computer Science & Engineering",
 *      "email": "sskdibmkm5547@korea.ac.kr",
 *      "isActive": true,
 *      "createdAt": "2021-07-25T09:11:35.000Z",
 *      "updatedAt": "2021-07-25T09:11:35.000Z"
 *  }
 * ]
 * @example response - 401 - Unauthorized
 * {
 *  "msg":"Unauthorized request"
 * }
 * @example response - 403 - Forbidden
 * {
 *  "msg":"Forbidden request"
 * }
 * @example response - 500 - Internal Server error
 * {
 *  "msg":"Something went wrong..."
 * }
 */