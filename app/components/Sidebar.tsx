import Link from "next/link";
import Image from 'next/image'
import { FaDog, FaPhone, FaPowerOff, FaUser, FaUsers } from "react-icons/fa";
import { TbHome2 } from "react-icons/tb";
import image from '../../public/profilepic.jpeg'

interface SidebarProps {
  children: React.ReactNode;
}

const menu = [
  {
    icon: <TbHome2 size={24} color="#5667FF" />,
    title: 'Home',
    link: '/dashboard',
  },
  {
    icon: <FaUsers size={24} color="#5667FF" />,
    title: 'Tutores',
    link: '/dashboard/tutores',
  },
  {
    icon: <FaDog size={24} color="#5667FF" />,
    title: 'Cachorros',
    link: '/dashboard/cachorros',
  },
]

const settings = [
  {
    icon: <FaUser size={20} color="#5667FF" />,
    title: 'Perfil',
  },
  {
    icon: <FaPhone size={20} color="#5667FF" />,
    title: 'Fale conosco',
  },
  {
    icon: <FaPowerOff size={20} color="#5667FF" />,
    title: 'Sair',
  }
]

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="flex">
      <div className="fixed w-60 p-4 h-[calc(100%_-2rem)] bg-white  overflow-auto rounded-[1rem] m-4 shadow-lg">
        <div className="flex flex-col">
          <div className="flex gap-4 items-center mb-10 mt-5">
            <Image
              className="w-[42px] h-[42px] bg-gray-500 rounded-lg"
              src={image}
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <div>
              <span className="text-sm">Olá 👋</span>
              <h2>Rafael Jordão</h2>
            </div>
          </div>
          <h2 className="mb-10">Menu</h2>

          {menu.map((menu) => {
            return (
              <Link key={menu.title} className="mb-5 focus:text-[#5667FF] hover:text-[#5667FF]" href={menu.link}>
                <div className="flex gap-4 items-center">
                  {menu.icon}
                  <span>{menu.title}</span>
                </div>
              </Link>
            )
          })}

          <h2 className="mb-10 mt-5">Configurações</h2>

          {settings.map((settings) => {
            return (
              <Link key={settings.title} className="mb-5 focus:text-[#5667FF] hover:text-[#5667FF]" href="/">
                <div className="flex gap-4 items-center">
                  {settings.icon}
                  <span>{settings.title}</span>
                </div>
              </Link>
            )
          })}

        </div>
      </div>

      <div className="ml-64 w-full max-w-[1500px]">
        {children}
      </div>
    </div>
  )
}