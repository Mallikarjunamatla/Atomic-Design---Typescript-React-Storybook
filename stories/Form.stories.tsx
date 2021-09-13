
import {Form , Props} from "../src/components/molecules/Form";
import {Meta , Story} from "@storybook/react";
import React from "react";



const meta : Meta = {
        title : "Form",
        component : Form,
     
}


export default meta;

const Template : Story<Props> = (args) => <Form {...args} />



export const DefaultForm = Template.bind({});

DefaultForm.args = {
        variant : 'primary'

}


export const SecondaryForm = Template.bind({});

SecondaryForm.args = {
        variant : 'secondary'

}


export const LoginForm = Template.bind({});

LoginForm.args = {
        variant : 'login'

}

export const SubmitForm = Template.bind({});

SubmitForm.args = {
        variant : 'submit'

}

