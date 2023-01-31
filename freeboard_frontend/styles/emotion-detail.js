import styled from "@emotion/styled";

/*** boardDetail ***/
export const DetailWrapper = styled.div`
  width: 1200px;
  margin: auto;
`;

export const DetailCardWrapper = styled.div`
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const DetailAvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailAvatar = styled.img`
  margin-right: 10px;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailWriter = styled.div``;

export const DetailCreatedAt = styled.div``;

export const DetailBody = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const DetailTitle = styled.h1`
  padding-top: 80px;
`;

export const DetailContents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const DetailBottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const DetailButton = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;