import {
  isValidName,
  isValidCPF
 } from "./Tools/Validations"

export default class EnrrolStudent {
  constructor() {

  }

  execute(enrollmentRequest: any) {
    if(isValidName(enrollmentRequest.student.name) && isValidCPF(enrollmentRequest.student.cpf)) return true
    if(!isValidName(enrollmentRequest.student.name)) throw new Error("Invalid name")
    if(!isValidCPF(enrollmentRequest.student.cpf)) throw new Error("Invalid student CPF")
  }
}