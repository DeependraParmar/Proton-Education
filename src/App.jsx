import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoadingComponent from "./components/Loading"
import Header from "./pages/Layout/Header";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Layout/Footer";

const Home = lazy(() => import("./pages/Home"));

function App() {

  return (
    <>
    <Router>
      <Header />
      <Suspense fallback= {<LoadingComponent />}>
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
      </Suspense>



        <Toaster
          position='bottom-center'
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            // Define default options
            className: 'fontsm',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },

            // Default options for specific types
            success: {
              duration: 5000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
    <Footer />
    </Router>
    </>
  )
}

export default App
