import styled from "styled-components";

export const StyledCard = styled.div`
    border-radius: 15px;
    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    align-items: centet;
    padding: 60px;
    margin: 40px 0;
    background-color: '#fff';
    flex-direction: ${({layout}) => layout || 'row'};

    img{
        width: 80%
    }

    & > div{
        flex:1;
    }

    @media(max-width: ${({theme})=>theme.mobile}){
        flex-direction: column;
    }
    `