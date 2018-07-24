import React from 'react';

const layout = (props) =>
    <div>
        <div>
            toolbar logo..
        </div>
        <main>
            {props.children}
        </main>
    </div>

export default layout;