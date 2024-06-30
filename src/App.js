import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Board from './Board';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Board></Board>
        </ChakraProvider>
    );
}

export default App;
