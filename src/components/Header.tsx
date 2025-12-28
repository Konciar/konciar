import { IoIosArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"

const Header = ({ title }: { title: string }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <header className="w-full h-16 flex flex-row justify-start items-center gap-4 px-4 border-b border-gray-300">
      <IoIosArrowRoundBack className="text-4xl" onClick={handleBack} />
      <h1 className="text-lg">{title}</h1>
    </header>
  )
}

export default Header
