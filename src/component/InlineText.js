import React from 'react';
import InlineEdit from 'react-edit-inline';

const InlineText = ({ valueLink, ...props }) => {
    return (
        <InlineEdit 
            text={valueLink.value}
            paramName='name'
            change={valueLink.set}>
        </InlineEdit>
    );
};

export default InlineText;