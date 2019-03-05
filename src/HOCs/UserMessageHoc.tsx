import React, { Component } from 'react';

import { UserMessage } from '../interfaces/UserMessage';

const initstate: UserMessage = {
    name: 'Arnab',
    message: 'Hello World'
}

type State = typeof initstate;

export const UserMessageHoc = (WrapperComponent: any) =>
    class HOC extends Component<{}, State> {
        readonly state: State = initstate;

        render() {
            return (<WrapperComponent name={this.state.name} message={this.state.message}></WrapperComponent>)
        }
    }
