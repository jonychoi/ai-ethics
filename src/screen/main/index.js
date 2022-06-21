import React, {useState, useEffect} from 'react';
import {Flex, Col, Row, Text} from '../../components/common/base';
import {LeftRightBtn} from '../../components/common/btns';
import contents from '../../content';
import { componentBger } from '../../styles';

export const Main = ({}) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    return (
        <Flex align="center" justify="center" width="100%" height="100%" position="absolute" style={{top: 0, left: 0}}>
            <Flex zIndex={10000}>
                <LeftRightBtn currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} option="left" />
                <LeftRightBtn currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} option="right" />
            </Flex>
            {contents.map((item, index) => <Slide currentIdx={currentIdx} item={item} id={index} key={index + 'slide'} />)}
        </Flex>
    )
};

export const Slide = ({currentIdx, item, id}) => {
    return (
        <Flex shadow={true} position="fixed" br="20px" zIndex={id} bg={componentBger()} style={{overflowY: 'scroll', top: '15%', left: currentIdx == id ? '5%' : id < currentIdx ? '5%' : '100%', transition: 'all 400ms'}} height={"70%"} width="90%">
            <Col width="100%" height="100%" padding="padding: 30px;">
                <Text size="25" weight="700" style={{fontFamily: "Cormorant garamond"}}>{item.title}</Text>
                {item.description}
            </Col>
            {item.date && <Text weight="700" size="25" style={{position: 'absolute', right: 30, top: 30, fontFamily: 'Cormorant Garamond'}}>{item.date}</Text>}
            {item.part && <Col position="absolute" style={{right: 15, bottom: 15}}>
                <Text weight="700" style={{textAlign: "right", fontFamily: 'Cormorant Garamond'}}>{item.part}</Text>
                <Text weight="40" style={{textAlign: "right", opacity: 0.7, fontFamily: 'Cormorant Garamond'}} margin="margin-top: 10px;">{item.chap}</Text>
            </Col>}
        </Flex>
    )
}

export default Main;