import { Context, Handler, Callback } from 'aws-lambda'
import { AddressBook} from '../../../controller/address/index'

export const addressGet : Handler = async (event : any, context : Context, cb : Callback) => {
   interface Address {
    id: string;
   }
   const address: Address = Object.assign({}, event);
   const addressBook = new AddressBook()
   const result = await addressBook.get(address.id)
   console.log(result)

   const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function get executed successfully!',
        input: event,
      }),
    };
  
    let myContext = context
    console.log(JSON.stringify(myContext))
  
    cb(null, response);
  }