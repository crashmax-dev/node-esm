import dotenv from 'dotenv'
dotenv.config()

export default class FooBar {
  #foo: string
  #bar: number

  constructor(foo: string, bar: number) {
    this.#foo = foo
    this.#bar = bar
  }

  get str(): string {
    return `${this.#foo} ${this.#bar}`
  }

  get env(): string | undefined {
    return process.env['DOTENV_EXAMPLE']
  }
}