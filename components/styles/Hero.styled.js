import styled from "styled-components";

export const Hero = styled.section`
    display: none;
    padding: 60px 0 70px 0;
    background: ${({ theme }) => theme.colors.hero};

    @media (min-width: 769px) {
        display: block;
    }
`

export const RightContent = styled.div`
    width: 40%;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`

export const LeftContent = styled.div`
    width: 60%;

    h1 {
        font-weight: 900;
        font-size: 44px;
        line-height: 50px;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.colors.black};
            
        @media (min-width: 992px) {
            font-size: 54px;
            line-height: 68px;
        }  

        @media (min-width: 1280px) {
            font-size: 64px;
            line-height: 70px;
        }

        br {
            display: none;
            
            @media (min-width: 1200px) {
                display: block;
            }
        }

        span {
            position: relative;
            display: inline-block;
            z-index: 1;
            color: ${({ theme }) => theme.colors.blue};

            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 23px;
                position: absolute;
                bottom: 4px;
                left: 0;
                z-index: -1;
                background: ${({ theme }) => theme.colors.cyan};
            }
        }
    }
`

export const Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`