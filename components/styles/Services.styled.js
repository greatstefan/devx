import styled from "styled-components";

export const Services = styled.section` 
    padding: ${({ theme }) => theme.sections.padding.mobile};

    @media (min-width: 992px) {
        padding: ${({ theme }) => theme.sections.padding.desktop};
    }

    h2 {
        ${({ theme }) => theme.heading.mobile.h2};
        color: ${({ theme }) => theme.colors.black};
        text-align: center;

        @media (min-width: 992px) {
            ${({ theme }) => theme.heading.desktop.h2};
        }
    }
    p {
        margin-bottom: 30px;
        text-align: center;
            br {
                display: none
                
                @media (min-width: 992px) {
                    display: block;
                }
            };
        padding: 0 20px;
        
        @media (min-width: 992px) {
            
            margin-bottom: 60px;
        }
    }
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    }
`

export const ServicesBlock = styled.div`
    cursor: pointer;
    width: 100%;
    padding: 16px 16px 32px 16px;
    border-radius: 8px;
    margin: 0 10px;
    background: ${({ theme }) => theme.colors.white};

    @media (max-width: 992px) {
        margin: 0;
        padding: 8px;

        &:nth-child(1) {grid-area: 1 / 1 / 2 / 2}
        &:nth-child(2) {grid-area: 1 / 2 / 2 / 3}
        &:nth-child(3) {grid-area: 2 / 1 / 3 / 2}
        &:nth-child(4) {grid-area: 2 / 2 / 3 / 3}
    }

    &:nth-child(1) {
        &:hover {
            h4, a {color: ${({theme}) => theme.colors.white}}
            a {background: white;padding:10px 20px;color:${({theme}) => theme.colors.darkblue};border-radius:4px}
            background: ${({theme}) => theme.colors.blue};
        }
    }
    &:nth-child(2) {
        &:hover {
            h4, a {color: ${({theme}) => theme.colors.white}}
            a {background: white;padding:10px 20px;color:${({theme}) => theme.colors.darkblue};border-radius:4px}
            background: ${({theme}) => theme.colors.red};
        }
    }
    &:nth-child(3) {
        &:hover {
            h4, a {color: ${({theme}) => theme.colors.white}}
            a {background: white;padding:10px 20px;color:${({theme}) => theme.colors.darkblue};border-radius:4px}
            background: ${({theme}) => theme.colors.yellow};
        }
    }
    &:nth-child(4) {       
        &:hover {
            h4, a {color: ${({theme}) => theme.colors.white}}
            a {background: white;padding:10px 20px;color:${({theme}) => theme.colors.darkblue};border-radius:4px}
            background: ${({theme}) => theme.colors.darkblue};
        }
    }
`

export const SbThumb = styled.div`
    border-radius: 8px 8px 0px 0px;
    padding-top: 40px;
    margin-bottom: 32px;
    background: ${(props) => (props.bg)};

    @media (max-width: 992px) {
        padding-top: 20px;
        margin-bottom: 10px;
    }

    span {
        width: 24px;
        margin: 0 auto;
        display: block;
        position: relative;
        z-index: 0;
    }
`

export const SbLine = styled.div`
    width: 23px;
    height: 48px;
    margin: 0 auto;

    @media (max-width: 992px) {
        width: 12px;
        height: 25px;
    }
`

export const SbIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    @media (max-width: 992px) {
        width: 58px;
        height: 58px;
        margin: 0 auto 12px;
    }
`

export const SbDescription = styled.div`
    text-align: center;

    h4 {
        ${({ theme }) => theme.heading.mobile.h4};
        color: ${({ theme }) => theme.colors.black};
        font-weight: 400;
        margin-bottom: 5px;
        text-align: center;

        @media (min-width: 992px) {
            margin-bottom: 16px;
            font-size: 24px;
            line-height: 32px;
            
        }
    }

    a {
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        text-align: center;
        color: ${({ theme }) => theme.colors.blue};
    }
`