import { Layout, Menu } from "antd";

import { useState, useEffect } from "react";

const { Header } = Layout;

const MenuBar = () => {

  const [currentSection, setCurrentSection] = useState("aboutme");

  const sections = [
    { key: "aboutme", id: "aboutme" },
    { key: "skills", id: "skills" },
    { key: "experience", id: "experience" },
    { key: "projects", id: "projects" },
    { key: "education", id: "education" },
    { key: "contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setCurrentSection(section.key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <Header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop: "-8px"
    }}>
      <div
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          marginRight: "30px"
        }}
      >
        Jamil Khan
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[currentSection]}
        style={{ flex: 1, minWidth: 0 }}
      >
        {sections.map((section) => (
          <Menu.Item
            key={section.key}
            onClick={() => scrollToSection(section.id)}
          >
            {section.key.charAt(0).toUpperCase() + section.key.slice(1).replace(/_/g, " ")}
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default MenuBar;
