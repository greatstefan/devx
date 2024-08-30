import styled from "styled-components";

export const FooterSection = styled.footer`
    background: ${({ theme }) => theme.colors.footer};
    padding: 100px 0 60px;

    @media (max-width: 768px) {
        padding: 40px 0;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0
    }

    p {
        color: ${({ theme }) => theme.colors.white};
        font-size: 12px;
    }
`

export const Col4 = styled.div`
    //max-width: 33%;
    width: 100%;
    margin: 20px 0;

    

    &:nth-child(2) {
        li span {margin-top:0}
    }

    h4 {
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 10px;
        font-size: 22px;

        @media (min-width: 1200px) {
            margin-bottom: 25px;
        }
    }

    ul {
        margin: 0;

        li {
            margin-bottom: 0;

            @media (min-width: 768px) {
                margin-bottom: 5px;
            }

            span {
                display: inline-block;
                margin-top: 20px;
                cursor: pointer;
                color: ${({ theme }) => theme.colors.white};
            }
        }
    }
`
export const Col5 = styled.div`
    max-width: 100%;
    width: 100%;

    @media (min-width: 768px) {
        max-width: 30%;
    }

    img {
        max-width: 300px;
    }
`
export const Col7 = styled.div`
    max-width: 100%;
    width: 100%;

    .Zontainer {
        flex-direction: row
    }

    @media (min-width: 768px) {
        max-width: 70%;
    }
`
export const Col12 = styled.div`
    max-width: 100%;
    width: 100%;
`
export const Socials = styled.div`
    margin-bottom: 20px;

    a {
        display: inline-block;
        display: inline-block;
        margin-right: 5px;

        &:nth-last-child {
            margin-right: 0;
        }
        &:hover {
            opacity: .7;
        }
    }
`
export const FooterLogo = styled.img`
    margin-bottom: 50px;
`
export const LinkedIn = styled.img`
    max-width: 34px !important;
`