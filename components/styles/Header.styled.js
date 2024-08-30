import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    box-shadow: 0px 4px 4px #EDF3FF;
    height: 76px;

    @media (min-width: 992px) {
        height: 90px;
    }
`