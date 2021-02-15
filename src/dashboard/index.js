import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiCalendarEdit } from "react-icons/bi";
import { BsExclamationCircle } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { IoAppsSharp } from "react-icons/io5";
import user from "../upload/user-p.jpg";
import Joly from "../upload/FaustineJoly.jpg";
import Tristian from "../upload/TristanRingheim.jpg";
import Lauri from "../upload/LauriPerko.jpg";
import Ellinor from "../upload/EllinorTorgersen.jpg";
import Deniz from "../upload/DenizKuday.jpg";
import { ReactComponent as Logo } from "../upload/logo.svg";
import { ReactComponent as Home } from "../upload/home.svg";
import { ReactComponent as Briefcase } from "../upload/briefcase.svg";
import { ReactComponent as Folder } from "../upload/folder.svg";
import { ReactComponent as PayPal } from "../upload/paypal.svg";
import { ReactComponent as Microsoft } from "../upload/microsoft.svg";
import { ReactComponent as Apple } from "../upload/apple.svg";
import { ReactComponent as Adobe } from "../upload/Adobe.svg";
import { ReactComponent as Spotify } from "../upload/spotify.svg";
import { ReactComponent as Amazon } from "../upload/amazon.svg";
import { ReactComponent as WebStorm } from "../upload/icon-webstorm.svg";
import { ReactComponent as Android } from "../upload/android.svg";
import {
  Container,
  MenuContainer,
  LogoContainer,
  SideBarMenu,
  ContentContainer,
  Header,
  BookmarksHeader,
  Link,
  UsersContainer,
  Content,
  ProfileDetail,
  UserLogo,
  UserName,
  UserInfo,
  TitleContainer,
  UsersCard,
  CardContainer,
  IconUser,
  NameUser,
  Work,
  Total,
  UserContainer,
  FooterContainer,
  SearchContainer,
  HeaderTable,
  ProfileActiveUserContainer,
  ProfileActiveUser,
  BalanceContainer,
  ActiveUserIcon,
  ActiveUserName,
  TitleBalanceContainer,
  TotalContainer,
  ButtonPageContainer,
  ButtonFilterContainer,
  NextPageContainer,
  TitlePage,
  ButtonFilter,
  Table,
  TableRow,
  Cell,
  CellData,
  CellHead,
  Pages,
  NPageButton
} from "./styled";

const Dashboard = props => {
  const cards = [
    {
      iconUser: Joly,
      nameUser: "Faustine Joly",
      work: "Design",
      total: "$1,902.00",
      color: `#3b82f6`,
      backgroundColor: `#dbeafe`
    },
    {
      iconUser: Tristian,
      nameUser: "Tristan Ringheim",
      work: "Sales",
      total: "$2,795.00",
      active: "true",
      color: `#059669`,
      backgroundColor: `#d1fae5`
    },
    {
      iconUser: Lauri,
      nameUser: "Lauri Perko",
      work: "Marketing",
      total: "$95.00",
      color: `#d97706`,
      backgroundColor: `#fef3c7`
    },
    {
      iconUser: Ellinor,
      nameUser: "Ellinor Torgersen",
      work: "Design",
      total: "$768.00",
      color: `#3b82f6`,
      backgroundColor: `#dbeafe`
    },
    {
      iconUser: Deniz,
      nameUser: "Deniz Kuday",
      work: "Sales",
      total: "$0.00",
      color: `#059669`,
      backgroundColor: `#d1fae5`
    }
  ];
  const tables = [
    {
      icon: <BsExclamationCircle className="circle" />,
      typeName: "Card",
      whereIcon: <PayPal />,
      whereName: "PayPal",
      description: "Subscription renewal",
      amount: "- $120.00",
      date: "24.12.2020",
      time: "11:16 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Microsoft />,
      whereName: "Microsoft",
      description: "Subscription renewal",
      amount: "- $9.99",
      date: "24.12.2020",
      time: "07:16 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Apple />,
      whereName: "Apple",
      description: "Macbook Pro 13",
      amount: "- $1.499.99",
      date: "24.12.2020",
      time: "11:03 AM"
    },
    {
      icon: <IoArrowDown className="Arrow" />,
      typeName: "Income",
      whereIcon: <img src={Ellinor} />,
      whereName: "Ellinor Torgersen",
      description: "Invoice No: 12993",
      amount: "+ $32.00",
      date: "13.11.2020",
      time: "07:32 AM"
    },
    {
      icon: <IoArrowDown className="Arrow" />,
      typeName: "Income",
      whereIcon: <img src={user} />,
      whereName: "James Smith",
      description: "Invoice No: 37401",
      amount: "+ $60.00",
      date: "13.11.2020",
      time: "09:45 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Android />,
      whereName: "Android",
      description: "Google Pixel 5",
      amount: "- $699.99",
      date: "12.12.2020",
      time: "10:26 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Adobe />,
      whereName: "Adobe",
      description: "Product purchased",
      amount: "- $49.99",
      date: "10.03.2020",
      time: "10:29 AM"
    },
    {
      icon: <IoArrowDown className="Arrow" />,
      typeName: "Income",
      whereIcon: <img src={Ellinor} />,
      whereName: "Ellinor Torgersen",
      description: "Invoice No: 12993",
      amount: "+ $32.00",
      date: "13.11.2020",
      time: "07:32 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Spotify />,
      whereName: "Spotify",
      description: "Subscription renewal",
      amount: "- $5.99",
      date: "02.04.2020",
      time: "17:15 PM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Android />,
      whereName: "Android",
      description: "Google Pixel 5",
      amount: "- $699.99",
      date: "12.12.2020",
      time: "10:26 AM"
    },
    {
      icon: <IoArrowDown className="Arrow" />,
      typeName: "Income",
      whereIcon: <img src={user} />,
      whereName: "James Smith",
      description: "Invoice No: 37401",
      amount: "+ $560.00",
      date: "13.11.2020",
      time: "09:45 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Amazon />,
      whereName: "Amazon",
      description: "PlayStation 5",
      amount: "- $399.99",
      date: "08.04.2020",
      time: "09:15 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Android />,
      whereName: "Android",
      description: "Google Pixel 5",
      amount: "- $699.99",
      date: "12.12.2020",
      time: "10:26 AM"
    },
    {
      icon: <IoArrowDown className="Arrow" />,
      typeName: "Income",
      whereIcon: <img src={Ellinor} />,
      whereName: "Ellinor Torgersen",
      description: "Invoice No: 12993",
      amount: "+ $232.00",
      date: "13.11.2020",
      time: "07:32 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <Android />,
      whereName: "Android",
      description: "Google Pixel 5",
      amount: "- $699.99",
      date: "12.12.2020",
      time: "10:26 AM"
    },
    {
      icon: <FiCreditCard />,
      typeName: "Card",
      whereIcon: <WebStorm />,
      whereName: "WebStorm",
      description: "Monthly buy license",
      amount: "- $5.90",
      date: "12.02.2021",
      time: "16:20 PM"
    }
  ];
  return (
    <Container>
      <MenuContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SideBarMenu>
          <Home />
          <Briefcase className="active" />
          <Folder />
          <IoAppsSharp />
        </SideBarMenu>
      </MenuContainer>
      <ContentContainer>
        <Header>
          <BookmarksHeader>
            <Link>Company</Link>
            <Link active>Users</Link>
            <Link>Expense Centres</Link>
            <Link>Currency Exchange</Link>
          </BookmarksHeader>
          <ProfileDetail>
            <button>Deposit</button>
            <UserInfo>
              <UserLogo userLogo={user} />
              <UserName>James Smith</UserName>
              <FaAngleDown />
            </UserInfo>
          </ProfileDetail>
        </Header>
        <div className="two-columns">
          <UsersContainer>
            <TitleContainer>Users</TitleContainer>
            <SearchContainer>
              <BiSearchAlt />
              <input type="text" placeholder="Search" />
            </SearchContainer>
            <UsersCard>
              {cards.map(card => {
                return <Card {...card} />;
              })}
            </UsersCard>
          </UsersContainer>
          <Content>
            <HeaderTable>
              <ProfileActiveUserContainer>
                <ProfileActiveUser>
                  <ActiveUserIcon activeUser={Tristian} />
                  <ActiveUserName>Tristan Ringheim</ActiveUserName>
                </ProfileActiveUser>
                <BalanceContainer>
                  <TotalContainer>
                    <TitleBalanceContainer>
                      Account balance:
                    </TitleBalanceContainer>
                    <Total className="active">$2,795.00</Total>
                  </TotalContainer>
                  <MdMoreHoriz />
                </BalanceContainer>
              </ProfileActiveUserContainer>
              <BookmarksHeader className="header">
                <Link className="header" active>
                  Activities
                </Link>
                <Link className="header">Transfer</Link>
                <Link className="header">Budgets</Link>
                <Link className="header">Notifications</Link>
                <Link className="header">Cards</Link>
              </BookmarksHeader>
            </HeaderTable>
            <div
              style={{
                width: "100%",
                height: "100%",
                overflowY: "auto",
                position: "relative"
              }}
            >
              <Table
                style={{
                  display: "block",
                  boxSizing: "borderBox",
                  width: "100%",
                  height: "100%",
                  overflowY: "auto",
                  position: "absolute"
                }}
              >
                <ButtonPageContainer>
                  <ButtonFilterContainer>
                    <ButtonFilter>
                      <BiCalendarEdit />
                      <span>Last 30 days</span>
                      <BiChevronDown />
                    </ButtonFilter>
                    <ButtonFilter>
                      <span>Filter by</span>
                      <BiChevronDown />
                    </ButtonFilter>
                  </ButtonFilterContainer>
                  <NextPageContainer>
                    <TitlePage>Page 2 of 4</TitlePage>
                    <BiChevronLeft />
                    <BiChevronRight />
                  </NextPageContainer>
                </ButtonPageContainer>
                <table
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "30px",
                    borderCollapse: "collapse"
                  }}
                >
                  <thead>
                    <TableRow>
                      <CellHead>Type</CellHead>
                      <CellHead>Where</CellHead>
                      <CellHead>Description</CellHead>
                      <CellHead>Amount</CellHead>
                      <CellHead>Date</CellHead>
                    </TableRow>
                  </thead>
                  <tbody>
                    {tables.map(tableContent => {
                      return <TableContent {...tableContent} />;
                    })}
                  </tbody>
                </table>
                <Pages>
                  <NextPageContainer>
                    <BiChevronLeft />
                    <NPageButton>1</NPageButton>
                    <NPageButton active>2</NPageButton>
                    <NPageButton>3</NPageButton>
                    <NPageButton>4</NPageButton>
                    <BiChevronRight />
                  </NextPageContainer>
                </Pages>
              </Table>
            </div>
          </Content>
        </div>
      </ContentContainer>
    </Container>
  );
};

const Card = props => {
  const { iconUser, nameUser, work, total, active, color, backgroundColor } = props;
  return (
    <CardContainer active={active}>
      <UserContainer>
        <IconUser iconUser={iconUser} />
        <NameUser>{nameUser}</NameUser>
      </UserContainer>
      <FooterContainer>
        <Work color={color} backgroundColor={backgroundColor}>
          {work}
        </Work>
        <Total>{total}</Total>
      </FooterContainer>
    </CardContainer>
  );
};

const TableContent = props => {
  const {
    icon,
    typeName,
    whereIcon,
    whereName,
    description,
    amount,
    date,
    time
  } = props;
  const profit = amount.includes("-") ? "negative-profit" : "positive-profit";
  return (
    <TableRow>
      <Cell>
        <CellData>
          {icon}
          {typeName}
        </CellData>
      </Cell>
      <Cell>
        <CellData className="where">
          {whereIcon}
          {whereName}
        </CellData>
      </Cell>
      <Cell>
        <CellData>{description}</CellData>
      </Cell>
      <Cell>
        <CellData className={profit}>{amount}</CellData>
      </Cell>
      <Cell>
        <CellData>
          <div style={{ marginRight: "auto" }}>
            {date}
            <div style={{ color: "#a1a1aa", fontSize: "12px" }}>{time}</div>
          </div>
          <button>
            <MdMoreHoriz />
          </button>
        </CellData>
      </Cell>
    </TableRow>
  );
};

export default Dashboard;
