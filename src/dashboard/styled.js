import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "menu content";
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  min-height: 100vh;
`;
export const MenuContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  grid-area: menu;
  grid-template-rows: auto 1fr;
  padding: 10px 20px 0px;
  flex-direction: column;
  border-right: 1px solid #8081913d;
`;
export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
  svg {
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    color: #3b82f6;
    --size: 36px;
    width: var(--size);
    height: var(--size);
  }
`;
export const SideBarMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &.case {
    fill: #3b82f6;
  }
  .active {
    fill: #3b82f6;
    background-color: #dbeafe;
    padding: 10px;
    border-radius: 5px;
  }
  svg {
    background-repeat: no-repeat;
    background-position: center;
    fill: #8e8e8e;
    --size: 20px;
    width: var(--size);
    height: var(--size);
    margin-bottom: 30px;
    cursor: pointer;
    :last-child {
      margin-bottom: 0;
    }
  }
`;
export const ContentContainer = styled.div`
  display: grid;
  flex-direction: column;
  grid-area: content;
  grid-template-areas: "header" "content";
  grid-template-rows: auto 1fr;
  grid-template-columns: 100% 1fr;
  height: 100%;
  width: 100%;
  .two-columns {
    display: grid;
    box-sizing: border-box;
    grid-area: content;
    grid-template-columns: 300px 1fr;
    grid-template-areas: "users table";
  }
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  grid-area: header;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 20px 0px 20px;
  background-color: #f4f4f5;
  border-bottom: 1px solid #8081913d;
`;

export const BookmarksHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  font-size: 14px;
  //border-bottom: 1px solid #8081913d;
  &.header {
    padding: 0px 20px 0px;
    border-bottom: 1px solid #8081913d;
  }
`;
export const Link = styled.div`
  display: flex;
  height: 100%;
  padding: 19px;
  margin-right: 15px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "2px solid #3B82F6" : "none")};
  color: ${({ active }) => (active ? "#3B82F6" : "#71717A;")};
  :last-child {
    margin-right: 0;
  }
  &.header {
    padding-bottom: 6px;
    padding: 10px;
    margin-right: 20px;
    font-size: 14px;
  }
`;
export const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
  button {
    color: #fff;
    background-color: #3b82f6;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 15px;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const UserLogo = styled.div`
  display: flex;
  background-image: ${({ userLogo }) => `url(${userLogo})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-right: 15px;
  --size: 34px;
  width: var(--size);
  height: var(--size);
  flex: 0 0 auto;
`;
export const UserName = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  grid-area: users;
  grid-template-rows: 100% 1fr;
  grid-template-columns: 300px 1fr;
  width: 100%;
  height: 100%;
  background-color: #f4f4f5;
  border-right: 1px solid #8081913d;
  padding: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  text-transform: uppercase;
  width: 300px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #7d7d7d;
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 20px;
  box-sizing: border-box;
  svg {
    position: absolute;
    left: 8px;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 8px;
    padding-left: 28px;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  }
`;
export const UsersCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  grid-area: table;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  width: 100%;
  background-color: #fff;
`;
export const HeaderTable = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
`;
export const Table = styled.table`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 0 0 auto;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #8081913d;
`;
export const CellHead = styled.th`
  color: #a1a1aa;
  font-size: 14px;
  font-weight: 400;
  padding: 0 12px 12px;
`;
export const Cell = styled.td`
  align-items: center;
  .where {
    svg {
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      padding: 6px;
    }
  }
  svg {
    --size: 15px;
    width: var(--size);
    height: auto;
    color: #a1a1aa;
    &.circle {
      color: #f59e0b;
      width: var(--size);
      height: var(--size);
    }
    &.Arrow {
      color: #10b981;
    }
  }
`;

export const CellData = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  font-size: 15px;
  &.negative-profit {
    color: #ef4444;
  }
  &.positive-profit {
    color: #10b981;
  }
  img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    --size: 28px;
    width: var(--size);
    height: var(--size);
  }
  button {
    align-items: center;
    border: none;
    background-color: transparent;
    color: #a1a1aa;
    cursor: pointer;
    svg {
      --size: 22px;
      width: var(--size);
      height: auto;
    }
  }
`;
export const ProfileActiveUserContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0px;
  margin-bottom: 20px;
`;
export const ButtonPageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const ButtonFilterContainer = styled.div`
  display: flex;
`;
export const ButtonFilter = styled.button`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 6px;
  color: #a1a1aa;
  background-color: #fff;
  border: 1px solid;
  border-radius: 5px;
  border-color: #e4e4e7;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  margin-right: 10px;
  cursor: pointer;
  :last-child {
    margin-right: 0;
  }
  svg {
    font-size: 20px;
  }
  span {
    padding: 0px 10px;
  }
`;
export const NextPageContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
    padding: 6px;
    color: #a1a1aa;
    border: 1px solid;
    border-radius: 20%;
    border-color: #e4e4e7;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    margin-right: 10px;
    cursor: pointer;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const NPageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  color: #a1a1aa;
  border: 1px solid;
  border-radius: 20%;
  border-color: #e4e4e7;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
  margin-right: 10px;
  --size: 34px;
  width: var(--size);
  height: var(--size);
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#f4f4f5" : "#fff")};
`;
export const TitlePage = styled.div`
  display: flex;
  color: #71717a;
  font-size: 12px;
  margin-right: 15px;
`;
export const ProfileActiveUser = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
`;
export const ActiveUserIcon = styled.div`
  display: flex;
  background-image: ${({ activeUser }) => `url(${activeUser})`};
  background-size: cover;
  --size: 48px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  margin-right: 15px;
`;
export const ActiveUserName = styled.div`
  display: flex;
  font-size: 30px;
`;
export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
    padding: 6px;
    color: #a1a1aa;
    border: 1px solid;
    border-radius: 50%;
    border-color: #e4e4e7;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;
export const TotalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 20px;
`;
export const TitleBalanceContainer = styled.div`
  display: flex;
  font-size: 12px;
  color: #a1a1aa;
`;
export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${({ active }) =>
    active
      ? "0px 0px 0px 2px rgba(59, 130, 246, 1)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0.3)"};
  margin-bottom: 25px;
  background-color: #fff;
  :last-child {
    margin-bottom: 0;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0px 10px 10px;
  border-bottom: 1px solid #eee;
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px;
`;
export const IconUser = styled.div`
  display: flex;
  box-sizing: border-box;
  background-size: cover;
  background-image: ${({ iconUser }) => `url(${iconUser})`};
  --size: 28px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  margin-right: 10px;
`;
export const NameUser = styled.div`
  display: flex;
  font-weight: 600;
`;
export const Work = styled.div`
  display: flex;
	width: 80px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  padding: 5px 10px 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
	color: ${({ color }) => color};
  border-radius: 5px;
`;
export const Total = styled.div`
  display: flex;
  color: #71717a;
  font-size: 12px;
  &.active {
    font-size: 18px;
    color: #18181b;
  }
`;
export const Pages = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;
