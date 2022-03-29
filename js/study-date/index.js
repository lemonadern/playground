const moment = require("moment")
const dateFns = require('date-fns')
const { ja } = require("date-fns/locale")

const stringDate = '2022-02-28' 

// const md = moment(stringDate, true)

// console.log(md)
// console.log(md.isValid())

// console.log(dateFns.parse(stringDate, 'yyyy-MM-dd'))

// console.log(new Date())
// d = dateFns.format(new Date(), 'yyyy/MM/dd HH:mm')

// console.log(d)
// const f = dateFns.parse('2022-02-27', 'yyyy-MM-dd', new Date())
// console.log(f)
// console.log(dateFns.isValid('2022-02-29'))


// d = dateFns.parseISO(stringDate)
// console.log(d)

// const now = dateFns.format(
//     dateFns.parse(stringDate, 'yyyy-MM-dd', new Date()),
//     'yyyy年MM月dd日 HH時mm分',
//     { locale: ja }
//   )
// console.log(now)

// const date = dateFns.parse('2022-02-28', 'yyyy-MM-dd', new Date())
// const v = dateFns.isValid(date)
// console.log(date)
// console.log(v)

// const b = dateFns.isValid(dateFns.parse('2022-02-29', 'yyyy-MM-dd', new Date()))
// console.log(b)

dateFns.isValid(new Date('2022-13-01')) //false
dateFns.isValid(new Date('2022-01-32')) //false
dateFns.isValid(new Date('2022-02-29')) //true
dateFns.isValid(new Date('2022-04-31')) //true

const b = 
dateFns.isValid(dateFns.parse('2022-04-31', 'yyyy-MM-dd', new Date()))
console.log(b)