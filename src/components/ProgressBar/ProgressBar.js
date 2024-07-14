/* eslint-disable no-unused-vars */
import React, { useId } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  // const labelId = useId();
  // aria-labelledby={labelId}
  // <Label id={labelId}>
  
  // INCOMPLETE so far :`(

  return <Wrapper
            role='progressbar'
            aria-valuenow={value}
          >
            <Label>{value}</Label> 
            <BarWrapper>
              <InnerBar value={value}></InnerBar>
            </BarWrapper>
          </Wrapper>;
};

const Wrapper = styled.div`
  font-size: ${(20 / 16) + 'rem'};
  font-family: 'Roboto', sans-serif;
`

const Label = styled.span`
  display: inline-block;
  width: 50px;
  height: 30px;
  vertical-align: top;
`

const BarWrapper = styled.span`
  display: inline-block;
  height: 30px;
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
`

const InnerBar = styled.span`
  display: inline-block;
  height: 30px;
  width: 200px;
  background-color: ${COLORS.primary};
  vertical-align: top;
`


export default ProgressBar;
