import styled from "styled-components"

export const Wedoit = styled.section`
    background: ${({ theme }) => theme.colors.body};
    padding: ${({ theme }) => theme.sections.padding.mobile};

    h2 { 
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};
        text-align: center;
    }

    .desktop {display: none}
    @media (min-width: 769px) {
        .desktop {display: flex;}
    }
`
export const Left = styled.div`
    width: 35%;
    text-align: right;

    .flex-right {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
    }
`
export const Middle = styled.div`
    width: 30%;
    display: flex;
    align-items: flex-start;
`
export const Right = styled.div`
    width: 35%;

    .mtb-16 {
        margin-top: 160px;
        margin-bottom: 140px;
    }
`
export const TimeLapse = styled.div`
    margin-bottom: 85px;

    &:nth-child(3) {
        margin-bottom: 0;
    }

    span {
        font-size: 40px;
        line-height: 48px;
        display: block;
        font-weight: 700;
        margin: 10px 0;
        color: ${({ theme }) => theme.colors.black};
    }
    h4 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.blue};
    }
    p {
        margin: 0;
        letter-spacing: 0.5px;
    }
`

export const HWMobileSection = styled.section`
    .mobile {display: block}
    @media (min-width: 769px) {
        display: none;
    }
`
export const Block = styled.div`
    margin-bottom: 45px;

    &:last-child {margin-bottom: 0}
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 15px;

    span {
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 0.25px;
        font-weight: 900;
        text-align: right;
        display: block;
        margin-top: 8px;
        color: ${({ theme }) => theme.colors.black};
    }

    &.TLEngagement {}
    &.TLPlanning {
        flex-direction: row-reverse;

        span {text-align: left}
    }
    &.TLDevelopment {}
    &.TLAnalysis {
        flex-direction: row-reverse;

        span {text-align: left}
    }
    &.TLDeployment {}
`
export const Bottom = styled.div`

    h4 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.blue};
    }

    p {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.colors.gray};
    }

    &.align-right {text-align:right}
    &.align-left {text-align:left}
`