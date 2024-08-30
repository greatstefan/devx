import styled from "styled-components";

export const Container = styled.div`
    max-width:  ${({ theme }) => theme.width.container};
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 24px;
    }
`
export const Flex = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
    }

    &.space-between {
        justify-content: space-between;
    }
    &.align-center {
        align-items: center;
    }
`