
import {Input , Props} from "../src/components/atoms/Input";
import {Meta , Story} from "@storybook/react";
import React from "react";



const meta : Meta = {
        title : "Input",
        component : Input,
     
}


export default meta;

const Template : Story<Props> = (args) => <Input {...args} />



export const Default = Template.bind({});

Default.args = {
        variant : 'primary',
        placeholder : "input a text",
        

}


export const Secondary = Template.bind({});

Secondary.args = {
        variant : 'secondary',
        placeholder : "input a text",
       

}


export const Login= Template.bind({});
Login.args = {
        variant : 'search',
        placeholder : "input a query",
       

}

export const Submit = Template.bind({});

Submit.args = {
        variant : 'enter',
        placeholder : "input a entry",
       

}

