import EnrollStudent from './EnrollStudent'

describe("EnrollStudent", () => {

  test("Should not enroll student whitout a valid name", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "2Cleiton!",
        cpf: "473.182.500-86"
      }
    }
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error("Invalid name"))
  })

  test("Should enroll student with a valid name", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "Cleiton Ambrosini",
        cpf: "473.182.500-86"
      }
    }
    expect(enrollStudent.execute(enrollmentRequest)).toEqual(true)
  })

  test("Should not enroll student with a invalid CPF", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "Cleiton Ambrosini",
        cpf: "123.456.789-99"
      }
    }
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error("Invalid student CPF"))
  })

  test("Should enroll student with a valid CPF", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "Cleiton Ambrosini",
        cpf: "473.182.500-86"
      }
    }
    expect(enrollStudent.execute(enrollmentRequest)).toEqual(true)
  })
})