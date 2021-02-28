import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const Background = styled.div`
    width: 100%;
    height:100%;
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    flex: 1;
`;

export default Background;