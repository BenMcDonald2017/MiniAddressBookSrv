import * as AWS from 'aws-sdk'

AWS.config.update({region: 'us-east-2'});

let docClient = new AWS.DynamoDB.DocumentClient();

interface Address {
    name: string;
    email: string;
    phone: string;
    id: string;
 }

export class AddressBook { 
    constructor() {}  
    
     add(address:Address): object {
        let params = {
            Item: {
                id: address.id, 
                name: address.name,
                email: address.email,
                phone: address.phone,
                },
            TableName: "address",
        };

        return new Promise((resolve) => {
            docClient.put(params, function (err, data) {
                if (err) {
                    resolve(err)
                } else {
                    resolve(data) 
                }
            });
        });
    }

    get(id:string): object {
        let params = {
            TableName: "address",
            Key:{
                id
            }
        };

        return new Promise((resolve) => {
            docClient.get(params, function (err, data) {
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
        let params = {
            TableName: "address",
            Key:{
                id
            }
        };

        return new Promise((resolve) => {
            docClient.delete(params, function (err, data) {
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

    name: string;
    email: string;
    phone: string;

    update(address:Address): object {
        var params = {
            TableName:"address",
            Key:{
                "id": address.id,
            },
            UpdateExpression: "set name = :n, email=:e, phone=:p",
            ExpressionAttributeValues:{
                ":n":address.name,
                ":e":address.email,
                ":p":address.phone,
            },
            ReturnValues:"UPDATED_NEW"
        };

        return new Promise((resolve) => {
            docClient.update(params, function (err, data) {
                if (err) {
                    console.log(err);
                    resolve(err)
                } else {
                    console.log(JSON.stringify(data))
                    resolve(data) 
                }
            });
        });

        return address
    }
 } 