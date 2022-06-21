import React, {useState, useEffect} from 'react';
import {Flex, Row, Text, Col} from './base';

export const SliderBtn = ({}) => {
    return (
        <Row>

        </Row>
    )
};

export const LeftRightBtn = ({option, currentIdx, setCurrentIdx}) => {
    const IdxUpdater = () => {
        const id = option == "right" ? currentIdx + 1 : currentIdx - 1;
        return setCurrentIdx(id);
    }
    return (
        <Flex position="fixed" style={option == "left" ? {left: 25} : {right: 25}} onClick={() => IdxUpdater()}>
            <Text>{option == "left" ? "<" : ">"}</Text>
        </Flex>
    )
}