import React, {useState, useEffect} from 'react';
import {Row, Text, Col, Flex, Image} from './base';

export const Header = ({}) => {
    return (
        <Row padding="padding: 25px" align="center" justify="space-between">
            <Row align="center" justfiy="space-between">
                <Image style={{width: 40, objectFit: 'contain'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Korea_University_Global_Symbol.svg/1200px-Korea_University_Global_Symbol.svg.png" />
                <Col margin="margin-left: 18px;">
                    <Text size="22" weight="700">Ethics of Artificial Intelligence</Text>
                    <Text size="15" margin="margin-top: 10px;" style={{opacity: 0.8}}>AICE301 - Korea University</Text>
                </Col>
            </Row>
        </Row>
    )
}

export default Header;