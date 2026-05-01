import React from "react"
import PublicRoutes from "./routes/PublicRoutes"

const App = () => {
  return (
    <div className="bg-[#FEF6ED] w-full lg:h-screen lg:flex items-center justify-center">
      <PublicRoutes/>
    </div>
  )
}

export default React.memo(App)
