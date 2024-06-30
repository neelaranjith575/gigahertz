import React from 'react'
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/S1.png"
import ServiceContentPage from '../container/Services/ServiceContentPage';


const ItInfraStructure = () => {


    const mainContent = [
        "We are a leading provider of comprehensive IT infrastructure services and sophisticated security solutions tailored for enterprises and government entities. Our IT infrastructure services form the bedrock of seamless technological operations, offering end-to-end solutions encompassing physical hardware, software, networks, and facilities. Our dedicated team of experts ensures that every aspect of your IT infrastructure is robust, efficient, and precisely aligned with your organizational goals.",
        "Our proactive approach to monitoring and management helps minimize downtime, maximize uptime, and ensure peak performance for your critical systems and applications. We design our solutions with scalability, security, and seamless integration in mind, adapting to the ever-changing technological landscape by leveraging the latest innovations to future-proof your IT environment. Whether you require a completely new infrastructure or enhancements to your existing systems, we bring a wealth of experience and expertise to the table."
    ];

    const sideContent = [
        "In addition to our IT services, we pride ourselves on our advanced CCTV and biometric solutions. Our surveillance services deploy state-of-the-art cameras and monitoring systems with features like high-definition video recording, real-time alerts, and intelligent analytics, enabling proactive threat detection and response. Our biometric solutions offer unparalleled accuracy in identity verification and access control through fingerprint, facial recognition, and iris scanning technologies, fortifying physical security and preventing unauthorized access to sensitive areas and information.",
    ]

    const solutions = [
        "Network design and management for seamless connectivity.",
        "Data center operations ensuring data security and uptime.",
        "Comprehensive IT support and maintenance services.",
        "Secure cloud service provisioning and management."
    ];

    const buttons = [
        { label: "IT INFRASTRUCTURE", url: "/it-infrastructure" },
        { label: "ENTERPRISE SOLUTIONS", url: "/enterprise-solutions" },
        { label: "RENTAL SERVICES", url: "/rental-services" },
        { label: "MANAGED SERVICES", url: "/managed-services" }
    ];

    return (
        <React.Fragment>
            <SEO title="Gigahertz || IT Infrastructure" />
            <Header />
            <ServiceContentPage
                title="IT INFRASTRUCTURE"
                bannerImage={Banner}
                mainContent={mainContent}
                solutions={solutions}
                buttons={buttons}
                sideContent={sideContent}
            />
            <CallToAction />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default ItInfraStructure;
