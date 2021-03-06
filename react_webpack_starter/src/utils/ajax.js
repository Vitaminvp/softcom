export class Ajax {
    static get( url, responseCallback ){
        const xhr  = new XMLHttpRequest();
        const timeout = 15000;
        const timer = setTimeout( () => {
            xhr.abort();
        }, timeout);
        xhr.open('GET', url);
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200){
                clearTimeout(timer);
                responseCallback(JSON.parse(xhr.response));
            }else if(xhr.status === 404){
                responseCallback( {users: []} );
            }
        };
        xhr.send();
    }
    static post( urlpost, data, token, callback ){
        const xhr  = new XMLHttpRequest();
        const timeout = 15000;
        const timer = setTimeout( () => {
            xhr.abort();
        }, timeout);
        xhr.open('POST', urlpost);
        xhr.setRequestHeader( "Token", token );
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 201){
                clearTimeout(timer);
                callback( JSON.parse(xhr.response) );
            }
        };
        xhr.send(data);
    }
    static put( urlpost, data, callback ){
        const xhr  = new XMLHttpRequest();
        const timeout = 15000;
        const timer = setTimeout( () => {
            xhr.abort();
        }, timeout);
        xhr.open('PUT', urlpost);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                clearTimeout(timer);
                callback( JSON.parse(xhr.response) );
            }
        };
        xhr.send(JSON.stringify(data));
    }

    static delete( urlpost, callback ){
        const xhr  = new XMLHttpRequest();
        const timeout = 15000;
        const timer = setTimeout( () => {
            xhr.abort();
        }, timeout);
        xhr.open('DELETE', urlpost);
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                clearTimeout(timer);
                callback( JSON.parse(xhr.response) );
            }
        };
        xhr.send();
    }
}