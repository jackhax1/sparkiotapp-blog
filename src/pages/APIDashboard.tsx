import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Row, Col, Button, Layout, message, Table, Card, Typography, Select } from "antd";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const { Content, Footer, Header } = Layout;

const { Title } = Typography;
const { Option } = Select;



const APIDashboard = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [_, setLoading] = useState(false);
    const [selectedStation, setSelectedStation] = useState(null);

    const stations = [{ 'StationId': 'CA01R', 'StationLocation': 'Kangar, PERLIS' }, { 'StationId': 'CA02K', 'StationLocation': 'Langkawi, KEDAH' }, { 'StationId': 'CA03K', 'StationLocation': 'Alor Setar, KEDAH' }, { 'StationId': 'CA04K', 'StationLocation': 'Sungai Petani, KEDAH' }, { 'StationId': 'CA05K', 'StationLocation': 'Kulim Hi-Tech, KEDAH' }, { 'StationId': 'CA06P', 'StationLocation': 'Seberang Jaya, PULAU PINANG' }, { 'StationId': 'CA07P', 'StationLocation': 'Seberang Perai, PULAU PINANG' }, { 'StationId': 'CA08P', 'StationLocation': 'Minden, PULAU PINANG' }, { 'StationId': 'CA09P', 'StationLocation': 'Balik Pulau, PULAU PINANG' }, { 'StationId': 'CA10A', 'StationLocation': 'Taiping, PERAK' }, { 'StationId': 'CA11A', 'StationLocation': 'Tasek Ipoh, PERAK' }, { 'StationId': 'CA12A', 'StationLocation': 'Pegoh Ipoh, PERAK' }, { 'StationId': 'CA13A', 'StationLocation': 'Seri Manjung, PERAK' }, { 'StationId': 'CA14A', 'StationLocation': 'Tanjung Malim, PERAK' }, { 'StationId': 'CA15W', 'StationLocation': 'Batu Muda, W.P. KUALA LUMPUR' }, { 'StationId': 'CA16W', 'StationLocation': 'Cheras, W.P. KUALA LUMPUR' }, { 'StationId': 'CA17W', 'StationLocation': 'Putrajaya, W.P. PUTRAJAYA' }, { 'StationId': 'CA18B', 'StationLocation': 'Kuala Selangor, SELANGOR' }, { 'StationId': 'CA19B', 'StationLocation': 'Petaling Jaya, SELANGOR' }, { 'StationId': 'CA20B', 'StationLocation': 'Shah Alam, SELANGOR' }, { 'StationId': 'CA21B', 'StationLocation': 'Klang, SELANGOR' }, { 'StationId': 'CA22B', 'StationLocation': 'Banting, SELANGOR' }, { 'StationId': 'CA23N', 'StationLocation': 'Nilai, NEGERI SEMBILAN' }, { 'StationId': 'CA24N', 'StationLocation': 'Seremban, NEGERI SEMBILAN' }, { 'StationId': 'CA25N', 'StationLocation': 'Port Dickson, NEGERI SEMBILAN' }, { 'StationId': 'CA26M', 'StationLocation': 'Alor Gajah, MELAKA' }, { 'StationId': 'CA27M', 'StationLocation': 'Bukit Rambai, MELAKA' }, { 'StationId': 'CA28M', 'StationLocation': 'Bandaraya Melaka, MELAKA' }, { 'StationId': 'CA29J', 'StationLocation': 'Segamat, JOHOR' }, { 'StationId': 'CA31J', 'StationLocation': 'Batu Pahat, JOHOR' }, { 'StationId': 'CA32J', 'StationLocation': 'Kluang, JOHOR' }, { 'StationId': 'CA33J', 'StationLocation': 'Larkin, JOHOR' }, { 'StationId': 'CA34J', 'StationLocation': 'Pasir Gudang, JOHOR' }, { 'StationId': 'CA35J', 'StationLocation': 'Pengerang, JOHOR' }, { 'StationId': 'CA36J', 'StationLocation': 'Kota Tinggi, JOHOR' }, { 'StationId': 'CA37C', 'StationLocation': 'Rompin, PAHANG' }, { 'StationId': 'CA38C', 'StationLocation': 'Temerloh, PAHANG' }, { 'StationId': 'CA39C', 'StationLocation': 'Jerantut, PAHANG' }, { 'StationId': 'CA40C', 'StationLocation': 'Indera Mahkota Kuantan, PAHANG' }, { 'StationId': 'CA41C', 'StationLocation': 'Balok Baru Kuantan, PAHANG' }, { 'StationId': 'CA42T', 'StationLocation': 'Kemaman, TERENGGANU' }, { 'StationId': 'CA43T', 'StationLocation': 'Paka, TERENGGANU' }, { 'StationId': 'CA44T', 'StationLocation': 'Kuala Terengganu, TERENGGANU' }, { 'StationId': 'CA45T', 'StationLocation': 'Besut, TERENGGANU' }, { 'StationId': 'CA46D', 'StationLocation': 'Tanah Merah, KELANTAN' }, { 'StationId': 'CA47D', 'StationLocation': 'Kota Bharu, KELANTAN' }, { 'StationId': 'CA48S', 'StationLocation': 'Tawau, SABAH' }, { 'StationId': 'CA49S', 'StationLocation': 'Sandakan, SABAH' }, { 'StationId': 'CA50S', 'StationLocation': 'Kota Kinabalu, SABAH' }, { 'StationId': 'CA51S', 'StationLocation': 'Kimanis, SABAH' }, { 'StationId': 'CA52S', 'StationLocation': 'Keningau, SABAH' }, { 'StationId': 'CA53L', 'StationLocation': 'Labuan, W.P. LABUAN' }, { 'StationId': 'CA54Q', 'StationLocation': 'Limbang, SARAWAK' }, { 'StationId': 'CA55Q', 'StationLocation': 'ILP Miri, SARAWAK' }, { 'StationId': 'CA56Q', 'StationLocation': 'Miri, SARAWAK' }, { 'StationId': 'CA57Q', 'StationLocation': 'Samalaju, SARAWAK' }, { 'StationId': 'CA58Q', 'StationLocation': 'Bintulu, SARAWAK' }, { 'StationId': 'CA59Q', 'StationLocation': 'Mukah, SARAWAK' }, { 'StationId': 'CA60Q', 'StationLocation': 'Kapit, SARAWAK' }, { 'StationId': 'CA61Q', 'StationLocation': 'Sibu, SARAWAK' }, { 'StationId': 'CA62Q', 'StationLocation': 'Sarikei, SARAWAK' }, { 'StationId': 'CA63Q', 'StationLocation': 'Sri Aman, SARAWAK' }, { 'StationId': 'CA64Q', 'StationLocation': 'Samarahan, SARAWAK' }, { 'StationId': 'CA65Q', 'StationLocation': 'Kuching, SARAWAK' }, { 'StationId': 'CA66J', 'StationLocation': 'Tangkak, JOHOR' }, { 'StationId': 'MCAQM001', 'StationLocation': 'JOHAN SETIA, Selangor' }, { 'StationId': 'MCAQM002', 'StationLocation': 'IPD Serian, Sarawak' }, { 'StationId': 'MCAQM003', 'StationLocation': 'Politeknik Kota Kinabalu, Sabah' }]

    const api_endpoint = "https://nm10aqgv2d.execute-api.ap-southeast-1.amazonaws.com/default/api-query-air-quality"

    const columns = [
        {
            title: "Station ID",
            dataIndex: "StationId",
            key: "StationId",
        },
        {
            title: "Location",
            dataIndex: "StationLocation",
            key: "StationLocation",
        },
        {
            title: "API",
            dataIndex: "API",
            key: "API",
        },
        {
            title: "Timestamp",
            dataIndex: "Timestamp",
            key: "Timestamp",
            render: (timestamp: number) => new Date(timestamp * 1000).toLocaleString(),
        },
    ];


    useEffect(() => {
        if (!selectedStation) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams({ station_id: selectedStation });
                const response = await fetch(`${api_endpoint}?${params.toString()}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data);
                message.success("Data loaded successfully!");
            } catch (error) {
                console.error("Error fetching data:", error);
                message.error("Failed to fetch data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedStation]);


    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        scrollToTop();
    }, [])


    return (
        <Layout>
            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
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


            <Content className="content-section" style={{ backgroundColor: "#f0f2f5" }}>

                <Title level={2} style={{ marginBottom: "20px" }}>
                    API Dashboard
                </Title>
                <Row justify="center" gutter={[32, 32]}>
                    <Col xs={24} lg={12}>
                        <Card>
                            <div style={{ marginBottom: 20 }}>
                                <Select
                                    placeholder="Select Station ID"
                                    style={{ width: 200 }}
                                    onChange={(value) => setSelectedStation(value)}
                                    value={selectedStation}
                                >
                                    {stations.map((station) => (
                                        <Option key={station['StationId']} value={station['StationId']}>
                                            {station['StationLocation']}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <Table
                                dataSource={[...data]}
                                columns={columns}
                                rowKey="id"
                                pagination={{ pageSize: 5 }}
                                bordered
                            />
                        </Card>
                    </Col>
                    <Col xs={24} lg={12}>
                        <Card title={"Chart for " + selectedStation}>
                            <ResponsiveContainer width="100%" height={400}>
                                <LineChart width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="Timestamp" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="API" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>

                        </Card>
                    </Col>
                </Row>
            </Content>

            <Footer style={{ textAlign: "center", backgroundColor: "#001529", color: "white" }}>
                ©2024 Created by Jamil Khan
            </Footer>
        </Layout>
    );
};

export default APIDashboard;
