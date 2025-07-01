import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";
import { FaCode } from "react-icons/fa6";
import ToggleTheme from "../toggleTheme/ToggleTheme";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY; // To track the last scroll position

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    document.getElementById(link).scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const scrollPosition = window.scrollY;

    if (scrollPosition > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    lastScrollY = scrollPosition; // Update last scroll position

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);

      if (sectionElement) {
        const sectionOffsetTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        // Check if the current scroll position is within the section
        if (
          scrollPosition >= sectionOffsetTop - 60 && // Adjust based on your navbar height
          scrollPosition < sectionOffsetTop + sectionHeight - 60 // Adjust for the navbar height
        ) {
          setActiveLink(section);
        }
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid className="text-center ">
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className={`custom-navbar ${
          isVisible ? "visible" : "hidden"
        } mx-4 mx-md-5`}
      >
        <Container className="text-center ">
          <Navbar.Brand href="/" className="navbar-logo">
            <div className="d-flex align-items-center gap-1 gap-sm-2 ">
              <FaCode />
              DAR$HAN
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {["home", "about", "skills", "projects", "contact"].map(
                (link) => (
                  <Nav.Link
                    key={link}
                    // href={`#${link}`}
                    className={activeLink === link ? "active" : ""}
                    onClick={() => handleSetActiveLink(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Nav.Link>
                )
              )}
              <div className="d-flex align-items-center justify-content-center">
                <ToggleTheme />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
