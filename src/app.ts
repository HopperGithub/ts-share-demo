// 基本注解：变量、函数参数以及函数返回值的类型注解
const list: Array<number> = [1, 2, 3]

function len<T>(list: T[]): void {
  console.log('len', list.length)
}

enum Color {
  Red = 1,
  Green,
  Blue
}

const c: Color = Color.Green

console.log('c', c)

len(list)