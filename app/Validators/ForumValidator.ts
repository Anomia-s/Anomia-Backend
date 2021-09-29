import { rules, schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ForumValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.minLength(3), rules.maxLength(20)]),
    body: schema.string({ trim: true }, [rules.minLength(5), rules.maxLength(3200)]),
  })

  public messages = {
    'required': 'Please enter your {{ field }}.',
    'title.minLength': 'Title username must be at least 3 characters long.',
    'title.maxLength': "Title can't be longer than 20 characters.",
    'body.mingLenght': 'Body needs 5 characters or more.',
    'body.maxLenght': 'Body allows max of 3200 characters.',
  }
}
