'use client';
import { Card, Col, Row, Typography } from 'antd';
import { BarChart } from '../components/barChart';
import { CardAsset } from '../components/cards/cardAsset';
import { CardCompany } from '../components/cards/cardCompany';
import { CardUnit } from '../components/cards/cardUnit';
import { CardUser } from '../components/cards/cardUser';
import { PieChart } from '../components/pieChart';
import NavLink from './nav-link';

const { Title, Link } = Typography;

export default function Home() {
  return (
    <>
      <h3>Dashboard</h3>
       <Row>
        <Col style={{ padding: 5 }}>
          <Card
            style={{
              display: 'flex',
              width: 350,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Title level={4}>Ativos</Title>
            <CardAsset />
            <iframe title="Planner_V1.0 - copia ing" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=e9b572e4-9920-4bdd-acc7-bac08370ae76&autoAuth=true&ctid=3cbcc3d3-094d-4006-9849-0d11d61f484d" frameborder="0" allowFullScreen=true></iframe>
          </Card>
        </Col>
      </Row>
    </>
  );
}
