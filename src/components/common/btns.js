import React, {useState, useEffect} from 'react';
import {Flex, Row, Text, Col} from './base';

export const SliderBtn = ({}) => {
    return (
        <Row>

        </Row>
    )
};

export const LeftRightBtn = ({option, currentIdx, setCurrentIdx}) => {
    const [opacity, setOpacity] = useState(0.5);
    const IdxUpdater = () => {
        const id = option == "right" ? currentIdx + 1 : currentIdx - 1;
        return setCurrentIdx(id);
    }
    return (
        <Flex align="center" justify="center" us="none" to="cursor" width="50px" height="50px;" onMouseOver={() => setOpacity(1)} onMouseLeave={() => setOpacity(0.5)} position="fixed" style={option == "left" ? {left: 25} : {right: 25}} onClick={() => IdxUpdater()}>
            <Text size="40" style={{opacity: opacity}}>{option == "left" ? "<" : ">"}</Text>
        </Flex>
    )
}