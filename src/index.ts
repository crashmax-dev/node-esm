import 'dotenv/config'

export default class FooBar {
  #foo: string
  #bar: number

  constructor(foo: string, bar: number) {
    this.#foo = foo
    this.#bar = bar
  }

  get foobar(): string {
    return `${this.#foo} ${this.#bar}`
  }
}
