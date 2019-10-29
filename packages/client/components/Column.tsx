import React from 'react';
import styled from 'styled-components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const BaseColumn = styled(FlexColumn)`
  margin: 32px 16px;
  align-items: stretch;

  @media (max-width: 1999pxpx) {
    margin: 0;
    max-width: 100%;
  }
`;

const PrimaryColumn = styled(BaseColumn)`
  min-width: 320px;
  flex: 2 1 70%;
  max-width: 684px;

  @media (max-width: 1999px) {
    width: 100%;
    max-width: 100%;
  }
`;

const SecondaryColumn = styled(BaseColumn)`
  min-width: 240px;
  flex: 1 1 25%;
  max-width: 285px;

  @media (max-width: 1999px) {
    flex: none;
    align-self: stretch;
  }
`;

const OnlyColumn = styled(PrimaryColumn)`
  max-width: 840px;
  flex: 0 0 75%;

  @media (max-width: 1999px) {
    flex: 1;
    min-width: 100%;
    width: 100%;
  }
`;

const Column = (props: object): React.Element<any> => {
  if (props.primary) {
    return <PrimaryColumn {...props}>{props.children}</PrimaryColumn>;
  } else if (props.secondary) {
    return <SecondaryColumn {...props}>{props.children}</SecondaryColumn>;
  } else if (props.only) {
    return <OnlyColumn {...props}>{props.children}</OnlyColumn>;
  } else {
    return <BaseColumn {...props}>{props.children}</BaseColumn>;
  }
};

export default Column;
