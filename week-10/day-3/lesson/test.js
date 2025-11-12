import jwt from "jsonwebtoken";

/*
   * @param payload - {id:1234, name:jhon}
    * @package token secret - '!$$#%Ffsdf667%'
    * @param experition time = {expireIn: 86400, '60s','1d', '2days' }
    -other options: 
    ('2 days')  // 172800000
    ('1d')   // 86400000
    ('10h')  // 36000000
    ('2.5 hrs') // 9000000
    ('2h')      // 7200000
    ('1m')      // 60000
    ('5s')      // 5000
    ('1y')      // 31557600000
    ('-3 days') // -259200000
    ('-1h')     // -3600000

*/

const token = jwt.sign(
  { userid: 1234, name: "jhon" },
  "ewrsgsfijoij3424398uwfkjnsad", //the Secret
  { expiresIn: "60s" }
);

console.log(token);
const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEyMzQsIm5hbWUiOiJqaG9uIiwiaWF0IjoxNzYyOTM0Nzk2LCJleHAiOjE3NjI5MzQ4NTZ9.rFONex6h7FjmToq777zj017mn1Tmw1F_mI3N4oLBpxw";

jwt.verify(
  token,
  "ewrsgsfijoij3424398uwfkjnsad", //the Secret
  (err, decoded) => {
    if (err) {
      console.log("Err=>", err.message);
    }
    console.log("decoded=>", decoded);
  }
);
