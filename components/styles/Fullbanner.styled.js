import styled from "styled-components";

export const FBSection = styled.section`
    padding-top: 34px;
    text-align: center;
    border-bottom: 3px solid #000;
    background: ${({ theme }) => theme.colors.hero};

    @media (min-width: 992px) {
        padding-top: 80px;
    }

    .MContainer {
        padding: 0;
    }

    svg {width: 100%}

    h1 {
        font-weight: 900;
        font-size: 32px;
        line-height: 45px;
        letter-spacing: -0.5px;
        margin-bottom: 30px;
        color: ${({ theme }) => theme.colors.black};

        @media (min-width: 992px) {
            font-size: 64px;
            line-height: 70px;
            margin-bottom: 50px;
        }

        span {
            color: ${({ theme }) => theme.colors.blue};
            position: relative;
            display: inline-block;
            z-index: 1;

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

    .desktop {display: none}
    .mobile {display: block}

    @media (min-width: 560px) {
        .desktop {display: block}
        .mobile {display: none}
    }
`