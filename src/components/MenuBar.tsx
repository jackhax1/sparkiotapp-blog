import { Layout, Menu } from "antd";

const { Header } = Layout;

const MenuBar = () => {

    const scrollToSection = (sectionId:any) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
  return (
    <Header style={{ position: 'sticky',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginTop:"-8px"}}>
    <div
      style={{
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        marginRight:"30px"
      }}
    >
      Jamil Khan
    </div>
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} style={{ flex: 1, minWidth: 0 }}>
      <Menu.Item key="1" onClick={() => scrollToSection("aboutme")}>
        About Me
      </Menu.Item>
      <Menu.Item key="2" onClick={() => scrollToSection("skills")}>
        Skills
      </Menu.Item>
      <Menu.Item key="3" onClick={() => scrollToSection("experience")}>
        Experience
      </Menu.Item>
      <Menu.Item key="4" onClick={() => scrollToSection("projects")}>
        Projects
      </Menu.Item>
      <Menu.Item key="5" onClick={() => scrollToSection("education")}>
        Education
      </Menu.Item>
      <Menu.Item key="6" onClick={() => scrollToSection("contact")}>
        Contact Me
      </Menu.Item>
    </Menu>
  </Header>
  );
};

export default MenuBar;
