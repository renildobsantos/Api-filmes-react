import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    align-items: center;
    Justify-content: space-between;
    height: 2vh;
    width: 100%;
    

    h1 {
        color: red;
    }

    span {
        color: white;
    }

    ul {
        display: flex;
        gap: 40px;
    }

    li {
        list-style: none;
        margin-left: 20px;
        border: 1px solid gray;
        width: 80px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;

    }
`

export const Container = styled.div `

    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;  
`
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span {
        font-weight: bold;
    }

    a {
        transition: all 0.3s;
    }

    a: hover {
        transform: scale(1.1);

    }
`
