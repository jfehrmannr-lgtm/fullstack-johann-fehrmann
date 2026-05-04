import React from "react"
import PublicRoutes from "./routes/PublicRoutes"
import { Toaster } from "react-hot-toast"
import Translation from "./components/Transaltion/Translation"

const App = () => {
  return (
    <div className="bg-[#FEF6ED] w-full lg:h-screen lg:flex items-center justify-center relative">
      <Toaster position="top-right"/>
      <PublicRoutes/>
      <div className="absolute bottom-0 right-0 p-8">
        <Translation/>
      </div>
    </div>
  )
}

export default React.memo(App)
