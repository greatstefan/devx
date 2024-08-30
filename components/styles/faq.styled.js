import styled from "styled-components"

export const AccordionSection = styled.section`
    background: ${({ theme }) => theme.colors.hero};
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
            margin-bottom: 40px;
        }
    }

    .faqcontainer {
        padding: 0 100px;

        a {
            padding: 10px 24px;
            border-radius: 4px;
            color: ${({ theme }) => theme.colors.white};
            background: ${({ theme }) => theme.colors.blue};
            display: block;
            max-width: 150px;
            font-size: 14px;
            line-height: 24px;
            text-decoration: none;
            text-align: center;
            margin: 30px auto 0;

            &:hover {
                background: ${({ theme }) => theme.colors.medblue}
            }
        }

        @media (max-width: 768px) {
            padding: 0;
        }
    }
`
export const Wrap = styled.div`
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
    span {
        svg{fill: none;stroke: #6D7280}
    }
`
export const Question = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    @media (min-width: 992px) {
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0.15px;
    }
`
export const Dropdown = styled.div`
    padding: 30px 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};

    p {
        font-size: 14px;
        line-height: 24px;
    }
`

