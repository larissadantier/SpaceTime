import decode from 'jwt-decode'
import { cookies } from 'next/headers'

interface IUserProps {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser(): IUserProps {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: IUserProps = decode(token)

  return user
}
