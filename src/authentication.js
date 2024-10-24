class Client {

    static async connect({clientId, secretKey, url, callback}){
        const urlParams = new URLSearchParams(window.location.search);
        const session   = urlParams.get('session');
        const cb   = urlParams.get('cb');
        console.log(session);
        if(session === null){
            if(sessionStorage.getItem('cedruz.sso') === null){
                return new Promise((resolve, reject) => {
                    if(clientId === 'antan' && secretKey === 'nirmal'){
                        window.location.href = 'http://localhost:3002/?url='+url+'&cb='+callback+'&client='+clientId
                        console.log("please login")
                    }else{
                        reject({
                            message: 'ClientId is not valid'
                        })
                    }
                })
            }
        }else{

            if(session !== ''){
                if(sessionStorage.getItem('cedruz.sso') === null){
                    sessionStorage.setItem('cedruz.sso', session);
                    window.location.href = location.protocol + '//' + location.host + '/' +cb;
                }
            }
        }
    }

    static async auth(){
        const urlParams = new URLSearchParams(window.location.search);
        const url       = urlParams.get('url');
        const cb        = urlParams.get('cb');
        const client    = urlParams.get('client');
        
        if(client === 'antan'){

            if(sessionStorage.getItem('cedruz.sso') !== null){
                window.location.href = url+'/?cb='+cb+'&session='+sessionStorage.getItem('cedruz.sso');
            }
        }
    }

    static async user(){
        // const urlParams = new URLSearchParams(window.location.search);
        // const session   = urlParams.get('session');
        // console.log(session);


        // // urlParams.delete('session');
        // console.log(location.protocol + '//' + location.host);
        // if(session !== ''){
        //     if(sessionStorage.getItem('cedruz.sso') === null){
        //         // sessionStorage.setItem('cedruz.sso', session);
        //         // window.location.href = url+'/'+cb;
        //     }
        // }
    }

}

module.exports = Client;