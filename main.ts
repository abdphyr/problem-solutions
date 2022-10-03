
function countApplesAndOranges(a: number, s: number, t: number, b: number, apples: number[], oranges: number[]): void{
  const d1 = s - a // from apple tree to house left
  const d2 = t - a // from apple tree to house right
  const c1 = b - t // from orange tree to house right
  const c2 = b - s // from orange tree to house left
  const applesNumber = apples.filter((appleX) => appleX > 0 && appleX >= d1 && appleX <= d2).length
  const orangesNumber = oranges.filter((orangeX) => orangeX < 0 && orangeX <=-c1 && orangeX >= -c2).length
  console.log(applesNumber)
  console.log(orangesNumber)
}