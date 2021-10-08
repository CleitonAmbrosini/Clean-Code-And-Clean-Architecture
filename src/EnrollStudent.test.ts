import EnrollStudent from './EnrollStudent'

describe("EnrollStudent", () => {

  test("Should not enroll student whitout a valid name", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "2Cleiton!"
      }
    }
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error("Invalid name"))
  })

  test("Should enroll student with a valid name", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "Cleiton Ambrosini"
      }
    }
    expect(enrollStudent.execute(enrollmentRequest)).toEqual(true)
  })

})