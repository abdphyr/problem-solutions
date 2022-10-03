function gradingStudents(grades: number[]): number[] {
  const result = []
  for (let grad of grades){
    if (grad < 38){
      result.push(grad)
    } else if (grad % 5 >= 3){
      result.push(grad - (grad % 5) + 5)
    } else {
      result.push(grad)
    }
  }
  return result
}

console.log(gradingStudents([73, 67, 38, 33]))