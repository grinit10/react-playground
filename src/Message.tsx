import React from 'react';

import {UserMessageHoc} from './HOCs/UserMessageHoc';

const msgHtml = (prop: any):any => <p>{prop.message} from {prop.name}</p>

const Message = UserMessageHoc(msgHtml);
export default Message;