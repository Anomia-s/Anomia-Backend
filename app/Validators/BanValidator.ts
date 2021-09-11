import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BanValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    userId: schema.number([]),
    reason: schema.string({ trim: true }, [rules.minLength(3), rules.maxLength(1000)]),
    banType: schema.number([rules.range(1, 3)]),
    lenght: schema.number([]),
    socialCredit: schema.number(),
    admin: schema.number([
      rules.unique({
        table: 'users',
        column: 'id',
      }),
    ]),
  })

  public messages = {
    'required': 'Please enter your {{ field }}.',
    'username.minLength': 'Your username must be at least 3 characters long.',
    'username.maxLength': "Your username can't be longer than 20 characters.",
  }
}
