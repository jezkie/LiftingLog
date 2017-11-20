import React from 'react';
import InlineEdit from 'react-edit-inline';

const InlineText = ({ valueLink, ...props }) => {
    return (
        <InlineEdit 
            text={valueLink.value}
            paramName='name'
            change={p => valueLink.set(p.name)}>
        </InlineEdit>
    );
};

export default InlineText;