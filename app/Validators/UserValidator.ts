import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(20),
      rules.regex(/^[0-9A-Za-z](_(?!_)|[0-9A-Za-z]){1,20}[0-9A-Za-z]$/),
      rules.unique({
        table: 'users',
        column: 'username',
        caseInsensitive: true,
      }),
    ]),
    email: schema.string({ trim: true }, [rules.email()]),
    password: schema.string({ trim: true }, [rules.minLength(8), rules.maxLength(100)]),
  })

  public messages = {
    'required': 'Please enter your {{ field }}.',
    'username.minLength': 'Your username must be at least 3 characters long.',
    'username.maxLength': "Your username can't be longer than 20 characters.",
  }
}
