import React, { FC } from 'react';
import styled from 'styled-components';

interface PreloaderProps {}

const StyledPreloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.7);
`;

export const Preloader: FC<PreloaderProps> = (props) => {
    return (
        <StyledPreloader>
            <div>
                <svg
                    version='1.1'
                    id='L2'
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100px'
                    height='100px'
                    viewBox='0 0 100 100'
                    enableBackground='new 0 0 100 100'>
                    <circle fill='none' stroke='#000' strokeWidth='4' strokeMiterlimit='10' cx='50' cy='50' r='48' />
                    <line
                        fill='none'
                        strokeLinecap='round'
                        stroke='#000'
                        strokeWidth='4'
                        strokeMiterlimit='10'
                        x1='50'
                        y1='50'
                        x2='85'
                        y2='50.5'>
                        <animateTransform
                            attributeName='transform'
                            dur='2s'
                            type='rotate'
                            from='0 50 50'
                            to='360 50 50'
                            repeatCount='indefinite'
                        />
                    </line>
                    <line
                        fill='none'
                        strokeLinecap='round'
                        stroke='#000'
                        strokeWidth='4'
                        strokeMiterlimit='10'
                        x1='50'
                        y1='50'
                        x2='49.5'
                        y2='74'>
                        <animateTransform
                            attributeName='transform'
                            dur='15s'
                            type='rotate'
                            from='0 50 50'
                            to='360 50 50'
                            repeatCount='indefinite'
                        />
                    </line>
                </svg>
            </div>
        </StyledPreloader>
    );
};
