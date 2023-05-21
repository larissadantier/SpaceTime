import { getUser } from '../lib/auth'
import Image from 'next/image'

const Profile = () => {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        alt="Perfil do usuário"
        width={40}
        height={40}
        className="h-10 w-10 rounded"
      />
      <p className="max-w-[170px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}

export default Profile
