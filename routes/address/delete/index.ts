
import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda'
import { AddressBook} from '../../../controller/address/index'

export const addressDelete : Handler = (event : APIGatewayEvent, context : Context, cb : Callback) => {

   const addressBook = new AddressBook(null)
   const result = addressBook.delete('')
   console.log(result)
   
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function delete executed successfully!',
        input: event,
      }),
    };
  
    let myContext = context
    console.log(JSON.stringify(myContext))
  
    cb(null, response);
  }