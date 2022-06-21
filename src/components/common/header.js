import React, {useState, useEffect} from 'react';
import {Row, Text, Col, Flex} from './base';

export const Header = ({}) => {
    return (
        <Row padding="padding: 25px">
            <Col>
                <Text size="22">Ethics of Artificial Intelligence</Text>
                <Text size="18" margin="margin-top: 10px;">AICE301 - Korea University</Text>
            </Col>
        </Row>
    )
}

export default Header;