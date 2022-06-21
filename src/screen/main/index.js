import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../components/common/base';
import {LeftRightBtn} from '../../components/common/btns';

export const Main = ({}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    return (
        <Flex align="center" justify="center" width="100%" height="100%">
            <LeftRightBtn currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} option="left" />
            <LeftRightBtn currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} option="right" />
        </Flex>
    )
};

export const Slide = ({currentIdx, item, id}) => {
    return (
        <Flex margin="10%" position="fixed" style={{left: currentIdx == id ? '0%' : '100%', transition: 'all 600ms'}} height="80%" width="80%">

        </Flex>
    )
}

export default Main;