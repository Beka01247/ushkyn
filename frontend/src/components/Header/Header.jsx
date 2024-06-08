import Logo from "../Logo/Logo"
import downarrow from './assets/down-arrow.png'
import './Header.css'
import { useAuthContext } from "../../hooks/useAuthContext"
import { Logout } from "../logout/logout"

import {
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

export default function HeaderHome() {
  const {
    token: { 
      bodyBg = "#A3BCEA",
      headerBg = "#DDD8E7"
    },
  } = theme.useToken();

  const onClick = (e) => {
  };

  const { user } = useAuthContext();

  const items = [
    {
      key: 'sub1',
      label: user.phone,
      icon: <UserOutlined />,
      children: [
        {
          key: 'g1',
          label: 'Item 1',
          type: 'group',
          children: [
            {
              key: '1',
              label: 'Option 1',
            },
            {
              key: '2',
              label: 'Option 2',
            },
          ],
        },
        {
          key: 'g2',
          label: 'Item 2',
          type: 'group',
          children: [
            {
              key: '3',
              label: 'Option 3',
            },
            {
              key: '4',
              label: 'Option 4',
            },
          ],
        },
      ],
    }]

  return (
    // <Header
    //   style={{
    //     padding: '0 0',
    //     display: 'flex',
    //     background: headerBg,
    //   }}
    // >
    //   <Row style={{ width: '100%' }} align={"middle"}>
    //     <Col span={2}></Col>
    //     <Col span={2}>
    //       <Logo />
    //     </Col>
    //     <Col span={8}></Col>
    //     <Col span={4} style={{}}>
    //     </Col>
    //     <Col span={8} style={{ }}>
    //       <Menu
    //       onClick={onClick}
    //       style={{
    //         minWidth: 0,
    //         flex:"auto"
    //       }}
    //       defaultSelectedKeys={['1']}
    //       defaultOpenKeys={['sub1']}
    //       mode="inline"
    //       items={items}
    //       />
    //     </Col>
    //   </Row>
    // </Header>

    <header>
    <div className="container-header">
      <div className="logo">
        <Logo />
      </div>
      
      <div className="user">
        <div className="userlogo">
          {/* <img src={userlogo} alt="User Logo" /> */}
        </div>
        {user && (
          <div className="username">
            <p>{user.phone}</p>
            <Logout />
          </div>
        )}
        <div className="userlogo">
          {/* <img src={downarrow} alt="Dropdown Arrow" /> */}
        </div>
      </div>
    </div>
  </header>
  
)}