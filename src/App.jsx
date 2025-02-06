import { Navbar, Sidebar, MainContent } from "./Components/index"



function App() {

  return (
    <>
    <Navbar />    
    <div style={{display: "flex"}}>
      <Sidebar />
      <MainContent />
    </div>
    </>
  )
}

export default App
