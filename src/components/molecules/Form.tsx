import React, { ChangeEvent, Component } from 'react'
import {Login as LoginButton} from "../../../stories/Input.stories"
import {Login as LoginField} from "../../../stories/Input.stories"
import styled from 'styled-components'




const LoginForm = styled.form`
    
    


`

export interface Props {
    
    variant : string,
    onChange? : (event : React.ChangeEvent) =>void,
    onSubmit? : (e : React.FormEvent) => void,
}
interface State {
    
}

export  class Form extends Component<Props, State> {
    state = {}


    onChangeText = ( e : ChangeEvent<HTMLInputElement>) =>{
             e.preventDefault()

    }

    render() {
        return (
           <>
                <LoginField onChange={this.onChangeText} variant={''} children={undefined} placeholder={''} disabled={false}></LoginField>
                <LoginButton variant={''} children={undefined} placeholder={''} disabled={false} ></LoginButton>

           </>
        )
    }
}
