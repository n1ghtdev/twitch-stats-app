import React from 'react';
import styled from 'styled-components';
import Column from '../../components/Column';

const Wrapper = styled.section`
  width: 100%;
  background: #eee;
  display: flex;
  flex-direction: row;
`;
const Picture = styled.img`
  margin: 0 auto;
  width: 180px;
  height: 180px;
`;

const OfflinePictureColumn = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
`;

const OfflinePicture = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: ${({ offlinePicture }) =>
    offlinePicture
      ? `url(${offlinePicture})`
      : 'url(https://web-cdn.ttvnw.net/images/xarth/bg_glitch_pattern.png)'};
`;
const About = styled.div`
  display: flex;
`;

const Name = styled.h1`
  text-align: center;
`;
const Link = styled.a``;

const ProfileContainer: React.FC = (props: object) => (
  <Wrapper>
    <Column secondary>
      <Picture src={props.picture} alt={props.name} />
      <Name>{props.name}</Name>
      <p>{props.description}</p>
      <p>Viewer count: {props.viewCount.toLocaleString()}</p>
      <p>Followers count: {props.followersCount.toLocaleString()}</p>
      <Link href={`https://twitch.tv/${props.login}`}>TWITCH LINK</Link>
    </Column>
    <OfflinePictureColumn>
      <OfflinePicture offlinePicture={props.offlinePicture} />
    </OfflinePictureColumn>
  </Wrapper>
);

export default ProfileContainer;
