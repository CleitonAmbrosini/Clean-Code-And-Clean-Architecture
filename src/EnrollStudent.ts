import { isValidName } from "./Tools/Validations"

export default class EnrrolStudent {
  constructor() {

  }

  execute(enrollmentRequest: any) {
    if(isValidName(enrollmentRequest.student.name)) return true
    throw new Error("Invalid name")
  }
}