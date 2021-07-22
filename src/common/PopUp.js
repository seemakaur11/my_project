import React, { Component } from 'react'
import styled from 'styled-components'
import CrossIcon from '../assets/images/cross.svg'


const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 999;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: rgba(51,51,51,0.62);
`

const Wrapper = styled.div`
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #fff;
    ::-webkit-scrollbar {
        width: 0px;
    }
    width: 100%;
    height: 100%;
    @media (max-width: 500px){
        width: 260px;
        margin-top: 145px !important;
    }
`

const Cross = styled.img`
    top: 16px;
    z-index: 1;
    right: 16px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
`

class PopUp extends Component {

    static defaultProps = {
        height: 'auto',
        width: 'auto',
        closeOnEsc: false,
        className: '',
        customStyles: {},
        closeOnOutSideClick: true
    }

    constructor(props) {
        super(props)
        this.winWrapper = React.createRef()
    }

    // componentDidMount = () => {
    //     document.addEventListener('mousedown', this.handleClickOutside)
    //     document.addEventListener('keydown', this.handleKeyDown)
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClickOutside)
    //     document.removeEventListener('keydown', this.handleKeyDown)
    // }

    handleClickOutside = event => {
        const { closeOnOutSideClick } = this.props;
        const elemWrapper = this.winWrapper;
        if (!!elemWrapper && elemWrapper.current !== null && !elemWrapper.current.contains(event.target)) {
            !!closeOnOutSideClick && this.handleClose();
        }
    }

    handleKeyDown = e => {
        const { closeOnEsc, onClose } = this.props
        if ((e.keyCode === 27 || e.key === "Escape") && !!closeOnEsc) {
            onClose()
        }
    }

    handleClose = () => this.props.onClose()

    render() {
        const { height, width, children, className, customStyles } = this.props
        return (
            <Container className={`${className} center-flex`}>
                <Wrapper ref={this.winWrapper} height={height} width={width} style={customStyles}>
                    <Cross src={CrossIcon} alt="Close" onClick={() => this.handleClose()} />
                    {children}
                </Wrapper>
            </Container>
        )
    }
}

export default PopUp
