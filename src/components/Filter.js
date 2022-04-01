import React from 'react'
import styled from 'styled-components';


const FilterStyled = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 25px;
        padding-right: 25px;
        gap: 8px;

        .filter{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            flex-wrap: wrap;

            >span{
                text-align: center;
                opacity: .4;
                transition: opacity var(--transition);
                cursor: pointer;
                font-size: .9em;
                :hover{
                    opacity: .7;
                }
            }

            :nth-child(1){
                span{
                    cursor: initial;
                    :hover{
                        opacity: .4;
                    }
                }
            } 
        }  
        
        @media (max-width: 400px) {
            flex-wrap: wrap;
            justify-content: center;
        }
`

export default function Filter(props) {
    return (
        <FilterStyled>
            <div className='filter'>
                <span>{`${props.left} items left`}</span>
            </div>
            <div className='filter'>
                <span onClick={props.clickAll}>All</span>
                <span onClick={props.clickActivated}>Active</span>
                <span onClick={props.clickCompleted}>Completed</span>
            </div>
            <div className='filter'>
                <span onClick={props.clearCompleted}>Clear Completed</span>
            </div>
        </FilterStyled>
    )
}
