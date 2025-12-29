import { useNavigate } from "react-router-dom"
import { MdCheckCircleOutline } from "react-icons/md"
import type { TOnly } from "../types"

const SuccessPage = ({ t }: TOnly) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
        <MdCheckCircleOutline className="text-green-500 text-8xl" />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-900">{t("requestDetails.success.title") || "Request Sent!"}</h1>
          <p className="text-gray-500 leading-relaxed">{t("requestDetails.success.description") || "Our concierge will review your request and contact you via email shortly."}</p>
        </div>

        <button onClick={() => navigate("/")} className="mt-4 px-8 py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all">
          {t("requestDetails.success.button") || "Back to Home"}
        </button>
      </div>
    </div>
  )
}

export default SuccessPage
