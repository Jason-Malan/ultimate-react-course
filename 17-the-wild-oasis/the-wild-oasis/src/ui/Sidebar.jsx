import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledHeader = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media only screen and (max-width: 56.25em) {
    border-right: none;
    flex-direction: row;
    grid-row: auto;
    padding: 1.6rem 0.8rem;
    padding-left: 2rem;
    gap: 1.5rem;
    overflow-x: auto;
  }
`;

function Sidebar() {
  return (
    <StyledHeader>
      <Logo />
      <MainNav />
    </StyledHeader>
  );
}

export default Sidebar;
