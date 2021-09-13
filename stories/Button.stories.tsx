
import {Button , Props} from "../src/components/atoms/Button";
import {Meta , Story} from "@storybook/react";



const meta : Meta = {
        title : "Button",
        component : Button,
     
}


export default meta;

const Template : Story<Props> = (args) => <Button {...args} />



export const Default = Template.bind({});

Default.args = {
        variant : 'primary'

}


export const Secondary = Template.bind({});

Secondary.args = {
        variant : 'secondary'

}


export const Login = Template.bind({});

Login.args = {
        variant : 'login'

}

export const Submit = Template.bind({});

Submit.args = {
        variant : 'submit'

}

