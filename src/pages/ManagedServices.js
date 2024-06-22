import React from 'react'
import SEO from '../components/SEO.jsx';
import Header from "../partials/header/Header.jsx";
import CallToAction from '../container/CallToAction/CallToAction.js';
import Footer from '../container/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop.jsx';
import Banner from "../assets/images/services/S1.png"
import ServiceContentPage from '../container/Services/ServiceContentPage.js';


const ManagedServices = () => {
    const mainContent = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Nulla aliquet enim tortor at auctor. Morbi enim nunc faucibus a pellentesque sit. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Sit amet consectetur adipiscing elit duis tristique. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas purus viverra accumsan in nisl nisi. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Nulla aliquet enim tortor at auctor. Morbi enim nunc faucibus a pellentesque sit. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Sit amet consectetur adipiscing elit duis tristique. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas purus viverra accumsan in nisl nisi. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus."
    ];
    const sideContent = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis molestie. Nulla aliquet enim tortor at auctor. Morbi enim nunc faucibus a pellentesque sit. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Sit amet consectetur adipiscing elit duis tristique. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas purus viverra accumsan in nisl nisi. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus.",
    ]
    const solutions = [
        "Volutpat maecenas volutpat blandit aliquam",
        "Volutpat maecenas volutpat blandit aliquam",
        "Volutpat maecenas volutpat blandit aliquam",
        "Volutpat maecenas volutpat blandit aliquam"
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
