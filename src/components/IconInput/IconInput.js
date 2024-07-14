import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    height: 24,
    borderThickness: 1
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    height: 36,
    borderThickness: 2
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
          style={{ '--size' : styles.iconSize + 'px'}}>
        <Icon id={icon} 
              size={styles.iconSize}
              ></Icon>
      </IconWrapper>
      <TextInput {...delegated} style={{'--width': width + 'px', 
                                        '--height':  styles.height + 'px',
                                        '--border-thickness':  styles.borderThickness + 'px',
                                        '--font-size':  styles.fontSize + 'px'
                                        }}></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  height: var(--height);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const TextInput = styled.input.attrs({type:'text'})`
  font-size: var(--font-size);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: inherit;
  
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);

  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`

export default IconInput;
