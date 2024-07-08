import React from 'react'
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import CallToAction from '../container/CallToAction/CallToAction.js';
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/b4.png";
import ServiceImage1 from "../assets/images/services/ITB1 (1).jpg"
import ServiceImage2 from "../assets/images/services/ITB1 (2).jpg"
import ServiceContentPage from '../container/Services/ServiceContentPage.js';


const RentalServices = () => {



    const mainContent = [
        "Gigahertz Computing stands as your premier partner for comprehensive rental services tailored to meet the diverse technology needs of enterprises. Whether you require computers, audio-visual equipment, office tools, or robust wireless and internet solutions, we have you covered. Our commitment to excellence lies in our ability to source the latest and most cutting-edge technology, ensuring that your short-term or long-term rental requirements are not just met but exceeded.",
        "In today's rapidly evolving business landscape, having access to the right technology is crucial for maintaining productivity, efficiency, and competitiveness. Gigahertz takes pride in offering a wide range of rental options, allowing enterprises to access top-of-the-line equipment without the burden of long-term commitments or hefty upfront costs. Whether you're hosting a large-scale event, setting up a temporary workspace, or simply need to augment your existing infrastructure, our rental services provide the flexibility and scalability you need to succeed. Our rental inventory includes the latest models of computers, laptops, and tablets, as well as audio-visual equipment like projectors, screens, and sound systems, plus office tools such as printers and scanners."
    ];

    const sideContent = [
        "What sets us apart is our unwavering dedication to customer satisfaction and service excellence. Our team of experts works closely with you to understand your unique requirements and recommend the best rental solutions to meet them. We handle everything from delivery and setup to technical support and maintenance, ensuring a seamless and hassle-free experience. Additionally, we constantly update our rental inventory to offer the latest and most innovative solutions available, helping your business stay ahead of the curve. With competitive pricing and customizable rental packages, Gigahertz Computing is your trusted partner in navigating the complexities of modern technology, ensuring your business thrives in today’s competitive landscape.",
    ]

    const solutions = [
        "Flexible hardware leasing options for scalable IT needs.",
        "Short-term and long-term rental agreements to fit project timelines.",
        "Comprehensive maintenance and support included with rentals.",
        "Cost-effective solutions for temporary or fluctuating IT requirements."
    ];

    const buttons = [
        { label: "IT INFRASTRUCTURE", url: "/it-infrastructure" },
        { label: "ENTERPRISE SOLUTIONS", url: "/enterprise-solutions" },
        { label: "RENTAL SERVICES", url: "/rental-services" },
        { label: "MANAGED SERVICES", url: "/managed-services" }
    ];


    const mobileButtons = [
        { label: "IT ", url: "/it-infrastructure" },
        { label: "ENTERPRISE ", url: "/enterprise-solutions" },
        { label: "RENTAL ", url: "/rental-services" },
        { label: "MANAGED ", url: "/managed-services" }
    ];

    const serviceImage1 = ServiceImage1
    const serviceImage2 = ServiceImage2

    return (
        <React.Fragment>
            <SEO title="Gigahertz || Rental Services" />
            <Header />
            <ServiceContentPage
                title="RENTAL SERVICES"
                bannerImage={Banner}
                mainContent={mainContent}
                solutions={solutions}
                buttons={buttons}
                sideContent={sideContent}
                mobileButtons={mobileButtons}
                serviceImage1={serviceImage1}
                serviceImage2={serviceImage2}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default RentalServices;
