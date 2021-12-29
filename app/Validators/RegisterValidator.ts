import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(20),
      rules.unique({
        table: 'users',
        column: 'username',
      }),
    ]),
    password: schema.string({ trim: true }, [rules.minLength(8)]),
  })

  public messages = {
    'username.required': 'Username is required',
    'username.string': 'Not valid input',

    'username.minLength': 'Username has to be atleast 3 characters long',
    'username.unique': 'username is in use.',

    'password.required': 'Password is required',
    'password.minLength': 'Minimun Lenght...',
  }

  public reporter = validator.reporters.api
}
