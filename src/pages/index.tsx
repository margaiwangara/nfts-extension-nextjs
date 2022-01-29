import styled from 'styled-components';

function Home() {
  return (
    <HomeWrapper>
      <TopBar>
        <Placeholder />
        <Dropdown>
          <Placeholder />
          <span>johndoe.near</span>
          <Placeholder />
        </Dropdown>
        <section className="split">
          <Placeholder />
          <Placeholder />
        </section>
      </TopBar>
      <Body>
        <section className="start">
          <section className="box"></section>
          <section className="box"></section>
        </section>
        <section className="center"></section>
        <section className="end">
          <section className="toggle-container">
            <button className="toggle active">Collectibles</button>
            <button className="toggle">Transactions</button>
          </section>

          <section className="toggle-view">
            <section className="toggle-view-box">
              <section className="start">
                <span />
              </section>
              <section className="center" />
              <section className="end" />
            </section>
          </section>
        </section>
      </Body>
    </HomeWrapper>
  );
}

const Body = styled.section`
  padding: 14px 10.98px;
  display: flex;
  flex-direction: column;
  gap: 11px;

  .start {
    display: flex;
    gap: 11px;

    .box {
      flex: 1;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      height: 99px;
      border: solid 1px grey;
    }
  }

  .center {
    border-radius:: 6px;
    height: 168px;
  }

  .end {
    display: flex;
    flex-direction: column;
    

    .toggle-container {
      display: flex;
      border-bottom: solid 1px ${({ theme }) => theme.colors.text[600]};

      .toggle {
        flex: 1;
        font-weight: 500;
        text-align: center;
        color: ${({ theme }) => theme.colors.text[300]};
        font-size: 15px;
        background-color: transparent;
        padding: 10px 12px;
        border: none;
        
        &.active {
          color: ${({ theme }) => theme.colors.text[100]};
          border-bottom: solid 2px ${({ theme }) => theme.colors.text[100]};
        }
      }
    }

    .toggle-view {
      display: flex;
      flex-direction: column;

      &-box {
        display: flex;
        padding: 10px 0;

        .start {
          span {
            height: 60px;
            width: 60px;
            background-color: ${({ theme }) => theme.colors.text[600]};
            border-radius: 10px;
            display: block;
          }
        }

        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .end {

        }
      }
    }
  }
`;

const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Dropdown = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.text[600]};
  padding: 12px 8px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text[100]};
  gap: 8px;
`;

const TopBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.text[700]};
  padding: 13px 25.17px 13px 23.26px;

  .split {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Placeholder = styled.span`
  height: 21.67px;
  width: 21.67px;
  background-color: ${({ theme }) => theme.colors.text[500]};
  border-radius: 50%;
`;

export default Home;
