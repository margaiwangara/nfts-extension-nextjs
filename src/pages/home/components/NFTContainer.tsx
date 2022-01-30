import styled from 'styled-components';
import NFTItem from './NFTItem';

function NFTContainer() {
  return (
    <NFTContainerWrapper>
      <section className="top">
        <ToggleButton active>Collectibles</ToggleButton>
        <ToggleButton>Transactions</ToggleButton>
      </section>
      <section className="bottom">
        <NFTItem />
      </section>
    </NFTContainerWrapper>
  );
}

const NFTContainerWrapper = styled.section`
  .top,
  .bottom {
    display: flex;
  }
  .top {
    border-bottom: solid 1px ${({ theme }) => theme.colors.text[600]};
  }

  .bottom {
    flex-direction: column;
  }
`;

const ToggleButton = styled.button<{ active?: boolean }>`
  background-color: transparent;
  padding: 12px;
  flex: 1;
  border: solid 3px transparent;
  border-bottom-color: ${({ active }) => (active ? '#000000' : 'transparent')};
  font-size: 16px;
  font-weight: 600;
  color: ${({ active, theme }) =>
    active ? theme.colors.text[100] : theme.colors.text[300]};
`;

export default NFTContainer;
