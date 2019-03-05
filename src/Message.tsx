import React from 'react';

import {UserMessage} from './interfaces/UserMessage';

export const Message = (prop: UserMessage) => (<p>{prop.message} from {prop.name}</p>)