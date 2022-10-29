import React, { useContext, useEffect, useState } from 'react';
import S from './styles';
import { ListContext } from '../../context/ListContext';
import IssueItem from '../issueItem/IssueItem';
import getIssueList from '../../utils/issueService';
import AdBox from '../adBox/AdBox';

const IssueList = ({ issues, page }) => {
  console.log(issues);
  return (
    <S.Layout>
      <S.List>
        {issues.map((issue, idx) => {
          if (page === 1 && idx === 4) {
            return (
              <>
                <AdBox key="ad" />
                <IssueItem key={issue.id} {...issue} />
              </>
            );
          }
          return <IssueItem key={issue.id} {...issue} />;
        })}
      </S.List>
    </S.Layout>
  );
};

export default IssueList;