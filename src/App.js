import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
const HomeOne = lazy(() => import("./pages/HomeOne"));
const HomeTwo = lazy(() => import("./pages/HomeTwo"));
const HomeThree = lazy(() => import("./pages/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const Careers = lazy(() => import("./pages/Careers"));
const CareersDetails = lazy(() => import("./pages/CareersDetail"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const BlogClassic = lazy(() => import("./pages/BlogClassic"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const BlogDetailsContainer = lazy(() => import("./container/BlogGrid/BlogDetailsContainer"));
const CareerInfo = lazy(() => import("./container/Careers/CarrerrInfo"));
const CareerDetail = lazy(() => import("./pages/CareersDetail"));
const ItInfraStructure = lazy(() => import("./pages/ItInfraStructure"));
const EnterPriseSolutions = lazy(() => import("./pages/EnterPriseSolutions"));
const RentalServices = lazy(() => import("./pages/RentalServices"));
const ManagedServices = lazy(() => import("./pages/ManagedServices"));
const BlogCategories = lazy(() => import("./pages/BlogCategories"));
const BlogTag = lazy(() => import("./pages/BlogTag"));
const Contact = lazy(() => import("./pages/Contact"));
const Thankyou = lazy(() => import("./pages/Thankyou"));
const FixYourPc = lazy(() => import("./pages/FixYourPc"));
const FixForm = lazy(() => import("./pages/FixForm"));


function App() {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    });
    AOS.refresh();

  }, [])
  return (
    <Router>
      <NavScrollTop>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<HomeOne />} />
            <Route path={`${process.env.PUBLIC_URL + "/home-one"}`} element={<HomeOne />} />
            <Route path={`${process.env.PUBLIC_URL + "/home-two"}`} element={<HomeTwo />} />
            <Route path={`${process.env.PUBLIC_URL + "/home-three"}`} element={<HomeThree />} />
            <Route path={`${process.env.PUBLIC_URL + "/about"}`} element={<About />} />
            <Route path={`${process.env.PUBLIC_URL + "/service"}`} element={<Service />} />
            <Route path={`${process.env.PUBLIC_URL + "/work"}`} element={<Work />} />
            <Route path={`${process.env.PUBLIC_URL + "/work-details/:id"}`} element={<WorkDetails />} />
            <Route path={`${process.env.PUBLIC_URL + "/blogs"}`} element={<BlogGrid />} />
            <Route path={`${process.env.PUBLIC_URL + "/careers"}`} element={<Careers />} />
            {/* <Route path={`${process.env.PUBLIC_URL + "/careers-details/:id"}`} element={<CareerInfo />} />
             */}
            <Route path={`${process.env.PUBLIC_URL + "/careers-details/:id"}`} element={<CareerDetail />} />
            <Route path={`${process.env.PUBLIC_URL + "/blog-classic"}`} element={<BlogClassic />} />
            <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} element={<BlogTag />} />
            <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} element={<BlogCategories />} />
            <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} element={<BlogDetailsContainer />} />
            <Route path={`${process.env.PUBLIC_URL + "/blog/:slug"}`} element={<BlogDetails />} />
            <Route path={`${process.env.PUBLIC_URL + "/it-infrastructure"}`} element={<ItInfraStructure />} />
            <Route path={`${process.env.PUBLIC_URL + "/enterprise-solutions"}`} element={<EnterPriseSolutions />} />
            <Route path={`${process.env.PUBLIC_URL + "/rental-services"}`} element={<RentalServices />} />
            <Route path={`${process.env.PUBLIC_URL + "/managed-services"}`} element={<ManagedServices />} />
            <Route path={`${process.env.PUBLIC_URL + "/contact"}`} element={<Contact />} />
            <Route path={`${process.env.PUBLIC_URL + "/thank-you"}`} element={<Thankyou />} />
            <Route path={`${process.env.PUBLIC_URL + "/pcaas-service"}`} element={<FixYourPc />} />
            <Route path={`${process.env.PUBLIC_URL + "/fix-your-pc-form"}`} element={<FixForm />} />
          </Routes>
        </Suspense>
      </NavScrollTop>
    </Router>
  );
}

export default App;
