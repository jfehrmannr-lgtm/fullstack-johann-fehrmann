import Card from "./components/Card/Card"
import React from "react"

const App = () => {
  return (
    <div className="bg-[#FEF6ED] w-full h-screen flex items-center justify-center">
      <Card/>
    </div>
  )
}

export default React.memo(App)
