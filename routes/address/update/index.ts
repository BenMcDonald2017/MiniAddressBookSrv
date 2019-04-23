import { Context, Handler, Callback } from 'aws-lambda'
import { AddressBook} from '../../../controller/address/index'

export const addressUpdate : Handler = async (event : any, context : Context, cb : Callback) => {
    interface Address {
      name: string;
      email: string;
      phone: string;
      id: string;
    }
    const address: Address = Object.assign({}, event);
    const addressBook = new AddressBook()
    const result = await addressBook.update(address)
    console.log(result)

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function update executed successfully!',
        input: event,
      }),
    };
  
    let myContext = context
    console.log(JSON.stringify(myContext))
  
    cb(null, response);
  }