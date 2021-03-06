import React from 'react';
import uniqid from 'uniqid';

function AutoLink({ text }) {
    const delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

    return (
        <React.Fragment>
            {text.split(delimiter).map(word => {
                let match = word.match(delimiter);
                if (match) {
                    let url = match[0];
                    return (
                        <a key={uniqid()} href={url.startsWith("http") ? url : `http://${url}`}>{url}</a>
                    );
                }
                return word;
            })}
        </React.Fragment>
    );
}
export default AutoLink;
