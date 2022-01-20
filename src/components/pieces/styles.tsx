import styled from "styled-components";

interface Props {
  blackSquare: boolean
}

export const Armor = styled.span(({blackSquare}: Props) => {
  const shadow = blackSquare ? 'white' : 'black'
  return {
    margin: 0,
    fontSize: "3.25vw",
    ":hover": { cursor: "pointer", textShadow: `1px 1px 2px ${shadow}`},
    ':active': {textShadow: `1px 1px 2px ${shadow}` },
  };
});
