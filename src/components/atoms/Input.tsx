import React, { Component, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'






const InputPrimary = styled.input`
   width : 40%;
   height: 20%;
   border-radius: 5px;





`



export interface Props extends HTMLAttributes<HTMLInputElement> {

    variant : string,
    children : ReactNode,
    placeholder : string,
    
    disabled : boolean
    
}
interface State {
    
}

export  class Input extends Component<Props, State> {
    state = {}

    render() {
        return (
           <>
           { this.props.variant == "primary" && 
            <InputPrimary {...this.props}>
            </InputPrimary>
            }

            { this.props.variant == "secondary" && 
            <InputPrimary {...this.props}>
            </InputPrimary>
            }


            { this.props.variant == "search" && 
            <InputPrimary {...this.props}>
            </InputPrimary>
            }


            { this.props.variant == "enter" && 
            <InputPrimary {...this.props}>
            </InputPrimary>
            }




            </>
        )
    }
}
