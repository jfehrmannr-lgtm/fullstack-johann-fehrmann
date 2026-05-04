import React from "react"
import PublicRoutes from "./routes/PublicRoutes"
import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div className="bg-[#FEF6ED] w-full lg:h-screen lg:flex items-center justify-center">
      <Toaster position="top-right"/>
      <PublicRoutes/>
    </div>
  )
}

export default React.memo(App)
