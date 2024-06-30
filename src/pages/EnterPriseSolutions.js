import React from 'react'
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import CallToAction from '../container/CallToAction/CallToAction.js';
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/S1.png"
import ServiceContentPage from '../container/Services/ServiceContentPage.js';


const EnterPriseSolutions = () => {



    const mainContent = [
        "We specialize in delivering comprehensive enterprise solutions designed to optimize your business's hardware infrastructure. Our expertise allows us to evaluate your current setup and recommend advanced configurations that align with your specific requirements and budget. By focusing on maximizing efficiency, performance, and cost-effectiveness, we ensure that your hardware investments yield the highest possible returns.",
        "Our process begins with a thorough assessment of your existing infrastructure, analyzing performance, capacity, and utilization to identify bottlenecks or inefficiencies. Based on this detailed evaluation, we recommend suitable configurations that enhance operational capabilities while staying within budget. We also provide expert guidance on migrations, server consolidation, and other aspects of infrastructure management, ensuring seamless transitions with minimal disruption to your business operations."
    ];

    const sideContent = [
        "What sets us apart is our commitment to personalized service and attention to detail. We develop tailored solutions that address your unique needs, providing end-to-end support from initial consultation to implementation and ongoing management. By leveraging cutting-edge technologies and proven methodologies, we help future-proof your infrastructure and position your business for long-term success. Partnering with us means gaining access to a wealth of knowledge and expertise, empowering your organization to thrive in a competitive market.",
    ]

    const solutions = [
        "Comprehensive network architecture for scalable connectivity.",
        "Robust cybersecurity measures for data protection.",
        "Advanced virtualization and cloud integration for flexibility.",
        "Centralized monitoring and management for operational efficiency."
    ];

    const buttons = [
        { label: "IT INFRASTRUCTURE", url: "/it-infrastructure" },
        { label: "ENTERPRISE SOLUTIONS", url: "/enterprise-solutions" },
        { label: "RENTAL SERVICES", url: "/rental-services" },
        { label: "MANAGED SERVICES", url: "/managed-services" }
    ];

    return (
        <React.Fragment>
            <SEO title="Gigahertz || Enterprise Solutions" />
            <Header />
            <ServiceContentPage
                title="ENTERPRISE SOLUTIONS"
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

export default EnterPriseSolutions;
