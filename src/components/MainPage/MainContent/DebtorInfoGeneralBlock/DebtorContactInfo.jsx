import React from 'react';
import styled from 'styled-components';

const DebtorContactInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  & > .debtorContactNumber {
    display: flex;
    align-items: center;

    & > span {
      color: #adadad;
    }

    & > .debtorNumber {
      font-weight: 500;
      font-size: 18px;
      color: #adadad;
      margin-left: 10px;
    }

    & > .reminder {
      font-size: 16px;
      font-weight: 400;
      cursor: pointer;
      color: #5d54a4;
      margin-left: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  & > .debtorLocation {
    display: flex;
    align-items: center;
    & > span {
      color: #adadad;
    }

    & > .debtorAdress {
      font-size: 18px;
      font-weight: 500;
      color: #adadad;
      margin-left: 4px;
    }
  }
`;

function DebtorContactInfo(props) {
  return (
    <DebtorContactInfoWrap>
      <div className="debtorContactNumber">
        <span className="material-icons">call</span>
        <div className="debtorNumber">
          {props.individDebtorInfo.countryCode +
            ' ' +
            props.individDebtorInfo.phone}
        </div>
        <div className="reminder">отправить напоминание</div>
      </div>
      <div className="debtorLocation">
        <span className="material-icons">location_on</span>
        <div className="debtorAdress">{`г.${props.individDebtorInfo.city}`}</div>
      </div>
    </DebtorContactInfoWrap>
  );
}

export default DebtorContactInfo;
