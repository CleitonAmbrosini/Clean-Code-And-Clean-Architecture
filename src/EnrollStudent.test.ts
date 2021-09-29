import EnrollStudent from './EnrollStudent'

describe("EnrollStudent", () => {

  test("Should not enroll student whitout a valid name", () => {
    const enrollStudent = new EnrollStudent
    const enrollmentRequest = {
      student: {
        name: "Ana"
      }
    }
    expect(() => enrollStudent.execute(enrollmentRequest)).toThrow(new Error("Invalid name"))
  })

})