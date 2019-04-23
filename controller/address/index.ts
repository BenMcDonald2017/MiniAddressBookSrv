import * as AWS from 'aws-sdk'
AWS.config.update({region: 'us-east-2'});

let docClient = new AWS.DynamoDB.DocumentClient();

export class AddressBook { 
    id:string; 
    
    constructor(id:string) { 
       this.id = id 
    }  
    
     add(address:object): object {

        return address
    }

    get(id:string): object {
        return {id}
    }

    all(): object {
        let params = {
            TableName: "address",
        };

        return new Promise((resolve) => {
            docClient.scan(params, function (err, data) {
                if (err) {
                    console.log(err);
                    resolve(err)
                } else {
                    console.log(JSON.stringify(data))
                    resolve(data) 
                }
            });
        });
    }

    delete(id:string): object {
        return {id}
    }

    update(address:object): object {
        return address
    }
 } 