function Card(id,name, surname, expDate,pinCode,accNumber,balance) {
this.id=id
this.name=name
this.surname=surname
this.expDate=expDate
this.pinCode=pinCode
this.accNumber=accNumber
this.balance=balance
this.CToC = function (recCard,amount) {
if (recCard instanceof Card && this.balance >= amount) {
this.balance -= amount
recCard.balance += amount
}
}
}