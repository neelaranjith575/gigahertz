import React from 'react'
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import CallToAction from '../container/CallToAction/CallToAction.js';
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/b2.png"
import ServiceContentPage from '../container/Services/ServiceContentPage.js';


const ManagedServices = () => {
    const mainContent = [
        "We specialize in providing comprehensive managed services tailored to meet the diverse needs of enterprise-level businesses. Our offerings include full or partial outsourcing solutions for the migration, implementation, maintenance, and upgrades of various IT infrastructure components. Whether you're looking to streamline operations, enhance security, or improve efficiency, our managed services are designed to support your strategic objectives and drive business success.",
        "Our managed services encompass a wide array of IT functions, from managing servers, networks, and databases to overseeing cloud solutions, cybersecurity, and compliance requirements. By partnering with us, you gain access to a team of seasoned IT professionals who bring extensive experience and industry knowledge to the table. This enables your organization to leverage the latest technologies and best practices without the need to invest heavily in in-house expertise. Our proactive approach includes robust backup and security measures, ensuring the seamless functioning and protection of your IT infrastructure. From data backup and disaster recovery planning to network security and threat detection, we provide comprehensive solutions that safeguard your technology environment."
    ];
    const sideContent = [
        "What sets us apart is our proactive stance, continuously monitoring and optimizing your technology environment to prevent problems before they occur. Our state-of-the-art monitoring tools enable us to detect potential issues early, allowing us to address them swiftly and efficiently. This minimizes downtime and disruptions, ensuring smooth business operations. Our managed services are fully customizable to meet your specific needs, providing a personalized approach that aligns with your unique challenges and objectives. By choosing our managed services, you free up valuable resources to focus on your core business activities, while we handle the complexities of IT management, empowering you to achieve your business goals with confidence in today's dynamic digital landscape.",
    ]
    const solutions = [
        "Proactive network monitoring and maintenance for optimal performance.",
        "End-to-end cybersecurity management for threat protection.",
        "Scalable solutions with continuous support and management.",
        "24/7 helpdesk and technical support for uninterrupted operations."
    ];
    const buttons = [
        { label: "IT INFRASTRUCTURE", url: "/it-infrastructure" },
        { label: "ENTERPRISE SOLUTIONS", url: "/enterprise-solutions" },
        { label: "RENTAL SERVICES", url: "/rental-services" },
        { label: "MANAGED SERVICES", url: "/managed-services" }
    ];

    return (
        <React.Fragment>
            <SEO title="Gigahertz || Managed Services" />
            <Header />
            <ServiceContentPage
                title="MANAGED SERVICES"
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

export default ManagedServices;
