import { Layout, Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const MenuBarBack = () => {

    const navigate = useNavigate();
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 10000,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: "-8px"
        }}>
            <div style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "bold",
                marginRight: "30px"
            }}>
                Jamil Khan
            </div>
            <Row gutter={[32, 32]} justify="center">
                <Col span={6}>
                    <Button onClick={() => navigate("/")} type="primary">
                        Back to Home
                    </Button>
                </Col>

            </Row>

        </Header>
    );
};

export default MenuBarBack;
