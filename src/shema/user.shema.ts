import { object, string, TypeOf } from 'zod';

export const createUserShema = object({
  body: object({
    name: string({
      required_error: 'Name is requred'
    }),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'Password is too short'),
    passwordConfirmation: string({
      required_error: 'Password confirmation is requred'
    }),
    email: string({
      required_error: 'Email is required'
    }).email('Not a valid email'),
  }).refine((data)  => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  })
})

export type createUserInput = Omit<TypeOf <typeof createUserShema>, "body.passwordConfirmation">