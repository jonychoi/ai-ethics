import React from "react";
import styled from "styled-components";
import {ThemeEvent} from '../../contexts/globalContext';

export const Text = styled.span`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color ? props.color : ThemeEvent().darkMode ? "white" : "black"};
    ${props => props.margin};
    ${props => props.padding};
    flex: ${props => props.flex};
    z-index: ${(props) => props.zIndex};
    ${props => props.to ? "cursor: pointer;" : null};
    ${props => props.to ? ":hover { opacity: 0.85 }" : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    letter-spacing: 0.25px;
    opacity: ${(props) => props.opacity};
`;

export const Flex = styled.div`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    ${props => props.margin};
    width: ${props => props.size ? props.size : props.width};
    height: ${props => props.size ? props.size : props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    ${props => props.to ? "cursor: pointer;" : null};
    ${props => props.to && !props.cursorOpaFalse ? ":hover { opacity: 0.85 }" : null};
    ${props => props.us === "none" ? "user-select: none" : null};
    opacity: ${props => props.opacity};
    position: ${props => props.position};
    :hover {
        img {
            opacity: ${(props) => props.to && !props.cursorOpaFalse ? 0.85 : 1}
        }
        span {
            opacity: ${(props) => props.to && !props.cursorOpaFalse ? 0.85 : 1}
        }
    };
    ${(props) => props.shadow && `transition: background-color .3s,color .3s,box-shadow .3s;`}
    ${(props) => props.shadow && `box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);`};
    ${(props) => props.scrollbarFalse && `
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
      }`};
    ${(props) => (props.bw || props.bc) && `border: ${props.bw ? props.bw : 1}px solid ${props.bc ? props.bc : "white"} `};
    overflow: ${(props) => props.overflow};
`;

export const Row = styled(Flex)`
    flex-direction: row;
`;

export const Col = styled(Flex)`
    flex-direction: column;
`;

export const Box = styled(Col)`
    transition: background-color .3s,color .3s,box-shadow .3s;
    box-shadow: 0 0 0.1rem rgb(0 0 0 / 10%), 0 0.15rem 0.9rem rgb(0 0 0 / 10%);
    border: 0;
    ::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;
      }
`;

export const Image = styled.img`
    position: ${props => props.position};
    object-fit: ${props => props.of};
    ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    opacity: ${props => props.opacity};
    z-index: ${(props) => props.zIndex};
`;

export const ImageWrapper = styled(Flex)`
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.bg};
    margin: ${(props) => props.margin ? props.margin : 0}px;
`;

export const CirclePic = ({image, size, flex, margin, bg, of, style, scale = 1}) => {
    return (
        <ImageWrapper style={style} bg={bg} margin={margin} width={size} height={size} flex={flex}>
            <Image of={of} width={size+'px'} height={size+'px'} style={{transform: `scale(${scale})`}} src={image}/>
        </ImageWrapper>
    )
}

export const Input = styled.input`
    ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    border: 0;
    color: ${(props) => props.color ? props.color : (ThemeEvent().darkMode ? "white" : "black")};
    ::placeholder {
        color: ${(props) => props.placeholderTextColor};
    };
`;

export const TextArea = styled.textarea`
    ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bg};
    ${props => props.padding};
    border-radius: ${props => props.circle ? '50%' : props.br};
    box-sizing: border-box;
    flex: ${props => props.flex};
    z-index: ${props => props.zIndex};
    font-weight: ${props => props.weight};
    font-size: ${props => props.size ? props.size : 15}px;
    line-height: ${props => props.lh}px;
    color: ${props => props.color};
    border: 0;
    color: ${(props) => props.color ? props.color : (ThemeEvent().darkMode ? "white" : "black")};
    ::placeholder {
        color: ${(props) => props.placeholderTextColor};
    };
    resize: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;