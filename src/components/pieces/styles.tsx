import styled from "styled-components";

interface Props {
  blackSquare: boolean
}
//TODO: actually make this responsive without resorting to vw
export const Armor = styled.span(({blackSquare}: Props) => {
  const shadow = blackSquare ? 'white' : 'black'
  return {
    margin: 0,
    fontSize: "6.5vw",
    ":hover": { cursor: "pointer", textShadow: `1px 1px 2px ${shadow}`, transform: '1.05'},
    ':active': {textShadow: `1px 1px 2px ${shadow}` },
  };
});
