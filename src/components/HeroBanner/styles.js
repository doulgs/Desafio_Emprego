import styled from "styled-components";
import bgBanner from "../../assets/bannerBg.png";

export const Container = styled.div`
  background: #171a17 url(${bgBanner}) top right no-repeat;
  background-size: 50%;

  height: 640px;
  width: 100%;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }

  > section {
    width: 100%;
    padding: 64px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  @media (max-width: 1000px) {
    height: auto;

    > section {
      gap: 60px;
      flex-direction: column;
    }
  }

  @media (max-width: 700px) {
    > section {
      padding: 64px 16px;
      padding-bottom: 40px;
      gap: 40px;
    }
  }
`;

export const HeroContent = styled.div`
  max-width: 755px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 28px;
    font-family: "Chivo", sans-serif;
    color: #6d72c3;
    display: block;
    margin-bottom: 24px;
  }

  > h1 {
    font-size: 48px;
    font-family: "Chivo", sans-serif;
    display: block;
    margin-bottom: 24px;
  }

  > p {
    font-size: 18px;
    margin-bottom: 24px;
  }

  span {
    color: #6d72c3;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 100px;
    gap: 24px;

    button {
      background: linear-gradient(90.95deg, #6d72c3 11.11%, #ef27a6 85.65%);
      border-radius: 16px;
      color: #fff;
      padding: 13px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 600;
      font-size: 20px;
      height: 56px;
      width: 100%;

      &:last-child {
        background: none;
        border: 1px solid #2e332e;
      }
    }
  }

  @media (max-width: 1360px) {
    max-width: 500px;
  }

  @media (max-width: 1000px) {
    max-width: 100%;

    > div {
      margin-right: 0px;
    }
  }

  @media (max-width: 700px) {
    > strong {
      font-size: 20px;
    }

    > h1 {
      font-size: 32px;
    }

    > p {
      font-size: 14px;
    }

    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const HeadsetsContainer = styled.div`
  display: flex;
  gap: 130px;
  height: 520px;
  align-items: center;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 400px;
      margin-right: 30px;
    }

    > div {
      display: flex;
      gap: 16px;
      margin-top: 60px;

      button {
        width: 40px;
        height: 40px;
        border-radius: 16px;

        &.green {
          background: #ef27a6;
          border: 2px solid #ef27a6;
        }

        &.gray {
          background: #404143;
          border: 2px solid #4e564e;
        }

        &.white {
          background: #ffff;
          border: 2px solid #ffff;
        }
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    > svg {
      color: #5c665c;
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 700px) {
    height: 340px;
    gap: 0px;
    justify-content: space-around;

    > section {
      > img {
        width: 250px;
        margin-top: auto;
      }
    }

    > div {
      gap: 8px;

      > svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const HeadsetItemContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: 2px solid ${({ isActive }) => (isActive ? "#6d72c3" : "#2E332E")};
  background: #2e332e;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  @media (max-width: 700px) {
    width: 60px;
    height: 60px;

    > img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const SocialContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: auto;

  svg {
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: #6d72c3;
    }
  }

  @media (max-width: 1000px) {
    justify-content: center;
    margin-top: 60px;
  }

  @media (max-width: 700px) {
    margin-top: 0px;
  }
`;
