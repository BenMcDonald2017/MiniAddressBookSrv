
import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda';
import { AddressBook} from '../../../controller/address/index'

export const addressAdd : Handler = async (event : APIGatewayEvent, context : Context, cb : Callback) => {
    
   const addressBook = new AddressBook(null)
   const result = await addressBook.add({})
   console.log(result)

   const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your addressAdd function executed successfully!',
        input: event,
      }),
    };
  
    let myContext = context
    console.log(JSON.stringify(myContext))
  
    cb(null, response);
  }