import styled from 'styled-components';

export const TodoWrapper = styled.div`
    padding: 10px;
    margin: 10px 0;
    background: yellow;
    box-shadow: 2px 2px 6px #000000;

    .todoInfo,
    .todoTags {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            flex: 1;
            margin: 0 5px;
        }

        .inputWrapper {
            padding-top: 8px;
            padding-left: 8px;
        }
    }
`;

export const TagList = styled.ul`
    display: flex;
    flex: 1;
    list-style: none;
    padding: 0;
    padding-top: 8px;
    padding-right: 8px;
`;

export const Tag = styled.li`
    display: inline-block;
    padding: 5px;
    margin-right: 8px;
    margin-bottom: 8px;
    background: #fff;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 0.7rem;
`;
